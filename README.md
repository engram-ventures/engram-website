# Engram Ventures — Website

Next.js 15 · App Router · TypeScript · Tailwind CSS · Vercel

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with Engram brand palette
- **Fonts**: Cormorant Garamond + Jost + JetBrains Mono (Google Fonts via next/font)
- **Email**: Resend (contact form)
- **Hosting**: Vercel

## Getting started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# → Add your RESEND_API_KEY

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, services overview, about teaser, CTA |
| `/services` | Full service descriptions with deliverables |
| `/about` | Founder story, credentials, values |
| `/contact` | Contact form (powered by Resend) |

## Contact form setup (Resend)

1. Create a free account at [resend.com](https://resend.com)
2. Add and verify `engramventures.com` as a sending domain (add DNS records via Cloudflare/Namecheap)
3. Create an API key
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
5. In Vercel dashboard → Settings → Environment Variables, add the same key

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments on push.

## Brand tokens (Tailwind)

```js
// Colors
bg-navy        // #1C2B3A
bg-ember       // #C96A3A
bg-sage        // #5C8272
bg-parchment   // #F5F1EB
text-slate-warm // #6B7A8D

// Fonts
font-display   // Cormorant Garamond (headings)
font-body      // Jost (body, UI)
font-mono      // JetBrains Mono (code)
```

## SEO

- Metadata configured in each `page.tsx` via `export const metadata`
- `sitemap.xml` auto-generated at `/sitemap.xml`
- `robots.txt` auto-generated at `/robots.txt`
- OG image: add a `1200×630` PNG at `/public/og-image.png`
- Update `metadataBase` in `app/layout.tsx` if domain changes

## Next steps

- [ ] Add ABN to footer in `components/Footer.tsx`
- [ ] Add `public/og-image.png` (1200×630, branded)
- [ ] Add favicon files to `/public` (`favicon.ico`, `icon.png`, `apple-icon.png`)
- [ ] Set up Resend domain verification
- [ ] Add Vercel Analytics (`@vercel/analytics`)
- [ ] Consider adding a blog (MDX) when ready for content marketing
