import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clinvedica.app";
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  ...(googleVerification && {
    verification: {
      google: googleVerification,
    },
  }),
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
        url: "/og-image.png",
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
