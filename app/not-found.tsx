import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 px-4">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-display font-bold text-dark opacity-10">
            404
          </h1>
          <div className="-mt-16 md:-mt-20">
            <p className="text-4xl md:text-5xl font-display font-bold text-dark">
              Pagina Niet Gevonden
            </p>
          </div>
        </div>

        {/* Message */}
        <p className="text-lg text-neutral-600 mb-8">
          Deze pagina bestaat niet (meer). Misschien vind je wat je zoekt op onze homepage?
        </p>

        {/* Popular Links */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-soft">
          <p className="text-sm font-semibold text-dark mb-4">Populaire Pagina&apos;s:</p>
          <div className="space-y-2">
            <Link href="/" className="block text-primary hover:underline">
              → Homepage
            </Link>
            <Link href="/lidmaatschappen" className="block text-primary hover:underline">
              → Lidmaatschappen
            </Link>
            <Link href="/groepslessen" className="block text-primary hover:underline">
              → Groepslessen
            </Link>
            <Link href="/locaties" className="block text-primary hover:underline">
              → Onze Locaties
            </Link>
          </div>
        </div>

        {/* CTA */}
        <Link href="/">
          <Button size="lg" className="w-full sm:w-auto">
            Terug naar Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
