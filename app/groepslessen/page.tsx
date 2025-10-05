import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Groepslessen - NRG Fitness Terneuzen',
  description: 'Ontdek ons uitgebreide aanbod groepslessen. Van yoga en spinning tot HIIT en krachtraining. Voor elk niveau en elk doel.',
};

const lesTypes = [
  {
    name: 'Spinning',
    description: 'Intensieve cardio workout op de fiets met motiverende muziek.',
    duration: '45 min',
    level: 'Alle niveaus',
    icon: '🚴',
    calories: '~500 kcal',
    benefits: ['Cardio verbetering', 'Vetverbranding', 'Been- en bilspieren']
  },
  {
    name: 'Yoga',
    description: 'Verbeter je flexibiliteit, kracht en mentale balans.',
    duration: '60 min',
    level: 'Alle niveaus',
    icon: '🧘',
    calories: '~200 kcal',
    benefits: ['Flexibiliteit', 'Stress reductie', 'Core kracht']
  },
  {
    name: 'HIIT',
    description: 'High Intensity Interval Training voor maximale resultaten.',
    duration: '30 min',
    level: 'Gemiddeld-Gevorderd',
    icon: '⚡',
    calories: '~400 kcal',
    benefits: ['Snelle resultaten', 'Afterburn effect', 'Full body workout']
  },
  {
    name: 'BodyPump',
    description: 'Krachttraining met gewichten op motiverende muziek.',
    duration: '55 min',
    level: 'Alle niveaus',
    icon: '🏋️',
    calories: '~450 kcal',
    benefits: ['Spieropbouw', 'Kracht', 'Calorieverbranding']
  },
  {
    name: 'Pilates',
    description: 'Core-gerichte training voor kracht en stabiliteit.',
    duration: '45 min',
    level: 'Alle niveaus',
    icon: '💪',
    calories: '~250 kcal',
    benefits: ['Core kracht', 'Houding', 'Body awareness']
  },
  {
    name: 'Zumba',
    description: 'Dans jezelf fit met Latijns-Amerikaanse ritmes.',
    duration: '45 min',
    level: 'Alle niveaus',
    icon: '💃',
    calories: '~400 kcal',
    benefits: ['Cardio', 'Coördinatie', 'Plezier']
  },
  {
    name: 'Boxing',
    description: 'Bokstraining voor conditie, kracht en stress relief.',
    duration: '50 min',
    level: 'Gemiddeld',
    icon: '🥊',
    calories: '~600 kcal',
    benefits: ['Full body workout', 'Stress relief', 'Conditie']
  },
  {
    name: 'Bootcamp',
    description: 'Militaire-stijl outdoor/indoor training voor maximale intensiteit.',
    duration: '45 min',
    level: 'Gevorderd',
    icon: '🎖️',
    calories: '~500 kcal',
    benefits: ['Kracht & conditie', 'Teamspirit', 'Mentale power']
  },
  {
    name: 'Stretch & Relax',
    description: 'Zachte stretching en ontspanningsoefeningen.',
    duration: '30 min',
    level: 'Alle niveaus',
    icon: '🌸',
    calories: '~100 kcal',
    benefits: ['Flexibiliteit', 'Herstel', 'Ontspanning']
  },
];

const schedule = [
  { day: 'Maandag', lessons: ['07:00 Yoga', '12:00 HIIT', '18:00 Spinning', '19:00 BodyPump'] },
  { day: 'Dinsdag', lessons: ['06:30 Bootcamp', '12:30 Pilates', '18:30 Boxing', '19:30 Zumba'] },
  { day: 'Woensdag', lessons: ['07:00 Spinning', '12:00 Yoga', '18:00 HIIT', '19:00 BodyPump'] },
  { day: 'Donderdag', lessons: ['12:00 Stretch & Relax', '18:00 Pilates', '19:00 Boxing'] },
  { day: 'Vrijdag', lessons: ['07:00 HIIT', '12:00 Zumba', '18:00 Spinning', '19:00 Bootcamp'] },
  { day: 'Zaterdag', lessons: ['09:00 Yoga', '10:00 BodyPump', '11:00 HIIT'] },
  { day: 'Zondag', lessons: ['09:00 Stretch & Relax', '10:00 Pilates', '11:00 Spinning'] },
];

