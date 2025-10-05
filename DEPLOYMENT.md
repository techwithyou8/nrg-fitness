# 🚀 DEPLOYMENT CHECKLIST

## Pre-Launch Checklist

### Content & Media
- [ ] Alle placeholder images vervangen door echte NRG Fitness foto's
- [ ] Logo geüpload (`/public/logo.png`)
- [ ] Favicon toegevoegd (`/public/favicon.ico`)
- [ ] OG image geoptimaliseerd (`/public/og-image.jpg`)
- [ ] Hero copy definitief goedgekeurd
- [ ] Lidmaatschaps prijzen gevalideerd
- [ ] Locatie info correct (adressen, telefoonnummers, openingstijden)
- [ ] Contact email werkend

### Functionaliteit
- [ ] VIP Pas formulier test succesvol
- [ ] Email notificaties werkend (SendGrid/Resend setup)
- [ ] CRM integratie actief (HubSpot/andere)
- [ ] Alle interne links getest
- [ ] Externe links openen in nieuwe tab
- [ ] Mobile responsive getest (iPhone, Android)
- [ ] Desktop responsive getest (1920px, 1366px, 1024px)
- [ ] Formulier validatie werkend
- [ ] Success/error states getest

### SEO & Analytics
- [ ] Google Analytics 4 ID toegevoegd (`.env.local`)
- [ ] Facebook Pixel ID toegevoegd
- [ ] Google Search Console geverifieerd
- [ ] Sitemap gegenereerd (`npm run postbuild` script toevoegen)
- [ ] Robots.txt gecontroleerd
- [ ] Structured data gevalideerd (schema.org validator)
- [ ] Meta descriptions op alle pagina's
- [ ] Alt text op alle images
- [ ] OpenGraph tags getest (Facebook Debugger)

### Performance
- [ ] Lighthouse score > 90 (Performance)
- [ ] LCP < 2.5s
- [ ] Images geoptimaliseerd (WebP/AVIF)
- [ ] Fonts preloaded
- [ ] Geen console errors
- [ ] Build succesvol (`npm run build`)

### Security & Legal
- [ ] HTTPS actief
- [ ] Privacy policy pagina
- [ ] Algemene voorwaarden pagina
- [ ] Cookie consent banner (implementeren)
- [ ] GDPR compliant forms
- [ ] Environment variabelen veilig opgeslagen (Vercel Secrets)
- [ ] API keys niet in source code

### Browser Testing
- [ ] Chrome (laatste versie)
- [ ] Firefox (laatste versie)
- [ ] Safari (iOS + macOS)
- [ ] Edge
- [ ] Mobile browsers

### Accessibility
- [ ] Keyboard navigatie werkend
- [ ] Screen reader friendly (NVDA/JAWS test)
- [ ] Contrast ratios WCAG AA
- [ ] Focus states zichtbaar
- [ ] Form labels correct

## Vercel Deployment Steps

### 1. GitHub Repository Setup
```bash
git init
git add .
git commit -m "Initial NRG Fitness website"
git branch -M main
git remote add origin <jouw-github-repo-url>
git push -u origin main
```

### 2. Vercel Project Creation
1. Ga naar [vercel.com](https://vercel.com)
2. Klik "New Project"
3. Importeer je GitHub repo
4. Framework: Next.js (auto-detected)
5. Root Directory: `./`
6. Build Command: `npm run build`
7. Output Directory: `.next` (auto)

### 3. Environment Variables
Voeg toe in Vercel dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_CONVERSION_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXX
EMAIL_API_KEY=<your-sendgrid-key>
EMAIL_FROM=info@nrgpremium.nl
NEXT_PUBLIC_SITE_URL=https://www.nrgpremium.nl
```

### 4. Domain Setup
1. Vercel → Project → Settings → Domains
2. Voeg `www.nrgpremium.nl` toe
3. Update DNS records bij je registrar:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
4. Vercel configureert automatisch SSL

### 5. Deploy
1. Push naar `main` branch
2. Vercel bouwt automatisch
3. Check deployment logs
4. Test op preview URL
5. Bevestig op productie domein

## Post-Launch

### Immediate
- [ ] Test alle functionaliteit op live site
- [ ] Submit sitemap naar Google Search Console
- [ ] Test analytics tracking (echte event)
- [ ] Check mobile performance (PageSpeed Insights)
- [ ] Monitor error logs (Vercel Dashboard)

### Week 1
- [ ] A/B test hero copy varianten
- [ ] Analyse conversie funnel (VIP pas)
- [ ] Check form submissions komen binnen
- [ ] Monitor page load times
- [ ] Verzamel gebruikersfeedback

### Month 1
- [ ] SEO ranking check (Google Search Console)
- [ ] Heatmap analyse (Hotjar/Microsoft Clarity)
- [ ] Conversie optimalisatie
- [ ] Content updates o.b.v. analytics
- [ ] Performance audit

## Rollback Plan

Als er problemen zijn na deployment:

### Vercel Instant Rollback
1. Ga naar Vercel Dashboard
2. Deployments tab
3. Selecteer vorige werkende deployment
4. Klik "Promote to Production"

### Git Rollback
```bash
git revert HEAD
git push origin main
```

## Support Contacts

- **Developer**: tech@nrgpremium.nl
- **Vercel Support**: https://vercel.com/support
- **DNS Issues**: [Jouw domain registrar]
- **Analytics**: Google Analytics support

## Monitoring Tools

- **Uptime**: [UptimeRobot](https://uptimerobot.com)
- **Performance**: [PageSpeed Insights](https://pagespeed.web.dev)
- **Errors**: Vercel Dashboard → Logs
- **Analytics**: Google Analytics 4 dashboard

---

**Last Updated**: Check datum voor livegang
**Deployment By**: [Jouw naam]
**Production URL**: https://www.nrgpremium.nl
