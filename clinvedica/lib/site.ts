/**
 * `/favicon.ico` is served from static files. Next.js prefers `app/favicon.ico` when present;
 * keep it identical to `public/favicon.ico` after updating the asset.
 */
export const FAVICON_PATH = "/favicon.ico" as const;

/** Production canonical origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL. */
const DEFAULT_SITE_URL = "https://clinvedica.com";

/** Exact office address used across the site and Google Maps. */
export const OFFICE_ADDRESS =
  "C-2, Sunshine Valley, Suchi Pind, Jalandhar, Punjab 144007, India";

/** Opens Google Maps with directions to the exact office address. */
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  OFFICE_ADDRESS
)}`;

/** Embeddable Google Maps pin for the exact office address. */
export const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  OFFICE_ADDRESS
)}&hl=en&z=17&output=embed`;

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}
