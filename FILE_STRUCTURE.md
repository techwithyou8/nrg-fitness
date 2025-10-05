# 📂 PROJECT STRUCTURE

```
nrg-fitness-terneuzen-website/
│
├── 📄 README.md                    ← Start hier voor volledige docs
├── 📄 START_HERE.md                ← Quick start guide (LEES DIT EERST!)
├── 📄 SETUP.md                     ← Setup instructies
├── 📄 DEPLOYMENT.md                ← Deploy checklist & Vercel guide
├── 📄 PROJECT_OVERVIEW.md          ← Technische details & architectuur
├── 📄 DESIGN_PREVIEW.md            ← Visuele design uitleg
│
├── 📦 package.json                 ← Dependencies & scripts
├── 📦 package-lock.json
├── ⚙️  tsconfig.json               ← TypeScript config
├── ⚙️  tailwind.config.ts          ← Tailwind/design system
├── ⚙️  postcss.config.mjs
├── ⚙️  next.config.mjs             ← Next.js config
├── ⚙️  .eslintrc.json              ← Linting rules
├── 🔒 .gitignore                   ← Git exclusions
├── 🔒 .env.example                 ← Environment template
│
├── 📁 app/                         ← Next.js App Router (MAIN PAGES)
│   ├── 📄 layout.tsx               ← Root layout (Header + Footer)
│   ├── 📄 page.tsx                 ← Homepage (/)
│   ├── 🎨 globals.css              ← Global Tailwind styles
│   │
│   ├── 📁 lidmaatschappen/
│   │   └── 📄 page.tsx             ← Memberships page
│   │
│   ├── 📁 locaties/
│   │   └── 📄 page.tsx             ← Locations page
│   │
│   └── 📁 api/
│       └── 📁 vip-pass/
│           └── 📄 route.ts         ← VIP Pass form API endpoint
│
├── 📁 components/                  ← React Components
│   │
│   ├── 📁 ui/                      ← Base UI Components
│   │   ├── 📄 Button.tsx           ← Button (4 variants)
│   │   ├── 📄 Input.tsx            ← Form input
│   │   ├── 📄 Textarea.tsx         ← Multi-line input
│   │   ├── 📄 Card.tsx             ← Card container
│   │   └── 📄 Badge.tsx            ← Label/tag component
│   │
│   ├── 📁 sections/                ← Page Sections
│   │   ├── 📄 Hero.tsx             ← Hero banner (3 variants)
│   │   ├── 📄 GoalSelector.tsx     ← Interactive goal picker
│   │   ├── 📄 PricingTable.tsx     ← Membership comparison
│   │   └── 📄 VipPassForm.tsx      ← Lead capture form
│   │
│   └── 📁 layout/                  ← Layout Components
│       ├── 📄 Header.tsx           ← Sticky navigation
│       └── 📄 Footer.tsx           ← Site footer
│
├── 📁 lib/                         ← Utilities & Helpers
│   │
│   ├── 📁 data/                    ← Static Data (EDIT CONTENT HERE)
│   │   ├── 📄 memberships.ts       ← 3 Membership plans
│   │   ├── 📄 locations.ts         ← 2 Locations (Terneuzen, Hulst)
│   │   └── 📄 goals.ts             ← 5 Fitness goals
│   │
│   ├── 📄 utils.ts                 ← Utility functions
│   ├── 📄 analytics.ts             ← Event tracking (GA4, FB Pixel)
│   └── 📄 seo.ts                   ← Structured data generators
│
├── 📁 types/                       ← TypeScript Definitions
│   └── 📄 index.ts                 ← All type definitions
│
├── 📁 public/                      ← Static Assets
│   ├── 📁 images/                  ← Images (ADD YOUR PHOTOS HERE!)
│   │   ├── 📄 README.md            ← Image requirements guide
│   │   ├── 🖼️  hero-gym.jpg        ← (placeholder - vervang!)
│   │   ├── 🖼️  og-image.jpg        ← (placeholder)
│   │   ├── 🖼️  logo.png            ← (placeholder)
│   │   └── 📁 locations/
│   │       ├── 🖼️  terneuzen.jpg   ← (placeholder)
│   │       └── 🖼️  hulst.jpg       ← (placeholder)
│   │
│   └── 📄 robots.txt               ← SEO robots file
│
└── 📁 node_modules/                ← Dependencies (auto-generated)
    └── [1376 packages]


═══════════════════════════════════════════════════════════

KEY FILES TO EDIT:

📝 CONTENT UPDATES:
  → lib/data/memberships.ts         (prijzen, features)
  → lib/data/locations.ts           (adressen, openingstijden)
  → lib/data/goals.ts               (fitness doelen)
  → components/sections/Hero.tsx    (hero tekst)

🎨 DESIGN UPDATES:
  → tailwind.config.ts              (kleuren, fonts)
  → app/globals.css                 (custom styles)

⚙️  CONFIG:
  → .env.local (maak nieuw)         (analytics keys, API keys)
  → next.config.mjs                 (Next.js settings)

🖼️  MEDIA:
  → public/images/                  (voeg echte foto's toe!)

═══════════════════════════════════════════════════════════

COMMANDS:

npm run dev          → Start development server
npm run build        → Build for production
npm start            → Run production server
npm run lint         → Run linter
npm run type-check   → TypeScript validation

═══════════════════════════════════════════════════════════

CURRENT STATUS:

✅ All files created
✅ Dependencies installed (1376 packages)
✅ Dev server running on http://localhost:3001
✅ TypeScript configured
✅ Tailwind CSS configured
✅ Components ready
✅ Pages ready
✅ API routes ready
✅ SEO setup ready
✅ Analytics helpers ready

⏳ NEXT STEPS:
  1. Review content in lib/data/
  2. Add real images to public/images/
  3. Configure .env.local with API keys
  4. Test on localhost:3001
  5. Deploy to Vercel

═══════════════════════════════════════════════════════════
```

