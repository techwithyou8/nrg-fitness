import { Hero } from "@/components/sections/Hero";
import { GoalSelector } from "@/components/sections/GoalSelector";
import { PricingTable } from "@/components/sections/PricingTable";
import { VipPassForm } from "@/components/sections/VipPassForm";

export default function HomePage() {
  return (
    <main>
      <Hero variant="a" />
      
      {/* Why NRG Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-2xl sm:text-3xl md:text-4xl">
              Waarom NRG Anders Is
            </h2>
            <p className="text-base md:text-lg text-neutral-600">
              Meer dan alleen fitness – een complete lifestyle ervaring
            </p>
          </div>

          <div className="mt-8 md:mt-12 grid gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-dark">
                Persoonlijke Voortgang
              </h3>
              <p className="text-neutral-600">
                Intake scan, persoonlijk plan en 6-wekelijkse check-ins. Jouw voortgang, meetbaar.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-dark">
                Premium Hospitality
              </h3>
              <p className="text-neutral-600">
                Lounge, drankjes, sauna en member events. Relaxen hoort erbij.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-dark">
                Community & Familie
              </h3>
              <p className="text-neutral-600">
                Voor elk niveau en leeftijd. Groepslessen, coaching en echte verbinding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GoalSelector />
      <PricingTable />

      {/* VIP Pass Section */}
      <section id="vip-pass" className="section-padding bg-gradient-radial bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="mb-4 font-display text-2xl sm:text-3xl md:text-4xl">
                Vraag Nu Jouw Gratis VIP Dagpas Aan
              </h2>
              <p className="text-base md:text-lg text-neutral-600">
                Ervaar NRG 100% all inclusive. Geen verplichtingen, gewoon kennismaken.
              </p>
            </div>

            <div className="rounded-2xl md:rounded-3xl bg-white p-6 md:p-8 shadow-soft lg:p-12">
              <VipPassForm />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Geen verplichtingen</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Persoonlijke rondleiding</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Advies op maat</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
