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

export const OFFICE_CITY = "Jalandhar";
export const OFFICE_REGION = "Punjab";
export const OFFICE_COUNTRY = "India";
export const OFFICE_POSTAL_CODE = "144007";
export const OFFICE_STREET = "C-2, Sunshine Valley, Suchi Pind";

/** Shared location SEO phrases (use naturally in metadata/copy). */
export const LOCATION_SEO_PHRASE =
  "based in Jalandhar, Punjab, India";

export const DEFAULT_SEO_DESCRIPTION =
  "Clin Vedica Life Sciences in Jalandhar, Punjab, India — ethical, compliant biospecimen solutions for global biomedical research. Tissue samples, blood derivatives, biofluids, and matched sets across oncology and non-oncology indications.";

export const DEFAULT_SEO_KEYWORDS = [
  "biospecimens",
  "biospecimen company India",
  "biospecimen supplier Jalandhar",
  "biospecimen procurement Punjab",
  "human biospecimens India",
  "tissue samples India",
  "blood derivatives",
  "biofluids",
  "FFPE",
  "frozen tissue",
  "PBMC",
  "clinical research India",
  "biomedical research Punjab",
  "life sciences Jalandhar",
  "Clin Vedica Life Sciences",
  "Clin Vedica Jalandhar",
] as const;

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
