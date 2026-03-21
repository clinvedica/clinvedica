import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: `${siteUrl}/`,
    name: "Clin Vedica Life Sciences",
    short_name: "Clin Vedica",
    description:
      "Ethical, Compliant, and Tailored Biospecimen Solutions for Global Biomedical Research.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#1a0505",
    theme_color: "#A32626",
    scope: "/",
    lang: "en",
    categories: ["health", "science", "business"],
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
