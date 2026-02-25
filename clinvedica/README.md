This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SEO & Google Search Console

The app is set up for search engines and Google Search Console.

### What’s included

- **Metadata**: Title, description, keywords, Open Graph, and Twitter cards in `app/layout.tsx`.
- **Sitemap**: `app/sitemap.ts` generates `/sitemap.xml` with all public pages.
- **Robots**: `app/robots.ts` generates `/robots.txt` (allows crawling, points to sitemap, disallows `/api/`).
- **Structured data**: JSON-LD for Organization and WebSite in `components/JsonLd.tsx`.
- **Web app manifest**: `app/manifest.ts` serves `/manifest.webmanifest` (optional; add `icon-192.png` and `icon-512.png` to `public/` if you use it).

### Environment variables (optional)

In `.env.local` (see `.env.example`):

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://clinvedica.app`). Used in sitemap, Open Graph, and JSON-LD. |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console HTML tag verification content (the value only, not the full meta tag). |

### Submitting to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add a property: enter your site URL (e.g. `https://clinvedica.app`).
3. **Verify ownership**: Choose “HTML tag”, copy the `content` value from the meta tag (e.g. `abc123...`), and set it in `.env.local` as `GOOGLE_SITE_VERIFICATION=abc123...`. Redeploy so the meta tag is present, then click “Verify” in Search Console.
4. **Submit sitemap**: In Search Console, open “Sitemaps”, enter `sitemap.xml`, and submit. The sitemap URL is `https://yourdomain.com/sitemap.xml`.
5. Optionally add `public/og-image.png` (1200×630) for link previews and `public/logo.png` for structured data.
