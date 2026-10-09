# ADZIVO Website

Marketing site for ADZIVO, a paid-social performance agency. Built with **Next.js 14 (App Router), TypeScript and Tailwind CSS**. Runtime dependencies: `next`, `react`, `react-dom` only.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

Before deploying:

```bash
npm run lint && npm run typecheck && npm run build
```

## Where to edit things

| What | Where |
|---|---|
| Site name, contact details, booking URL, team, credentials, history | `src/config/site.ts` (+ `.env.local`) |
| Services, process, FAQs, industries, case studies, testimonials | `src/content/data.ts` |
| Design tokens (colors, fonts, animation) | `tailwind.config.ts`, `src/app/globals.css` |
| Privacy / Terms text | `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` |

Empty values (email, phone, address, team, credentials, history, testimonials) are hidden automatically. Nothing is invented.

## Contact form

`POST /api/contact` validates with the same rules as the browser (`src/lib/validation.ts`), then applies: same-origin check, honeypot field, minimum-fill-time check, payload size limit, and per-IP rate limiting (5 / 10 min).

Delivery (configure at least one in environment variables):

- **Email via Resend:** `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (verified domain).
- **CRM / automation webhook:** `CONTACT_WEBHOOK_URL` receives the submission as JSON.

If neither is configured, the API returns `503 not_configured` and the form tells the visitor their message was **not** sent. It never reports false success.

> The rate limiter is in-memory (per server instance). On serverless or multi-instance hosting, replace `src/lib/rateLimit.ts` with a shared store such as Upstash Redis, and consider adding Cloudflare Turnstile or reCAPTCHA for stronger bot protection.

## Booking CTA

Set `NEXT_PUBLIC_BOOKING_URL` (Calendly, Cal.com, etc.). If empty, every “Book a Strategy Call” button goes to the contact form.

## Deployment

**Vercel (recommended):** import the repo, set the environment variables from `.env.example` in Project Settings, set `NEXT_PUBLIC_SITE_URL` to your production URL (used for canonical URLs, sitemap, Open Graph), deploy.

**Self-hosted / Docker / VPS:** `npm ci && npm run build && npm start` (Node 18.18+). Put it behind HTTPS and make sure the proxy forwards `X-Forwarded-For` (used for rate limiting).

After launch: submit `/sitemap.xml` to Google Search Console and send a real test enquiry end-to-end.

## Honest status — still needs your input

- [ ] **Dependencies installed and production build run** — not yet verified (see below).
- [ ] Contact delivery (Resend or webhook) — **not configured**.
- [ ] Booking URL — **not configured** (falls back to contact form).
- [ ] Contact email / phone / address — **empty by design**; add real ones.
- [ ] **Case studies are demo templates** labeled “Demo Content — Replace Before Publishing”.
- [ ] No testimonials supplied, so the homepage shows “Our Approach”.
- [ ] Team, credentials, company history — empty, so hidden.
- [ ] Privacy Policy and Terms are **templates with [bracketed] gaps**; legal review needed.
- [ ] Analytics / cookie banner — none included. If you add tracking, update the Privacy Policy and add consent where required.
- [ ] Social profiles — none listed.
- [ ] Rate limiting is per-instance (see note above).

## Notes

- Fonts use the system stack (no external font requests) for speed and privacy.
- The hero visual is decorative, contains no numeric data and is labeled illustrative.
- ADZIVO is described as independent; no Meta affiliation is implied.
