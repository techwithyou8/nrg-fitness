# 🎯 LOGO INSTRUCTIES

## ✅ GEDAAN:
- ✅ Hero foto gekopieerd naar `public/images/hero-gym.webp`
- ✅ Hero component updated om nieuwe foto te gebruiken
- ✅ Header component klaargemaakt voor logo
- ✅ "Waarom NRG" pagina aangemaakt op `/waarom-nrg`
- ✅ "Groepslessen" pagina aangemaakt op `/groepslessen`
- ✅ Navigatie links werken nu correct

## ⚠️ NOG TE DOEN:

### Logo Downloaden en Plaatsen

**Stap 1**: Download Logo
1. Open deze link in je browser: https://share.google/images/rI7GrqC9IJP0I3ywt
2. Download de afbeelding
3. Sla op als `logo.png`

**Stap 2**: Plaats Logo in Project
```powershell
# Kopieer het gedownloade bestand naar je project:
Copy-Item "C:\Users\husei\Downloads\logo.png" ".\public\logo.png"
```

**Alternatief**: Pak de file uit Downloads en sleep hem naar de `public` folder.

---

## 🧪 TESTEN

Na het plaatsen van de logo, test de volgende pagina's:

1. **Homepage** (http://localhost:3001)
   - ✓ Logo moet zichtbaar zijn in header
   - ✓ Hero foto moet zichtbaar zijn
   - ✓ Alle secties moeten laden

2. **Waarom NRG** (http://localhost:3001/waarom-nrg)
   - ✓ Pagina laadt correct
   - ✓ 9 redenen worden getoond
   - ✓ Testimonials zijn zichtbaar

3. **Groepslessen** (http://localhost:3001/groepslessen)
   - ✓ Pagina laadt correct
   - ✓ Alle 9 lestypes worden getoond
   - ✓ Weekrooster is zichtbaar

4. **Locaties** (http://localhost:3001/locaties)
   - ✓ Beide locaties worden getoond
   - ✓ Terneuzen en Hulst info correct

5. **Lidmaatschappen** (http://localhost:3001/lidmaatschappen)
   - ✓ Alle 3 plannen zichtbaar
   - ✓ Prijzen correct

---

## 📋 CHECKLIST VOOR JOUW

- [ ] Logo gedownload van Google link
- [ ] Logo geplaatst in `public/logo.png`
- [ ] Website getest (open http://localhost:3001)
- [ ] Logo zichtbaar in header
- [ ] Hero foto zichtbaar op homepage
- [ ] Alle pagina's werken

---

## 🚀 VOLGENDE STAPPEN

Als alles werkt:

1. **Content Aanpassen**
   - Vervang placeholder teksten met echte content
   - Update openingstijden en adressen in `lib/data/locations.ts`
   - Voeg echte telefoonnummers toe

2. **Extra Afbeeldingen**
   - Voeg gym foto's toe in `public/images/`
   - Update placeholder images in componenten

3. **Formulier Koppelen**
   - Koppel email service (SendGrid/Resend)
   - Koppel CRM (HubSpot/Zapier)

4. **Analytics Instellen**
   - Maak `.env.local` aan
   - Voeg Google Analytics ID toe
   - Voeg Facebook Pixel ID toe

5. **Live Zetten**
   - Deploy naar Vercel
   - Koppel domein
   - Test productie versie
