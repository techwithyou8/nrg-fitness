# IMAGE INSTRUCTIONS

## ACTION REQUIRED: Plaats deze bestanden handmatig

### 1. Logo
**Bron**: https://share.google/images/rI7GrqC9IJP0I3ywt
**Bestemming**: `public/logo.png`
**Stappen**:
1. Download de afbeelding van de Google link
2. Sla op als `logo.png`
3. Plaats in `public/` folder (root van public)

### 2. Hero Foto
**Bron**: `C:/Users/husei/Downloads/bodylinehero.webp`
**Bestemming**: `public/images/hero-gym.jpg`
**Stappen**:
1. Kopieer `bodylinehero.webp` uit Downloads
2. Hernoem naar `hero-gym.jpg` (of houd .webp)
3. Plaats in `public/images/` folder

### Commands (Windows PowerShell):

```powershell
# Kopieer hero foto (als je de .webp wilt behouden):
Copy-Item "C:\Users\husei\Downloads\bodylinehero.webp" ".\public\images\hero-gym.webp"

# OF converteer naar .jpg met naam:
Copy-Item "C:\Users\husei\Downloads\bodylinehero.webp" ".\public\images\hero-gym.webp"
```

**Note**: Next.js ondersteunt .webp perfect, dus je kunt de extensie behouden.

### Alternatief: Gebruik deze commands

```powershell
# Navigeer naar project folder
cd "c:\Users\husei\Documents\TechWithYou Projecten\nrg-fitness-terneuzen-website"

# Kopieer hero
Copy-Item "C:\Users\husei\Downloads\bodylinehero.webp" ".\public\images\hero-gym.webp" -Force

# Voor logo: download eerst van Google link en plaats dan:
# (handmatig downloaden van browser)
```

Ik werk nu verder met de aanname dat deze files er komen. Laten we de pagina's fixen!
