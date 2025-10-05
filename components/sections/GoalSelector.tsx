"use client";

import { useState } from "react";
import { goals } from "@/lib/data/goals";
import { memberships } from "@/lib/data/memberships";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const iconMap: Record<string, string> = {
  scale: "⚖️",
  zap: "⚡",
  dumbbell: "🏋️",
  "heart-pulse": "❤️",
  users: "👨‍👩‍👧‍👦",
};

export function GoalSelector() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
    trackEvent("goal_selector_select", { goal: goalId });
  };

  const selectedGoalData = goals.find((g) => g.id === selectedGoal);
  const recommendedMembership = selectedGoalData
    ? memberships.find((m) => m.id === selectedGoalData.recommendedPlan)
    : null;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-display-sm">
            Wat is jouw doel?
          </h2>
          <p className="text-lg text-neutral-600">
            Kies jouw focus en ontdek het beste lidmaatschap voor jouw reis.
          </p>
        </div>

        {/* Goal Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <Card
              key={goal.id}
              className={`cursor-pointer transition-all ${
                selectedGoal === goal.id
                  ? "border-2 border-primary shadow-glow"
                  : "border-2 border-transparent hover:border-primary/30"
              }`}
              onClick={() => handleGoalSelect(goal.id)}
            >
              <div className="mb-4 text-4xl">{iconMap[goal.icon]}</div>
              <h3 className="mb-2 text-xl font-semibold text-dark">
                {goal.title}
              </h3>
              <p className="mb-4 text-sm text-neutral-600">
                {goal.description}
              </p>
              <ul className="space-y-2">
                {goal.benefits.slice(0, 3).map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
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
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Recommended Membership */}
        {selectedGoalData && recommendedMembership && (
          <div className="mt-12 animate-fade-in rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="mb-2 text-2xl font-semibold text-dark">
                Aanbevolen voor jou: {recommendedMembership.name}
              </h3>
              <p className="mb-6 text-neutral-600">
                Perfect voor {selectedGoalData.title.toLowerCase()} met alle benodigde faciliteiten en begeleiding.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg">
                  Word Lid - {recommendedMembership.priceLabel}
                </Button>
                <Button size="lg" variant="outline">
                  Bekijk Details
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
