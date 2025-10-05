"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { trackConversion } from "@/lib/analytics";

export function VipPassForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      location: formData.get("location") as string,
      goal: formData.get("goal") as string,
      consent: formData.get("consent") === "on",
      newsletter: formData.get("newsletter") === "on",
    };

    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "Naam is verplicht";
    if (!data.email) newErrors.email = "E-mail is verplicht";
    if (!data.phone) newErrors.phone = "Telefoonnummer is verplicht";
    if (!data.location) newErrors.location = "Kies een locatie";
    if (!data.consent) newErrors.consent = "Je moet akkoord gaan met de privacyverklaring";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/vip-pass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        trackConversion("vip_pass_submission", 0);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      setErrors({ general: "Er is iets misgegaan. Probeer het later opnieuw." });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
          <svg className="h-8 w-8 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-dark">
          Gelukt! Je gratis VIP pas is onderweg
        </h3>
        <p className="text-neutral-600">
          We nemen binnen 24 uur contact met je op om je eerste bezoek in te plannen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          name="name"
          label="Naam"
          placeholder="Jouw volledige naam"
          required
          error={errors.name}
        />
        <Input
          name="email"
          type="email"
          label="E-mailadres"
          placeholder="jouw@email.nl"
          required
          error={errors.email}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          name="phone"
          type="tel"
          label="Telefoonnummer"
          placeholder="+31 6 12345678"
          required
          error={errors.phone}
        />
        <div>
          <label htmlFor="location" className="mb-2 block text-sm font-medium text-dark">
            Gewenste locatie <span className="text-secondary">*</span>
          </label>
          <select
            id="location"
            name="location"
            className="input"
            required
          >
            <option value="">Kies een locatie</option>
            <option value="terneuzen">NRG Fitness Terneuzen</option>
            <option value="hulst">NRG Fitness Hulst (Binnenkort)</option>
          </select>
          {errors.location && (
            <p className="mt-1 text-sm text-secondary">{errors.location}</p>
          )}
        </div>
      </div>

      <Textarea
        name="goal"
        label="Wat is jouw doel? (optioneel)"
        placeholder="Bijv. afvallen, sterker worden, meer energie..."
        rows={3}
      />

      <div className="space-y-3">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary focus:ring-primary"
            required
          />
          <span className="text-sm text-neutral-600">
            Ik ga akkoord met de{" "}
            <a href="/privacy" className="text-primary hover:underline">
              privacyverklaring
            </a>{" "}
            en{" "}
            <a href="/algemene-voorwaarden" className="text-primary hover:underline">
              algemene voorwaarden
            </a>
            . <span className="text-secondary">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-sm text-secondary">{errors.consent}</p>
        )}

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="newsletter"
            className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-neutral-600">
            Ja, ik wil graag updates en aanbiedingen ontvangen via e-mail
          </span>
        </label>
      </div>

      {errors.general && (
        <div className="rounded-lg bg-secondary/10 p-4 text-secondary">
          {errors.general}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
        Claim Je Gratis VIP Dagpas
      </Button>
    </form>
  );
}
