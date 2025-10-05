import type { Location } from "@/types";

export const locations: Location[] = [
  {
    id: "terneuzen",
    name: "NRG Fitness Terneuzen",
    slug: "terneuzen",
    city: "Terneuzen",
    address: "Voorbeeld straat 123",
    postalCode: "4531 AB",
    phone: "+31 (0)115 123 456",
    email: "terneuzen@nrgpremium.nl",
    coordinates: {
      lat: 51.3347,
      lng: 3.8289,
    },
    facilities: [
      "Hypermoderne toestellen",
      "Functional zone",
      "Groepslessen studio",
      "Spinning ruimte",
      "Sauna & lounge",
      "Gratis parkeren",
    ],
    openingHours: {
      "Maandag - Vrijdag": "06:00 - 23:00",
      "Zaterdag - Zondag": "08:00 - 21:00",
      "Feestdagen": "09:00 - 18:00",
    },
    image: "/images/locations/terneuzen.jpg",
  },
  {
    id: "hulst",
    name: "NRG Fitness Hulst",
    slug: "hulst",
    city: "Hulst",
    address: "Nieuwe straat 45",
    postalCode: "4561 CD",
    phone: "+31 (0)114 987 654",
    email: "hulst@nrgpremium.nl",
    coordinates: {
      lat: 51.2833,
      lng: 4.0500,
    },
    facilities: [
      "State-of-the-art equipment",
      "Functional training zone",
      "Groepslessen studio",
      "Cycling zone",
      "Wellness ruimte",
      "Ruime kleedkamers",
    ],
    openingHours: {
      "Maandag - Vrijdag": "06:00 - 23:00",
      "Zaterdag - Zondag": "08:00 - 21:00",
      "Feestdagen": "09:00 - 18:00",
    },
    image: "/images/locations/hulst.jpg",
    isComingSoon: true,
  },
];
