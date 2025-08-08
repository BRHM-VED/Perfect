## Perfect Timing — Ask once, act at the right time

Production-ready Next.js App Router app selling date-based astrological answers.

### Tech
- Next.js 14/15 + TypeScript
- Tailwind CSS (dark UI)
- Zustand (cart)
- react-hook-form + Zod
- Radix UI Dialog (sheets)

### Setup
1) Install deps and run
```bash
npm i
npm run dev
```

2) Environment (.env.local)
```
# If set, orders are POSTed here as JSON
PT_CHECKOUT_WEBHOOK=

# Fallback: WhatsApp number (digits only)
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

3) Catalog
- Edit `data/questions.ts`

4) Pricing rules
- `lib/pricing.ts`
- BASE_PRICE = 299 INR
- Bundle: 15% off when 3+ items
- Promo: ASTROFIRST → 10% off on post-bundle subtotal

Build & start
```bash
npm run build && npm start
```

Sticky cart appears when items > 0. If webhook missing, checkout opens WhatsApp with a pre-filled message.

### Deploy on Render
- Connect repo → Web Service
- Build: `npm ci && npm run build`
- Start: `npm start`
- Env:
  - `NEXT_PUBLIC_SITE_URL=https://your.render.app`
  - `NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999`
  - `PT_CHECKOUT_WEBHOOK=` (optional)
  - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=perfecttiming.app` (optional)
- Optional: use `render.yaml` for cache + env scaffolding
# Perfect
