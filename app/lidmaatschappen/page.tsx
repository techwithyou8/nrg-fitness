import type { Metadata } from "next";
import { memberships } from "@/lib/data/memberships";
import { PricingTable } from "@/components/sections/PricingTable";
import { generateMembershipProductSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Lidmaatschappen",
  description: "Kies het lidmaatschap dat bij jou past. Transparant, all-inclusive en zonder verborgen kosten.",
};

export default function MembershipsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-dark py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="mb-4 font-display text-display-md lg:text-display-lg">
              Kies Jouw Lidmaatschap
            </h1>
            <p className="text-xl text-neutral-200">
              Transparante prijzen, geen verborgen kosten. Alles wat je nodig hebt voor jouw fitnessdoel.
            </p>
          </div>
        </div>
      </section>

      <PricingTable />

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-display text-display-sm">
            Vergelijk Lidmaatschappen
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="p-4 text-left">Feature</th>
                  {memberships.map((m) => (
                    <th key={m.id} className="p-4 text-center">
                      {m.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  "Fitness toegang",
                  "Hypermoderne toestellen",
                  "Functional zone",
                  "Lounge & Sauna",
                  "7/7 toegang",
                  "Groepslessen",
                  "Coaching",
                  "Refreshing drinks",
                  "Shake",
                  "Handdoekenservice",
                ].map((feature) => (
                  <tr key={feature} className="border-b border-neutral-100">
                    <td className="p-4">{feature}</td>
                    {memberships.map((m) => (
                      <td key={m.id} className="p-4 text-center">
                        {m.features.some((f) =>
                          f.toLowerCase().includes(feature.toLowerCase())
                        ) ? (
                          <svg
                            className="mx-auto h-6 w-6 text-primary"
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
                        ) : (
                          <span className="text-neutral-300">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      {memberships.map((membership) => (
        <script
          key={membership.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateMembershipProductSchema(
                membership.name,
                membership.price,
                membership.features
              )
            ),
          }}
        />
      ))}
    </main>
  );
}
