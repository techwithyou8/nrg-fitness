# SETUP INSTRUCTIES

## Stap 1: Dependencies Installeren

Open een terminal in de projectmap en voer uit:

```powershell
npm install
```

Dit installeert alle benodigde packages (Next.js, React, Tailwind, TypeScript, etc.).

## Stap 2: Environment Variabelen

Kopieer `.env.example` naar `.env.local`:

```powershell
Copy-Item .env.example .env.local
```

Open `.env.local` en vul je eigen keys in (voorlopig kunnen placeholders blijven staan):

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXX
```

## Stap 3: Images Toevoegen

Plaats echte afbeeldingen in `/public/images/`:
- `hero-gym.jpg`
- `locations/terneuzen.jpg`
- `locations/hulst.jpg`
- `logo.png`

Zie `/public/images/README.md` voor details.

**Tijdelijke oplossing:** De code gebruikt voorlopig Unsplash placeholders.

## Stap 4: Development Server Starten

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Stap 5: Controleer de Pagina's

- **Homepage**: http://localhost:3000
- **Lidmaatschappen**: http://localhost:3000/lidmaatschappen
- **Locaties**: http://localhost:3000/locaties

## Stap 6: VIP Pas Form Testen

1. Ga naar homepage
2. Scroll naar "Gratis VIP Dagpas" sectie
3. Vul formulier in
4. Check console logs voor submission data

**Let op:** Form POST gaat nu naar `/api/vip-pass`. Je moet dit nog verbinden met:
- Email service (SendGrid, Resend)
- CRM (HubSpot, Salesforce)
- Database (PostgreSQL, Supabase)

Zie `/app/api/vip-pass/route.ts` voor TODO's.

## Stap 7: Aanpassingen Maken

### Data aanpassen:

- **Memberships**: `lib/data/memberships.ts`
- **Locations**: `lib/data/locations.ts`
- **Goals**: `lib/data/goals.ts`

### Kleuren/styling:

- **Colors**: `tailwind.config.ts`
- **Global CSS**: `app/globals.css`

### Copy aanpassen:

- **Hero tekst**: `components/sections/Hero.tsx` (regel 11-25)
- **Metadata**: `app/layout.tsx`

## Stap 8: Build voor Productie

Test of alles build:

```powershell
npm run build
```

Als succesvol, start production server:

```powershell
npm start
```

## Stap 9: Deploy naar Vercel

1. Push code naar GitHub
2. Ga naar [vercel.com](https://vercel.com)
3. Klik "New Project"
4. Importeer je GitHub repo
5. Vercel detecteert automatisch Next.js
6. Voeg environment variabelen toe
7. Deploy!

## Veelvoorkomende Problemen

### TypeScript errors

Normaal tijdens development. Run `npm run type-check` om te valideren.

### Images niet gevonden

Plaats images in `/public/images/` of update paths naar Unsplash placeholders in components.

### Port 3000 in gebruik

Start op andere port:

```powershell
npm run dev -- -p 3001
```

## Volgende Stappen

- [ ] Echte afbeeldingen toevoegen
- [ ] Analytics keys configureren
- [ ] Form integratie met CRM/Email
- [ ] Google Search Console setup
- [ ] Testimonials data toevoegen
- [ ] Blog/nieuws sectie (optioneel)
- [ ] Online rooster (toekomstig)

## Support

Voor vragen: tech@nrgpremium.nl
