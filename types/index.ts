export interface Membership {
  id: string;
  name: string;
  slug: string;
  price: number;
  priceLabel: string;
  studentDiscount: number;
  featured?: boolean;
  badge?: string;
  features: string[];
  cta: {
    primary: string;
    secondary: string;
  };
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  city: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  facilities: string[];
  openingHours: {
    [key: string]: string;
  };
  image: string;
  isComingSoon?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  membership: string;
  rating: number;
  text: string;
  image?: string;
  date: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  recommendedPlan: string;
}

export interface GroupClass {
  id: string;
  name: string;
  description: string;
  duration: number;
  intensity: "low" | "medium" | "high";
  instructor?: string;
  image: string;
  schedule: {
    day: string;
    time: string;
    location: string;
  }[];
}

export interface FormSubmission {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  goal?: string;
  message?: string;
  consent: boolean;
  newsletter?: boolean;
}

export interface SEOStructuredData {
  "@context": string;
  "@type": string;
  [key: string]: any;
}
