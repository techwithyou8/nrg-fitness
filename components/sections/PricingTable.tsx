"use client";

import { memberships } from "@/lib/data/memberships";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function PricingTable() {
  const handleMembershipClick = (membershipId: string) => {
    trackEvent("membership_click", { plan: membershipId });
  };

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-display-sm">
            Kies jouw lidmaatschap
          </h2>
          <p className="text-lg text-neutral-600">
            Transparant, all-inclusive en geen verborgen kosten. Kies het plan dat bij jou past.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {memberships.map((membership, index) => (
            <Card
              key={membership.id}
              className={`relative flex flex-col ${
                membership.featured
                  ? "border-2 border-primary shadow-glow lg:scale-105"
                  : ""
              }`}
              hover={!membership.featured}
            >
              {/* Badge */}
              {membership.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="primary">{membership.badge}</Badge>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-dark">
                  {membership.name}
                </h3>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-dark">
                    {formatPrice(membership.price)}
                  </span>
                  <span className="text-neutral-500">/ 4 weken</span>
                </div>
                {membership.studentDiscount > 0 && (
                  <p className="text-sm text-neutral-600">
                    Studententarief: €{membership.studentDiscount} korting
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="mb-8 flex-grow space-y-3">
                {membership.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="space-y-3">
                <Button
                  className="w-full"
                  variant={membership.featured ? "primary" : "secondary"}
                  onClick={() => handleMembershipClick(membership.id)}
                >
                  {membership.cta.primary}
                </Button>
                <Button
                  className="w-full"
                  variant="ghost"
                  onClick={() => handleMembershipClick(`${membership.id}_info`)}
                >
                  {membership.cta.secondary}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-neutral-600">
            Nog twijfels? Probeer eerst gratis!
          </p>
          <Button size="lg" variant="outline">
            Gratis VIP Dagpas Aanvragen
          </Button>
        </div>
      </div>
    </section>
  );
}
