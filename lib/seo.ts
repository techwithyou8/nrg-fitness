import type { SEOStructuredData } from "@/types";

export function generateOrganizationSchema(): SEOStructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "NRG Fitness",
    "description": "All-inclusive familie fitness met persoonlijke begeleiding en premium faciliteiten in Terneuzen en Hulst",
    "url": "https://www.nrgpremium.nl",
    "logo": "https://www.nrgpremium.nl/logo.png",
    "image": "https://www.nrgpremium.nl/og-image.jpg",
    "telephone": "+31115123456",
    "email": "info@nrgpremium.nl",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Voorbeeld straat 123",
      "addressLocality": "Terneuzen",
      "postalCode": "4531 AB",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.3347,
      "longitude": 3.8289
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/NRGFitnessNL",
      "https://www.instagram.com/nrgfitnessnl"
    ]
  };
}

export function generateMembershipProductSchema(
  name: string,
  price: number,
  features: string[]
): SEOStructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": features.join(", "),
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": `https://www.nrgpremium.nl/lidmaatschappen#${name.toLowerCase()}`,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": price,
        "priceCurrency": "EUR",
        "billingDuration": "P4W"
      }
    },
    "brand": {
      "@type": "Brand",
      "name": "NRG Fitness"
    }
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]): SEOStructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateReviewSchema(
  rating: number,
  reviewCount: number,
  reviews: Array<{ author: string; rating: number; text: string; date: string }>
): SEOStructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": rating,
    "reviewCount": reviewCount,
    "itemReviewed": {
      "@type": "Organization",
      "name": "NRG Fitness"
    },
    "review": reviews.map((review) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating
      },
      "reviewBody": review.text
    }))
  };
}
