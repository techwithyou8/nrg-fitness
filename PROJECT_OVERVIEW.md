# 🎯 PROJECT OVERZICHT - NRG FITNESS WEBSITE

## ✅ WAT IS GEBOUWD

### Volledige Next.js 14 Website
- **Framework**: Next.js 14.2.15 met App Router
- **TypeScript**: Volledige type safety
- **Styling**: Tailwind CSS met custom design system
- **State Management**: React hooks (client components waar nodig)
- **Performance**: Server Components, Image Optimization, Code Splitting

### Pagina's (Compleet)
1. **Homepage** (`/`)
   - Hero met 3 copy varianten (A/B/C test ready)
   - "Waarom NRG" 3-pijler sectie
   - Goal Selector (interactief)
   - Pricing Table (3 lidmaatschappen)
   - VIP Pas formulier met validatie

2. **Lidmaatschappen** (`/lidmaatschappen`)
   - Pricing cards
   - Feature comparison table
   - Structured data per lidmaatschap

3. **Locaties** (`/locaties`)
   - Terneuzen (actief)
   - Hulst (coming soon badge)
   - Kaarten met faciliteiten, openingstijden, contact
   - Routebeschrijving links

### Componenten (Herbruikbaar)

#### UI Components (`/components/ui/`)
- `Button.tsx` - 4 varianten (primary, secondary, outline, ghost)
- `Input.tsx` - Form input met error handling
- `Textarea.tsx` - Multi-line input
- `Card.tsx` - Container met header/content
- `Badge.tsx` - Labels/tags

#### Sections (`/components/sections/`)
- `Hero.tsx` - Hero banner met 3 content varianten
- `GoalSelector.tsx` - Interactieve doelkiezer
- `PricingTable.tsx` - Lidmaatschapsvergelijker
- `VipPassForm.tsx` - Lead capture form met validatie

#### Layout (`/components/layout/`)
- `Header.tsx` - Sticky navigation met mobile menu
- `Footer.tsx` - Footer met links, social, contact

### Data Structuren (`/lib/data/`)
- `memberships.ts` - 3 lidmaatschappen (Gold, Premium, VIP)
- `locations.ts` - 2 locaties (Terneuzen, Hulst)
- `goals.ts` - 5 fitness doelen (afvallen, energie, kracht, revalidatie, familie)

### API Routes
- `/api/vip-pass` - POST endpoint voor VIP pas aanvragen
  - Zod validatie
  - TODO: Email/CRM integratie punt

### Utilities & Helpers
- `lib/utils.ts` - Class merging, formatting, slugify
- `lib/analytics.ts` - Event tracking (GA4, Facebook Pixel)
- `lib/seo.ts` - Structured data generators (LocalBusiness, Product, FAQ, Review)

### Design System

#### Kleuren
- **Primary**: `#B5FF3B` (Electric Lime) - energie
- **Secondary**: `#FF8748` (Warm Orange) - accents
- **Dark**: `#1C1F22` - tekst/backgrounds
- **Neutrals**: 9-staps gray scale

#### Typography
- **Display**: Inter (voor headings)
- **Body**: Inter (body text)
- **Sizes**: 3 display sizes + standard scale

#### Spacing
- 8px base scale
- Custom utilities (section-padding, container-custom)

### SEO Features
- Dynamic metadata per pagina
- OpenGraph tags
- Twitter Cards
- Structured Data (JSON-LD):
  - Organization/LocalBusiness
  - Product (per lidmaatschap)
  - FAQ schema ready
  - Review/Rating schema ready
- Robots.txt
- Sitemap ready (needs postbuild script)

### Analytics Setup
- Event tracking helper
- Conversie tracking
- Page view tracking
- Custom events:
  - `vip_pass_submit`
  - `membership_click`
  - `goal_selector_select`
  - `phone_click`, `email_click`, etc.

## 📊 TECHNISCHE SPECS

### Dependencies (Installed)
```json
{
  "next": "14.2.15",
  "react": "18.3.1",
  "typescript": "5.6.3",
  "tailwindcss": "3.4.14",
  "zod": "3.23.8",
  "class-variance-authority": "0.7.0",
  "lucide-react": "0.447.0",
  "sanity": "3.62.2" (voor toekomstige CMS)
}
```

### File Structure
```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout (Header + Footer)
│   ├── page.tsx             # Homepage
│   ├── lidmaatschappen/     # Memberships page
│   ├── locaties/            # Locations page
│   ├── api/vip-pass/        # Form submission API
│   └── globals.css          # Global Tailwind styles
├── components/
│   ├── ui/                  # Base components
│   ├── sections/            # Page sections
│   └── layout/              # Header, Footer
├── lib/
│   ├── data/                # Static data
│   ├── analytics.ts         # Tracking
│   ├── seo.ts               # Structured data
│   └── utils.ts             # Utilities
├── types/                   # TypeScript types
├── public/
│   ├── images/              # Media assets (placeholders)
│   └── robots.txt
├── .env.example             # Environment template
├── README.md                # Full documentation
├── SETUP.md                 # Setup instructions
├── DEPLOYMENT.md            # Deploy checklist
└── package.json
```

