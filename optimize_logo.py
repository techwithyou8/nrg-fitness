"""
Logo Optimizer voor NRG Fitness
- Verwijdert witte achtergrond (transparant)
- Past groene kleur aan naar brand color #B5FF3B
- Optimaliseert voor web gebruik
"""

from PIL import Image
import numpy as np

def optimize_logo():
    # Open de originele logo
    img = Image.open('public/logo-original.png').convert('RGBA')
    data = np.array(img)
    
    # Maak een kopie voor bewerking
    red, green, blue, alpha = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Verwijder witte achtergrond (maak transparant)
    # Detecteer pixels die bijna wit zijn (RGB > 240)
    white_areas = (red > 240) & (green > 240) & (blue > 240)
    alpha[white_areas] = 0
    
    # Vervang groene kleur met brand color #B5FF3B (RGB: 181, 255, 59)
    # Detecteer groene pixels (waar groen dominant is)
    green_areas = (green > red + 30) & (green > blue + 30) & (green > 150)
    
    # Pas de groene kleur aan
    red[green_areas] = 181
    green[green_areas] = 255
    blue[green_areas] = 59
    
    # Maak ook geel/gouden tekst iets lichter voor betere leesbaarheid
    golden_areas = (red > 180) & (green > 140) & (blue < 100) & (red > green) & ~green_areas
    red[golden_areas] = np.clip(red[golden_areas] * 1.1, 0, 255).astype(np.uint8)
    green[golden_areas] = np.clip(green[golden_areas] * 1.1, 0, 255).astype(np.uint8)
    
    # Combineer de kanalen terug
    data[:,:,0] = red
    data[:,:,1] = green
    data[:,:,2] = blue
    data[:,:,3] = alpha
    
    # Maak nieuwe image
    optimized = Image.fromarray(data, 'RGBA')
    
    # Crop witruimte weg
    bbox = optimized.getbbox()
    if bbox:
        optimized = optimized.crop(bbox)
    
    # Resize voor web (behoud aspect ratio)
    # Voor header: hoogte ~50px, maar save in hogere resolutie (2x voor retina)
    width, height = optimized.size
    new_height = 100  # 2x voor retina displays
    new_width = int(width * (new_height / height))
    optimized_resized = optimized.resize((new_width, new_height), Image.Resampling.LANCZOS)
    
    # Sla op als PNG met transparantie
    optimized_resized.save('public/logo.png', 'PNG', optimize=True)
    print(f"✅ Logo geoptimaliseerd en opgeslagen als public/logo.png")
    print(f"   Originele grootte: {width}x{height}")
    print(f"   Nieuwe grootte: {new_width}x{new_height}")
    print(f"   - Achtergrond: Transparant")
    print(f"   - Groene kleur: #B5FF3B (brand color)")
    print(f"   - Formaat: PNG met alpha channel")
    
    # Maak ook een grotere versie voor social media / OG images
    new_height_large = 200
    new_width_large = int(width * (new_height_large / height))
    optimized_large = optimized.resize((new_width_large, new_height_large), Image.Resampling.LANCZOS)
    optimized_large.save('public/logo-large.png', 'PNG', optimize=True)
    print(f"✅ Grote versie opgeslagen als public/logo-large.png ({new_width_large}x{new_height_large})")

if __name__ == '__main__':
    try:
        optimize_logo()
    except FileNotFoundError:
        print("❌ Fout: public/logo-original.png niet gevonden")
        print("   Zorg dat de screenshot is gekopieerd naar public/logo-original.png")
    except Exception as e:
        print(f"❌ Fout bij optimaliseren: {e}")
