export const TAG_CATEGORY_ORDER = [
  'Languages',
  'Frameworks',
  'AI/ML',
  'Libraries',
  'Tooling',
  'APIs & Platforms',
  'Topics',
] as const;

export type TagCategory = (typeof TAG_CATEGORY_ORDER)[number];

const CATEGORY_BY_TAG: Record<string, TagCategory> = {
  python: 'Languages',
  kotlin: 'Languages',
  typescript: 'Languages',

  fastapi: 'Frameworks',
  starlette: 'Frameworks',
  'jetpack compose': 'Frameworks',
  react: 'Frameworks',

  openspiel: 'AI/ML',
  pytorch: 'AI/ML',
  ismcts: 'AI/ML',
  openskill: 'AI/ML',
  gemini: 'AI/ML',
  'faster-whisper': 'AI/ML',

  pydantic: 'Libraries',
  polyfactory: 'Libraries',
  faker: 'Libraries',
  retrofit: 'Libraries',
  okhttp: 'Libraries',
  'kotlinx.serialization': 'Libraries',
  pyscenedetect: 'Libraries',
  datastore: 'Libraries',

  pytest: 'Tooling',
  uv: 'Tooling',
  mkdocs: 'Tooling',
  ffmpeg: 'Tooling',
  encryptedsharedpreferences: 'Tooling',
  workmanager: 'Tooling',

  'instagram graph api': 'APIs & Platforms',
};

export function getTagCategory(tag: string): TagCategory {
  return CATEGORY_BY_TAG[tag.toLowerCase()] ?? 'Topics';
}

export function groupTagsByCategory(tags: string[]): { category: TagCategory; tags: string[] }[] {
  const buckets = new Map<TagCategory, string[]>();
  for (const tag of tags) {
    const category = getTagCategory(tag);
    const bucket = buckets.get(category) ?? [];
    bucket.push(tag);
    buckets.set(category, bucket);
  }
  return TAG_CATEGORY_ORDER.filter((category) => buckets.has(category)).map((category) => ({
    category,
    tags: buckets.get(category)!,
  }));
}
