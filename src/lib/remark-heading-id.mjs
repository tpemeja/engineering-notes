import { visit } from 'unist-util-visit';

// MDX reserves `{` for JS expressions and `<` for JSX, so the common
// `## Title {#id}` anchor syntax can't be used here — it fails to parse.
// This uses a pipe-delimited marker instead: `## Title |#id|`.
const HEADING_ID_PATTERN = /\s*\|#([a-z0-9-]+)\|\s*$/i;

/**
 * Lets a heading declare an explicit anchor id, e.g. `## Title |#my-id|`,
 * so the anchor stays stable if the heading text changes later. Astro's
 * built-in heading-id rehype plugin only assigns a slug when one isn't
 * already set, so this runs earlier (at the remark/mdast stage) and wins.
 */
export function remarkHeadingId() {
  return (tree) => {
    visit(tree, 'heading', (node) => {
      const lastChild = node.children.at(-1);
      if (!lastChild || lastChild.type !== 'text') return;

      const match = HEADING_ID_PATTERN.exec(lastChild.value);
      if (!match) return;

      lastChild.value = lastChild.value.slice(0, match.index);
      node.data ??= {};
      node.data.hProperties = { ...node.data.hProperties, id: match[1] };
    });
  };
}
