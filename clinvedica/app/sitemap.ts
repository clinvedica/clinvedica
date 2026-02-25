import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clinvedica.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = {
    changeFrequency: "weekly" as const,
    priority: 0.8,
  };

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      ...base,
    },
    {
      url: `${siteUrl}/solutions`,
      lastModified: new Date(),
      ...base,
    },
    {
      url: `${siteUrl}/solutions/tissue-samples`,
      lastModified: new Date(),
      ...base,
    },
    {
      url: `${siteUrl}/solutions/blood-derivatives`,
      lastModified: new Date(),
      ...base,
    },
    {
      url: `${siteUrl}/solutions/biofluids`,
      lastModified: new Date(),
      ...base,
    },
    {
      url: `${siteUrl}/solutions/matched-sets`,
      lastModified: new Date(),
      ...base,
    },
    {
      url: `${siteUrl}/therapeutic-area`,
      lastModified: new Date(),
      ...base,
    },
    {
      url: `${siteUrl}/capabilities`,
      lastModified: new Date(),
      ...base,
    },
    {
      url: `${siteUrl}/quality-compliance`,
      lastModified: new Date(),
      ...base,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/feasibility-request`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
