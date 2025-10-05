import type { Goal } from "@/types";

export const goals: Goal[] = [
  {
    id: "weight-loss",
    title: "Afvallen",
    description: "Verlies gezond gewicht met begeleiding en motivatie",
    icon: "scale",
    benefits: [
      "Persoonlijk voedingsadvies",
      "Cardio en krachtoefeningen",
      "Voortgangsmetingen",
      "Groepsmotivatie",
    ],
    recommendedPlan: "premium",
  },
  {
    id: "energy",
    title: "Meer Energie",
    description: "Voel je fitter en energieker in het dagelijks leven",
    icon: "zap",
    benefits: [
      "Conditietraining",
      "Dynamische groepslessen",
      "Flexibele tijden",
      "Wellness faciliteiten",
    ],
    recommendedPlan: "gold",
  },
  {
    id: "strength",
    title: "Sterker Worden",
    description: "Bouw spierkracht op met professionele begeleiding",
    icon: "dumbbell",
    benefits: [
      "Krachtsportschema's",
      "Functional training",
      "Techniekbegeleiding",
      "Progressiemetingen",
    ],
    recommendedPlan: "premium",
  },
  {
    id: "recovery",
    title: "Revalidatie & Herstel",
    description: "Herstel na blessure of medische behandeling",
    icon: "heart-pulse",
    benefits: [
      "Lage impact oefeningen",
      "Persoonlijk traject",
      "Fysiotherapeutisch advies",
      "Rustige trainingstijden",
    ],
    recommendedPlan: "vip",
  },
  {
    id: "family",
    title: "Familie Fitness",
    description: "Sport samen met het hele gezin",
    icon: "users",
    benefits: [
      "Gezinsvriendelijke tijden",
      "Variatie voor alle leeftijden",
      "Kids programma's",
      "Family events",
    ],
    recommendedPlan: "premium",
  },
];
