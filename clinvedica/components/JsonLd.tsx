const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clinvedica.app";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Clin Vedica Life Sciences",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Ethical, Compliant, and Tailored Biospecimen Solutions for Global Biomedical Research.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C-2, Sunshine Valley, Suchi Pind",
    addressLocality: "Jalandhar",
    addressRegion: "Punjab",
    postalCode: "144007",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7009810865",
    email: "pankaj@clinvedicalifesciences.com",
    contactType: "customer service",
    areaServed: "Worldwide",
  },
  sameAs: ["https://www.linkedin.com/company/clinvedica"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Clin Vedica Life Sciences",
  url: siteUrl,
  description:
    "Ethical, Compliant, and Tailored Biospecimen Solutions for Global Biomedical Research.",
  publisher: {
    "@type": "Organization",
    name: "Clin Vedica Life Sciences",
    url: siteUrl,
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
    </>
  );
}
