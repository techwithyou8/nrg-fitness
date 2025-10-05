import type { Metadata } from "next";
import { locations } from "@/lib/data/locations";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Onze Locaties",
  description: "Vind jouw NRG Fitness club in Terneuzen of Hulst. Premium faciliteiten, persoonlijke begeleiding.",
};

export default function LocationsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-dark py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="mb-4 font-display text-display-md lg:text-display-lg">
              Onze Locaties
            </h1>
            <p className="text-xl text-neutral-200">
              Vind de NRG Fitness club bij jou in de buurt
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            {locations.map((location) => (
              <Card key={location.id} className="overflow-hidden p-0">
                <div className="relative h-64">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {location.isComingSoon && (
                    <div className="absolute right-4 top-4">
                      <Badge variant="warning">Binnenkort</Badge>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <CardHeader>
                    <CardTitle>{location.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-dark">{location.address}</p>
                        <p className="text-sm text-neutral-600">
                          {location.postalCode} {location.city}
                        </p>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="text-dark hover:text-primary"
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a
                        href={`mailto:${location.email}`}
                        className="text-dark hover:text-primary"
                      >
                        {location.email}
                      </a>
                    </div>

                    {/* Opening Hours */}
                    <div>
                      <h4 className="mb-2 font-semibold text-dark">Openingstijden</h4>
                      <div className="space-y-1 text-sm">
                        {Object.entries(location.openingHours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between">
                            <span className="text-neutral-600">{day}</span>
                            <span className="font-medium text-dark">{hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Facilities */}
                    <div>
                      <h4 className="mb-2 font-semibold text-dark">Faciliteiten</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.facilities.map((facility) => (
                          <Badge key={facility} variant="primary">
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3 pt-4">
                      <Button className="flex-1" disabled={location.isComingSoon}>
                        {location.isComingSoon ? "Binnenkort" : "Gratis VIP Pas"}
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Routebeschrijving
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