### Performance Optimizations
- Server Components default
- Image optimization (next/image met AVIF/WebP)
- Font subsetting
- Code splitting per route
- Lazy loading components
- Edge-ready (Vercel Edge Functions compatible)

## 🎨 DESIGN DECISIONS

### Why These Colors?
- **Primary (Lime)**: Energie, actie, moderne fitness
- **Secondary (Orange)**: Warmte, community, toegankelijk
- **Dark**: Premium, serieus, professioneel

### Why This Structure?
- **Goal Selector First**: Personalisatie → hogere conversie
- **Social Proof**: Reviews/ratings voor trust
- **Clear CTAs**: 2 primaire flows (VIP Pas + Lid Worden)
- **Progressive Disclosure**: Niet overweldigend, stapsgewijs

### Mobile-First
- Touch-friendly (48px minimum tap targets)
- Hamburger menu < 1024px
- Stack layouts op mobile
- Optimized forms (autofocus, keyboard types)

## 🔧 WAT NOG MOET GEBEUREN

### Kritisch (Pre-Launch)
1. **Echte afbeeldingen** vervangen placeholders
2. **Form integratie**: VIP pas naar email/CRM
3. **Analytics keys**: GA4 + Facebook Pixel IDs
4. **Content review**: Copy, prijzen, contactinfo
5. **Testing**: Cross-browser, mobile devices

### Nice-to-Have (Post-Launch)
1. Blog/nieuws sectie
2. Groepslessen rooster (live data)
3. Ledenportaal (login, voortgang)
4. E-commerce (supplementen)
5. Online coaching module
6. Multi-language (EN)

### CMS Integratie (Later)
- Sanity packages al geïnstalleerd
- Schema's maken voor:
  - Blog posts
  - Testimonials
  - Events
  - Class schedule

## 📈 CONVERSIE STRATEGIE

### Primaire Funnel
1. **Awareness**: Hero → Goal Selector
2. **Consideration**: Pricing Table → Features
3. **Conversion**: VIP Pas Form (lead capture)
4. **Nurture**: Email follow-up (niet in site)
5. **Close**: In-person intake → Membership

### Secundaire Funnel
1. Directe "Word Lid" klik
2. Lidmaatschappen pagina
3. (Externe checkout - moet nog geïntegreerd)

### KPI's te Meten
- VIP Pas conversion rate (form submissions / visitors)
- Time on site
- Bounce rate per page
- Goal Selector engagement
- Mobile vs Desktop conversie

## 🚀 DEPLOYMENT STATUS

- [x] Project gebouwd
- [x] Dependencies geïnstalleerd
- [x] Dev server draait (localhost:3001)
- [ ] Images toegevoegd
- [ ] Content definitief
- [ ] Analytics geconfigureerd
- [ ] Form backend gekoppeld
- [ ] DNS/Domain klaar
- [ ] SSL certificaat
- [ ] Live deployment

## 📞 SUPPORT & MAINTENANCE

### Developer Handoff
- Volledige TypeScript types aanwezig
- Inline comments waar complex
- README.md met alle info
- SETUP.md voor nieuwe developers
- DEPLOYMENT.md voor livegang

### Content Updates (Non-Technical)
1. **Prijzen**: `lib/data/memberships.ts` (JSON-achtig)
2. **Locaties**: `lib/data/locations.ts`
3. **Hero copy**: `components/sections/Hero.tsx` (regel 11-25)

Later met CMS: alles via UI editor.

## 🎯 AANBEVELINGEN

### Prioriteit 1 (Deze Week)
1. Echte afbeeldingen ophalen/maken
2. Content finaliseren met marketing team
3. Form integratie opzetten (SendGrid + HubSpot?)
4. Mobile testing op echte devices
5. Lighthouse audit draaien

### Prioriteit 2 (Voor Launch)
1. Google Business Profile setup (lokale SEO)
2. Social media pixels testen
3. Cookie consent banner (GDPR)
4. FAQ pagina toevoegen (SEO)
5. Blog strategie bepalen

### Prioriteit 3 (Post-Launch)
1. A/B test hero varianten
2. Heatmap tool (Hotjar/Clarity)
3. User feedback verzamelen
4. Conversie optimalisatie
5. SEO ongoing (content + backlinks)

---

**Project Status**: ✅ DEVELOPMENT COMPLETE  
**Next Step**: Content + Images + Testing → DEPLOY  
**Estimated Launch**: [Datum invullen]  
**Developer**: TechWithYou  
**Contact**: tech@nrgpremium.nl
