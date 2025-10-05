import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Waarom NRG? - NRG Fitness Terneuzen',
  description: 'Ontdek waarom NRG Fitness de beste all-inclusive familie fitnessclub is. Luxe faciliteiten, persoonlijke begeleiding en een inspirerende community.',
};

const reasons = [
  {
    icon: '✨',
    title: 'Luxe Faciliteiten',
    description: 'State-of-the-art apparatuur, ruime kleedkamers, sauna, en een gezellige lounge voor na je workout.'
  },
  {
    icon: '🎯',
    title: 'Persoonlijke Begeleiding',
    description: 'Onze gecertificeerde trainers helpen je met een persoonlijk trainingsschema en beweegadvies op maat.'
  },
  {
    icon: '👥',
    title: 'Inspirerende Community',
    description: 'Train samen met gelijkgestemden in een motiverende en vriendelijke omgeving waar iedereen welkom is.'
  },
  {
    icon: '💪',
    title: 'All-Inclusive Concept',
    description: 'Fitness, groepslessen, sauna, gratis parkeren en onbeperkt koffie/thee. Alles onder één dak, één prijs.'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Perfect voor Families',
    description: 'Kindvriendelijke tijden, family locker rooms, en speciale kortingen voor gezinnen die samen trainen.'
  },
  {
    icon: '⚡',
    title: 'Energie & Resultaten',
    description: 'Onze focus ligt op duurzame energie en langdurige resultaten, niet op quick fixes maar op blijvende verandering.'
  },
  {
    icon: '🕐',
    title: '7 Dagen per Week Open',
    description: 'Train wanneer het jou uitkomt. Van vroeg in de ochtend tot laat in de avond, elke dag van de week.'
  },
  {
    icon: '🎓',
    title: 'Professionele Begeleiding',
    description: 'Fysiotherapeuten, voedingsadviseurs en personal trainers werken samen voor jouw gezondheid en welzijn.'
  },
  {
    icon: '🏋️',
    title: 'Gevarieerd Aanbod',
    description: 'Van krachttraining en cardio tot yoga, spinning en HIIT. Voor elk doel en elk niveau de juiste workout.'
  },
];

const testimonials = [
  {
    name: 'Sandra M.',
    location: 'Terneuzen',
    text: 'Bij NRG voel ik me echt thuis. De sfeer is relaxed maar motiverend, en de trainers kennen me bij naam. Sinds ik hier train heb ik veel meer energie!',
    rating: 5
  },
  {
    name: 'Marco & Lisa V.',
    location: 'Familie lidmaatschap',
    text: 'Wat een geweldige club! Wij trainen hier nu met het hele gezin. De kids vermaken zich in de lounge terwijl wij onze workout doen. Perfect!',
    rating: 5
  },
  {
    name: 'Johan B.',
    location: 'Terneuzen',
    text: 'Na een jaar bij NRG ben ik 15 kilo lichter en voel ik me 10 jaar jonger. De begeleiding is top en de faciliteiten zijn echt luxe.',
    rating: 5
  },
];

const stats = [
  { value: '500+', label: 'Tevreden Leden' },
  { value: '50+', label: 'Groepslessen per Week' },
  { value: '7/7', label: 'Dagen Open' },
  { value: '4.9★', label: 'Gemiddelde Review' },
];

export default function WaaromNRGPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-dark text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-dark/90" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg font-display font-bold mb-6">
              Waarom Kiezen voor <span className="text-primary">NRG Fitness</span>?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Meer dan een sportschool. Een plek waar luxe, energie en community samenkomen 
              voor blijvende resultaten.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#vip-pass">
                <Button size="lg">
                  Probeer Gratis
                </Button>
              </Link>
              <Link href="/lidmaatschappen">
                <Button variant="outline" size="lg">
                  Bekijk Lidmaatschappen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-primary to-secondary py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-dark/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display-md font-display font-bold mb-4">
              9 Redenen om voor NRG te Kiezen
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Ontdek wat NRG Fitness uniek maakt en waarom onze leden zo enthousiast zijn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} hover>
                <CardContent className="pt-6">
                  <div className="text-5xl mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-neutral-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display-md font-display font-bold mb-4">
              Wat Onze Leden Zeggen
            </h2>
            <p className="text-xl text-neutral-600">
              Echte verhalen van echte mensen die hun doelen bereiken bij NRG.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-secondary text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div>
                    <div className="font-bold text-dark">{testimonial.name}</div>
                    <div className="text-sm text-neutral-500">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Difference Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display-md font-display font-bold mb-6">
                Het <span className="text-primary">NRG Verschil</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Geen Verstopte Kosten</h3>
                    <p className="text-neutral-600">
                      All-inclusive betekent echt all-inclusive. Geen extra kosten voor groepslessen, 
                      handdoeken of andere faciliteiten.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Flexibel & Vrijblijvend</h3>
                    <p className="text-neutral-600">
                      Geen lange contracten. Stop wanneer je wilt, zonder gedoe. 
                      Wij zijn er voor jou, niet andersom.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Altijd Schoon & Veilig</h3>
                    <p className="text-neutral-600">
                      Onze faciliteiten worden meerdere keren per dag gereinigd. 
                      Hygiëne en veiligheid staan bij ons voorop.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lokaal & Betrokken</h3>
                    <p className="text-neutral-600">
                      Wij zijn een lokale club, geworteld in Terneuzen. We kennen onze leden 
                      persoonlijk en zijn betrokken bij de community.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-gym.webp"
                alt="NRG Fitness Faciliteiten"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-display-md font-display font-bold text-dark mb-6">
            Klaar om het Zelf te Ervaren?
          </h2>
          <p className="text-xl text-dark/80 mb-8 max-w-2xl mx-auto">
            Vraag je gratis VIP dagpas aan en ontdek waarom NRG Fitness de beste keuze is 
            voor jou en je gezin.
          </p>
          <Link href="/#vip-pass">
            <Button size="lg" variant="outline">
              Claim je Gratis VIP Pas
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