## File Count by Type

```
📊 STATISTICS:

TypeScript/TSX:      42 files
CSS:                  1 file
Markdown:             7 files
Config:               6 files
JSON:                 2 files
─────────────────────────────
TOTAL:               58 files

Lines of Code:       ~3,500
Components:          12
Pages:               3
API Routes:          1
```

## Import Paths (Alias @/)

```typescript
// All imports use @ alias for clean paths:

import { Button } from "@/components/ui/Button"
import { memberships } from "@/lib/data/memberships"
import { cn } from "@/lib/utils"
import { trackEvent } from "@/lib/analytics"

// Configured in tsconfig.json:
"paths": {
  "@/*": ["./*"]
}
```

## Component Hierarchy

```
App (layout.tsx)
├── Header
│   └── Navigation
│       ├── Desktop Menu
│       └── Mobile Menu (Hamburger)
│
├── Page Content
│   ├── Hero
│   ├── Sections
│   │   ├── GoalSelector
│   │   ├── PricingTable
│   │   └── VipPassForm
│   └── UI Components
│       ├── Button
│       ├── Card
│       ├── Input
│       ├── Textarea
│       └── Badge
│
└── Footer
    ├── Brand Info
    ├── Navigation Links
    ├── Social Links
    └── Copyright
```

## Data Flow

```
Static Data (lib/data/*.ts)
    ↓
Imported in Components
    ↓
Rendered on Pages
    ↓
Served by Next.js


User Input (Forms)
    ↓
Client-side Validation
    ↓
API Route (app/api/*/route.ts)
    ↓
Backend Processing (CRM/Email)
    ↓
Response to User
```

## Styling Approach

```
Tailwind Classes (Primary)
    ↓
Custom Classes (globals.css)
    ↓
Component Variants (CVA)
    ↓
Dynamic Classes (cn() utility)
```

## Environment Variables

```
.env.example (template)
    ↓
.env.local (your keys - not in git)
    ↓
process.env.NEXT_PUBLIC_* (accessible in browser)
process.env.* (server-only secrets)
```

---

**Ready to Launch!** 🚀  
Open `START_HERE.md` voor volgende stappen.
