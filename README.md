# NRG Fitness Terneuzen & Hulst Website

Modern, high-performance Next.js 14 website voor NRG Fitness met focus op conversie, SEO en gebruikerservaring.

## ✨ Features

- **Next.js 14** met App Router en React Server Components
- **TypeScript** voor type safety
- **Tailwind CSS** voor modern, responsive design
- **Analytics tracking** (Google Analytics 4, Facebook Pixel ready)
- **SEO optimized** met structured data (LocalBusiness, Product, FAQ, Review)
- **Performance focused** - AVIF/WebP images, code splitting
- **Form handling** met validatie en server actions
- **Accessibility** WCAG AA compliant

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm of yarn

### Installation

```bash
# Installeer dependencies
npm install

# Kopieer environment variabelen
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## 📁 Project Structuur

```
├── app/                    # Next.js App Router
│   ├── (public)/          # Publieke marketing pages
│   ├── api/               # API routes (form submissions)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Grote pagina secties (Hero, Pricing, etc.)
│   └── ui/                # Herbruikbare UI componenten
├── lib/
│   ├── data/              # Static data (memberships, locations, goals)
│   ├── analytics.ts       # Analytics tracking utilities
│   ├── seo.ts             # SEO & structured data helpers
│   └── utils.ts           # Utility functies
├── types/                 # TypeScript type definitions
├── public/                # Static assets (images, icons)
└── styles/                # Additional styles
```

## 🎨 Design System

### Kleuren

- **Primary**: `#B5FF3B` (Electric Lime) - energie, CTAs
- **Secondary**: `#FF8748` (Warm Orange) - accents
- **Dark**: `#1C1F22` - primaire tekst, hero backgrounds
- **Neutrals**: Gray scale voor body text en backgrounds

### Typography

- **Display**: Inter Tight - headings
- **Body**: Inter - body text

### Components

Alle UI componenten zijn Tailwind-based met variant support:

```tsx
<Button variant="primary" size="lg">Click me</Button>
<Badge variant="secondary">New</Badge>
<Card hover={true}>Content</Card>
```

## 📊 Analytics & Tracking

Event tracking geïmplementeerd voor:

- VIP pas submissions (`vip_pass_submit`)
- Lidmaatschap clicks (`membership_click`)
- Goal selector interacties (`goal_selector_select`)
- Telefoon/email clicks
- Locatie views

Configureer GA4 en Facebook Pixel IDs in `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_CONVERSION_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXX
```

## 🔧 Development

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Production build
npm run build

# Start production server
npm start
```

## 🚢 Deployment

### Vercel (Aanbevolen)

1. Push code naar GitHub
2. Importeer project in [Vercel](https://vercel.com)
3. Configureer environment variabelen
4. Deploy automatisch bij elke push naar main

### Andere platforms

```bash
# Build voor productie
npm run build

# Start productie server
npm start
```

## 📝 Content Management

### Data Aanpassen

**Memberships** - `lib/data/memberships.ts`
```typescript
{
  id: "premium",
  name: "NRG PREMIUM",
  price: 49.95,
  features: [...]
}
```

**Locaties** - `lib/data/locations.ts`
```typescript
{
  id: "terneuzen",
  name: "NRG Fitness Terneuzen",
  address: "...",
  facilities: [...]
}
```

**Goals** - `lib/data/goals.ts`

### CMS Integratie (Toekomstig)

Project is voorbereid voor Sanity CMS:
- Schema's in `/sanity/schemas`
- Client setup in `/lib/sanity.ts`
- Uncomment Sanity imports in `package.json`

## 🔌 API Routes

### VIP Pass Submission

`POST /api/vip-pass`

```json
{
  "name": "Jan Jansen",
  "email": "jan@example.nl",
  "phone": "+31612345678",
  "location": "terneuzen",
  "goal": "Afvallen",
  "consent": true,
  "newsletter": false
}
```

**TODO**: Implementeer CRM integratie (HubSpot, SendGrid, etc.)

## 🎯 SEO Checklist

- [x] Structured Data (LocalBusiness, Product, FAQ)
- [x] OpenGraph tags
- [x] Twitter Cards
- [x] Sitemap (genereer met next-sitemap)
- [x] Robots.txt
- [ ] Google Search Console setup
- [ ] Google Business Profile link
- [ ] Local SEO per vestiging

## ♿ Accessibility

- WCAG AA contrast ratios
- Keyboard navigatie support
- Focus states zichtbaar
- Aria-labels op icon buttons
- Form labels en error messages
- Screen reader friendly

## 🔐 Security

- CSP headers geconfigureerd
- GDPR compliant forms
- Cookie consent banner (te implementeren)
- XSS protectie via Next.js
- HTTPS only in productie

## 📱 Performance

- Server Components waar mogelijk
- Image optimization (AVIF/WebP)
- Font subsetting
- Code splitting per route
- Lazy loading images/components

Target metrics:
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

## 🛠️ Toekomstige Uitbreidingen

- [ ] E-commerce voor supplementen (`/shop`)
- [ ] Ledenportaal (login, rooster, voortgang)
- [ ] Online coaching module
- [ ] Blog/nieuws sectie
- [ ] Groepslessen rooster (realtime)
- [ ] Multi-language (EN)
- [ ] Mobile app integratie

## 📄 License

Proprietary - NRG Fitness © 2025

## 👥 Contact

- **Email**: info@nrgpremium.nl
- **Website**: https://www.nrgpremium.nl
- **Support**: tech@nrgpremium.nl

---

Built with ❤️ by TechWithYou
