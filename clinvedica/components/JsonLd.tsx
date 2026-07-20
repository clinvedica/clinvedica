import {
  getSiteUrl,
  OFFICE_ADDRESS,
  OFFICE_CITY,
  OFFICE_COUNTRY,
  OFFICE_POSTAL_CODE,
  OFFICE_REGION,
  OFFICE_STREET,
  DEFAULT_SEO_DESCRIPTION,
} from "@/lib/site";

const siteUrl = getSiteUrl();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness", "LocalBusiness"],
  name: "Clin Vedica Life Sciences",
  alternateName: ["Clin Vedica", "ClinVedica"],
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  description: DEFAULT_SEO_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: OFFICE_STREET,
    addressLocality: OFFICE_CITY,
    addressRegion: OFFICE_REGION,
    postalCode: OFFICE_POSTAL_CODE,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.326,
    longitude: 75.5762,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-7009810865",
      email: "pankaj@clinvedicalifesciences.com",
      contactType: "customer service",
      areaServed: ["IN", "Worldwide"],
      availableLanguage: ["English", "Hindi", "Punjabi"],
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Jalandhar",
    },
    {
      "@type": "State",
      name: "Punjab",
    },
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "Place",
      name: "Worldwide",
    },
  ],
  knowsAbout: [
    "Human biospecimens",
    "Tissue samples",
    "Blood derivatives",
    "Biofluids",
    "Oncology biospecimens",
    "Clinical research support",
  ],
  sameAs: ["https://www.linkedin.com/company/clinvedica"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Clin Vedica Life Sciences",
  url: siteUrl,
  description: DEFAULT_SEO_DESCRIPTION,
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: "Clin Vedica Life Sciences",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_STREET,
      addressLocality: OFFICE_CITY,
      addressRegion: OFFICE_REGION,
      postalCode: OFFICE_POSTAL_CODE,
      addressCountry: "IN",
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/solutions?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Clin Vedica Life Sciences",
  url: siteUrl,
  telephone: "+91-7009810865",
  email: "pankaj@clinvedicalifesciences.com",
  description: DEFAULT_SEO_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: OFFICE_STREET,
    addressLocality: OFFICE_CITY,
    addressRegion: OFFICE_REGION,
    postalCode: OFFICE_POSTAL_CODE,
    addressCountry: OFFICE_COUNTRY,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.326,
    longitude: 75.5762,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
