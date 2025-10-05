import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4 hover:opacity-90 transition-opacity">
              <Image 
                src="/logo.png" 
                alt="NRG Fitness Logo" 
                width={294}
                height={100}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-4 text-sm text-neutral-300">
              All-inclusive familie fitness met persoonlijke begeleiding en premium faciliteiten.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/NRGFitnessNL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nrgfitnessnl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Aanbod */}
          <div>
            <h3 className="mb-4 font-semibold">Aanbod</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <Link href="/groepslessen" className="hover:text-primary">
                  Groepslessen
                </Link>
              </li>
              <li>
                <Link href="/persoonlijk-beweegadvies" className="hover:text-primary">
                  Persoonlijk Beweegadvies
                </Link>
              </li>
              <li>
                <Link href="/gratis-vip-pas" className="hover:text-primary">
                  Gratis VIP Pas
                </Link>
              </li>
              <li>
                <Link href="/lidmaatschappen" className="hover:text-primary">
                  Lidmaatschappen
                </Link>
              </li>
            </ul>
          </div>

          {/* Over Ons */}
          <div>
            <h3 className="mb-4 font-semibold">Over Ons</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <Link href="/waarom-nrg" className="hover:text-primary">
                  Waarom NRG
                </Link>
              </li>
              <li>
                <Link href="/locaties" className="hover:text-primary">
                  Onze Locaties
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/werken-bij" className="hover:text-primary">
                  Werken Bij NRG
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="mailto:info@nrgpremium.nl" className="hover:text-primary">
                  info@nrgpremium.nl
                </a>
              </li>
              <li>
                <a href="tel:+31115123456" className="hover:text-primary">
                  +31 (0)115 123 456
                </a>
              </li>
              <li className="pt-2">
                <strong className="text-white">Terneuzen</strong>
                <br />
                Voorbeeld straat 123
                <br />
                4531 AB Terneuzen
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-neutral-700 pt-8">
          <div className="flex flex-col gap-4 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} NRG Fitness. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary">
                Privacy
              </Link>
              <Link href="/algemene-voorwaarden" className="hover:text-primary">
                Algemene Voorwaarden
              </Link>
              <Link href="/cookies" className="hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
