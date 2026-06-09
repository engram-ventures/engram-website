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
  "superai":
    "https://engram.ventures/?utm_source=linkedin&utm_medium=social-organic&utm_campaign=2026-superai-launch&utm_content=intro-post",
};

export function resolveShortLink(slug: string): string | null {
  return shortLinks[slug] ?? null;
}
