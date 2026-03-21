/**
 * `/favicon.ico` is served from static files. Next.js prefers `app/favicon.ico` when present;
 * keep it identical to `public/favicon.ico` after updating the asset.
 */
export const FAVICON_PATH = "/favicon.ico" as const;

/** Production canonical origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL. */
const DEFAULT_SITE_URL = "https://clinvedica.com";

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}
