/**
 * Short-link map for LinkedIn (and other campaign) posts.
 *
 * Each entry maps a slug to the full destination URL including UTM params.
 * Add a row when a post goes live; reference it as engram.ventures/go/<slug>.
 *
 * Convention:
 *   utm_source = linkedin
 *   utm_medium = social-organic | social-paid
 *   utm_campaign = <kebab-case theme>
 *   utm_content = <post-slug-variant>
 */
export const shortLinks: Readonly<Record<string, string>> = {
  // Example (commented — uncomment + edit when first post goes live):
  // "q3-track-record":
  //   "https://engram.ventures/track-record?utm_source=linkedin&utm_medium=social-organic&utm_campaign=2026-h1-track-record&utm_content=post-01-due-diligence-hook",
};

export function resolveShortLink(slug: string): string | null {
  return shortLinks[slug] ?? null;
}
