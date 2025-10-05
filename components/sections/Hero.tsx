"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

interface HeroProps {
  variant?: "a" | "b" | "c";
}

export function Hero({ variant = "a" }: HeroProps) {
  const content = {
    a: {
      headline: "Jouw all-inclusive familie fitnessclub voor blijvende energie",
      subheadline: "Ervaar premium coaching, hospitality en vooruitgang die je écht voelt.",
    },
    b: {
      headline: "Meer energie, minder ruis.",
      subheadline: "Persoonlijke doelen + moderne toestellen + premium sfeer. Alles in één lidmaatschap.",
    },
    c: {
      headline: "Luxe energie voor het hele gezin.",
      subheadline: "Train, ontspan en groei samen – met coaching die je op koers houdt.",
    },
  };

  const { headline, subheadline } = content[variant];

  const handleVipPassClick = () => {
    trackEvent("vip_pass_submit", { source: "hero_cta" });
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] overflow-hidden bg-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-gym.webp"
          alt="NRG Fitness faciliteiten"
          fill
          priority
          className="object-cover object-center opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 flex min-h-[85vh] lg:min-h-[90vh] items-center py-16 md:py-20">
        <div className="max-w-4xl w-full">
          {/* Badge */}
          <div className="mb-4 md:mb-6 inline-flex items-center gap-2 rounded-full bg-primary/25 px-3 md:px-4 py-1.5 md:py-2 backdrop-blur-sm border border-primary/30">
            <div className="h-2 w-2 animate-pulse-slow rounded-full bg-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">
              Nu ook in Terneuzen & Hulst
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-4 md:mb-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight text-shadow-strong">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="mb-6 md:mb-8 text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-100 leading-relaxed max-w-2xl text-shadow-soft">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a href="#vip-pass">
              <Button
                size="lg"
                onClick={handleVipPassClick}
                className="group text-base md:text-lg px-6 md:px-8 py-3 md:py-4 h-auto w-full sm:w-auto"
              >
                Gratis VIP Dagpas
                <svg
                  className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>
            </a>
            <a href="/lidmaatschappen">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-dark text-base md:text-lg px-6 md:px-8 py-3 md:py-4 h-auto transition-all duration-300 w-full sm:w-auto"
              >
                Bekijk Lidmaatschappen
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-neutral-300">
            <div className="flex items-center gap-2 bg-dark/40 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/20">
              <svg className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="whitespace-nowrap">Review 4.5/5</span>
            </div>
            <div className="flex items-center gap-2 bg-dark/40 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/20">
              <svg className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="whitespace-nowrap">Persoonlijk plan</span>
            </div>
            <div className="flex items-center gap-2 bg-dark/40 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/20">
              <svg className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="whitespace-nowrap">7/7 open</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-neutral-400 font-medium">Scroll</span>
          <svg
            className="h-5 w-5 md:h-6 md:w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