const features = [
  {
    title: 'Alle Lessen Inbegrepen',
    description: 'Met je lidmaatschap heb je toegang tot álle groepslessen. Geen extra kosten.',
    icon: '✓'
  },
  {
    title: 'Kleine Groepen',
    description: 'Max. 20 personen per les voor persoonlijke aandacht en begeleiding.',
    icon: '👥'
  },
  {
    title: 'Gecertificeerde Instructeurs',
    description: 'Al onze instructeurs zijn volledig gecertificeerd en gepassioneerd.',
    icon: '🎓'
  },
  {
    title: 'Vooraf Reserveren',
    description: 'Reserveer gemakkelijk via onze app en zorg dat je altijd een plekje hebt.',
    icon: '📱'
  },
];

export default function GroepslessenPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary py-20 md:py-32">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6">50+ Lessen per Week</Badge>
            <h1 className="text-display-lg font-display font-bold mb-6 text-dark">
              Groepslessen voor Elk Doel
            </h1>
            <p className="text-xl md:text-2xl text-dark/80 mb-8">
              Train samen, bereik meer. Kies uit 9 verschillende lestypes, 
              van ontspannende yoga tot intensieve bootcamp.
            </p>
            <Button size="lg" variant="outline">
              Probeer Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les Types */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display-md font-display font-bold mb-4">
              Ons Lesaanbod
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Voor elk doel, elk niveau en elke voorkeur hebben we de perfecte les.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lesTypes.map((les, index) => (
              <Card key={index} hover className="bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{les.icon}</div>
                    <Badge variant="secondary">{les.level}</Badge>
                  </div>
                  <CardTitle>{les.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">{les.description}</p>
                  
                  <div className="flex gap-4 text-sm text-neutral-500 mb-4">
                    <div className="flex items-center gap-1">
                      <span>⏱️</span>
                      <span>{les.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🔥</span>
                      <span>{les.calories}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="text-sm font-medium text-neutral-700 mb-2">Voordelen:</div>
                    <ul className="space-y-1">
                      {les.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-neutral-600 flex items-center gap-2">
                          <span className="text-primary">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display-md font-display font-bold mb-4">
              Wekelijks Rooster
            </h2>
            <p className="text-xl text-neutral-600">
              Dit is een indicatief rooster. Check onze app voor het actuele rooster en reserveer je plek.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {schedule.map((dag, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-primary">{dag.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {dag.lessons.map((les, i) => (
                      <li key={i} className="text-sm text-neutral-600 flex items-start gap-2">
                        <span className="text-secondary font-medium mt-0.5">•</span>
                        <span>{les}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-neutral-600 mb-4">
              Rooster kan wijzigen. Reserveer via de NRG Fitness app voor de meest actuele tijden.
            </p>
            <Button variant="outline">Download de App</Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-display-md font-display font-bold mb-8 text-center">
            Veelgestelde Vragen
          </h2>
          
          <div className="space-y-6">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Moet ik vooraf reserveren?</h3>
                <p className="text-neutral-600">
                  Ja, om je plekje zeker te stellen raden we aan om via de app te reserveren. 
                  Sommige populaire lessen zitten snel vol.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Zijn de lessen geschikt voor beginners?</h3>
                <p className="text-neutral-600">
                  Absoluut! De meeste lessen zijn geschikt voor alle niveaus. Onze instructeurs 
                  geven altijd variaties aan zodat iedereen op zijn eigen niveau kan trainen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Wat moet ik meenemen?</h3>
                <p className="text-neutral-600">
                  Sportkleding, schone sportschoenen en een handdoek. Matten, gewichten en andere 
                  materialen zijn aanwezig in de club.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Kosten groepslessen extra?</h3>
                <p className="text-neutral-600">
                  Nee! Bij de Premium en VIP lidmaatschappen zijn álle groepslessen inbegrepen. 
                  Geen extra kosten, onbeperkt meedoen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-display-md font-display font-bold mb-6">
            Klaar om te Beginnen?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Probeer een gratis proefles en ervaar zelf waarom onze leden zo enthousiast zijn.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">
              Claim je Gratis VIP Pas
            </Button>
            <Button size="lg" variant="outline">
              Bekijk Lidmaatschappen
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
