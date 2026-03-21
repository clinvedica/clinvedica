import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getSiteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = getSiteUrl();
/** Google Search Console HTML tag method; override via GOOGLE_SITE_VERIFICATION if needed */
const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION ??
  "p6oqol9tv0ZsZ1Ulh5wNOou3h_BlmUmDfrz-Q7NwCpc";

export const viewport: Viewport = {
  themeColor: "#A32626",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Clin Vedica Life Sciences",
  title: {
    default: "Clin Vedica Life Sciences - Powering Discovery",
    template: "%s | Clin Vedica Life Sciences",
  },
  description:
    "Ethical, Compliant, and Tailored Biospecimen Solutions for Global Biomedical Research. Tissue samples, blood derivatives, biofluids, and matched sets for oncology, infectious disease, and more.",
  keywords: [
    "biospecimens",
    "tissue samples",
    "blood derivatives",
    "biofluids",
    "life sciences",
    "clinical research",
    "biomedical research",
    "FFPE",
    "frozen tissue",
    "serum plasma",
    "PBMC",
    "India biospecimens",
  ],
  authors: [{ name: "Clin Vedica Life Sciences", url: siteUrl }],
  creator: "Clin Vedica Life Sciences",
  publisher: "Clin Vedica Life Sciences",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    apple: "/logo.png",
  },
  appleWebApp: {
    capable: true,
    title: "Clin Vedica Life Sciences",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Clin Vedica Life Sciences",
    title: "Clin Vedica Life Sciences - Powering Discovery",
    description:
      "Ethical, Compliant, and Tailored Biospecimen Solutions for Global Biomedical Research.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Clin Vedica Life Sciences - Biospecimen Solutions for Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clin Vedica Life Sciences - Powering Discovery",
    description:
      "Ethical, Compliant, and Tailored Biospecimen Solutions for Global Biomedical Research.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Health & Life Sciences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta
          name="google-site-verification"
          content={googleSiteVerification}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <JsonLd />
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
