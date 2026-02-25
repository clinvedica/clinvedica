import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clinvedica.app";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Clin Vedica Life Sciences",
    short_name: "Clin Vedica",
    description:
      "Ethical, Compliant, and Tailored Biospecimen Solutions for Global Biomedical Research.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0ea5e9",
    scope: siteUrl,
    lang: "en",
    categories: ["health", "science", "business"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
