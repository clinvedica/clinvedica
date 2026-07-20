import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: `${siteUrl}/`,
    name: "Clin Vedica Life Sciences",
    short_name: "Clin Vedica",
    description:
      "Clin Vedica Life Sciences in Jalandhar, Punjab, India — ethical, compliant biospecimen solutions for global biomedical research.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#1a0505",
    theme_color: "#A32626",
    scope: "/",
    lang: "en-IN",
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
