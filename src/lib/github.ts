import { site } from '../data/site';

export interface GitHubActivity {
  label: string;
  repo: string;
  href: string;
  date: Date;
}

interface GitHubEvent {
  type: string;
  repo: { name: string };
  created_at: string;
  payload?: { ref_type?: string; action?: string; commits?: unknown[] };
}

let cache: GitHubActivity[] | null = null;

function describeEvent(event: GitHubEvent): string | null {
  switch (event.type) {
    case 'PushEvent': {
      const count = event.payload?.commits?.length ?? 1;
      return `Pushed ${count} commit${count === 1 ? '' : 's'} to`;
    }
    case 'CreateEvent':
      return event.payload?.ref_type === 'repository' ? 'Created' : 'Created a branch/tag in';
    case 'PullRequestEvent':
      return `${event.payload?.action === 'opened' ? 'Opened' : 'Updated'} a pull request in`;
    case 'IssuesEvent':
      return `${event.payload?.action === 'opened' ? 'Opened' : 'Updated'} an issue in`;
    case 'WatchEvent':
      return 'Starred';
    case 'ReleaseEvent':
      return 'Published a release in';
    case 'PublicEvent':
      return 'Open-sourced';
    default:
      return null;
  }
}

export async function getRecentGitHubActivity(limit = 5): Promise<GitHubActivity[]> {
  if (cache) return cache.slice(0, limit);

  try {
    const response = await fetch(`https://api.github.com/users/${site.githubUser}/events/public?per_page=30`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!response.ok) throw new Error(`GitHub API responded ${response.status}`);

    const events = (await response.json()) as GitHubEvent[];
    const activity: GitHubActivity[] = [];

    for (const event of events) {
      const label = describeEvent(event);
      if (!label) continue;
      activity.push({
        label,
        repo: event.repo.name,
        href: `https://github.com/${event.repo.name}`,
        date: new Date(event.created_at),
      });
      if (activity.length >= 20) break;
    }

    cache = activity;
    return activity.slice(0, limit);
  } catch {
    return [];
  }
}
