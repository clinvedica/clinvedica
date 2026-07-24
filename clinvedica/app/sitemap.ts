import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

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
      url: `${siteUrl}/solutions/animal-tissue-samples`,
      lastModified: new Date(),
      ...base,
    },
    {
      url: `${siteUrl}/solutions/animal-blood-biofluids`,
      lastModified: new Date(),
      ...base,
    },
    {
      url: `${siteUrl}/therapeutic-area`,
      lastModified: new Date(),
      ...base,
    },
    ...[
      'oncology',
      'autoimmune',
      'urology',
      'dermatology',
      'infectious-diseases',
      'cardiology',
      'respiratory',
      'nephrology',
      'cardiovascular',
    ].map((slug) => ({
      url: `${siteUrl}/therapeutic-area/${slug}`,
      lastModified: new Date(),
      ...base,
    })),
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
