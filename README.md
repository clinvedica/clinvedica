# Clinvedica

Clinvedica is a web application built with [Next.js](https://nextjs.org) using the App Router. It is optimized for SEO, fast page loads, and a modern developer experience.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package manager**: npm
- **Deployment**: Vercel (recommended) or any Node.js hosting

## Getting Started

### Prerequisites

- **Node.js** v18 or later (LTS recommended)
- **npm** (or yarn, pnpm, bun)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd clinvedica
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing the page by modifying `app/page.tsx`; the page updates as you save.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) — interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js) — feedback and contributions welcome

## Deploy on Vercel

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SEO & Google Search Console

The app is set up for search engines and Google Search Console.

### What’s included

- **Metadata**: Title, description, keywords, Open Graph, and Twitter cards in `app/layout.tsx`
- **Sitemap**: `app/sitemap.ts` generates `/sitemap.xml` with all public pages
- **Robots**: `app/robots.ts` generates `/robots.txt` (allows crawling, points to sitemap, disallows `/api/`)
- **Structured data**: JSON-LD for Organization and WebSite in `components/JsonLd.tsx`
- **Web app manifest**: `app/manifest.ts` serves `/manifest.webmanifest` (add `icon-192.png` and `icon-512.png` to `public/` if you use it)

### Environment variables (optional)

In `.env.local` (see `.env.example`):

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://clinvedica.app`). Used in sitemap, Open Graph, and JSON-LD. |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console HTML tag verification content (the value only, not the full meta tag). |

### Submitting to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add a property with your site URL (e.g. `https://clinvedica.app`).
3. **Verify ownership**: Choose “HTML tag”, copy the `content` value from the meta tag, set it in `.env.local` as `GOOGLE_SITE_VERIFICATION=...`, redeploy, then click “Verify” in Search Console.
4. **Submit sitemap**: In Search Console, open “Sitemaps”, enter `sitemap.xml`, and submit. URL: `https://yourdomain.com/sitemap.xml`.
5. Optionally add `public/og-image.png` (1200×630) for link previews and `public/logo.png` for structured data.
