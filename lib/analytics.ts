/**
 * Analytics tracking utilities
 */

type EventName = 
  | "vip_pass_submit"
  | "membership_click"
  | "goal_selector_select"
  | "phone_click"
  | "email_click"
  | "location_view"
  | "class_schedule_view"
  | "testimonial_interact";

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track custom events
 */
export function trackEvent(eventName: EventName, properties?: EventProperties) {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, properties);
  }

  // Facebook Pixel
  if (typeof window.fbq !== "undefined") {
    window.fbq("track", eventName, properties);
  }

  // Console log in development
  if (process.env.NODE_ENV === "development") {
    console.log("📊 Analytics Event:", eventName, properties);
  }
}

/**
 * Track page views
 */
export function trackPageView(url: string) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag !== "undefined") {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
      page_path: url,
    });
  }

  if (process.env.NODE_ENV === "development") {
    console.log("📄 Page View:", url);
  }
}

/**
 * Track conversions (lead submissions)
 */
export function trackConversion(conversionType: string, value?: number) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "conversion", {
      send_to: process.env.NEXT_PUBLIC_GA_CONVERSION_ID,
      value: value,
      currency: "EUR",
      transaction_id: `${Date.now()}-${Math.random()}`,
    });
  }

  if (typeof window.fbq !== "undefined") {
    window.fbq("track", "Lead", {
      content_name: conversionType,
      value: value,
      currency: "EUR",
    });
  }

  if (process.env.NODE_ENV === "development") {
    console.log("🎯 Conversion:", conversionType, value);
  }
}

// Type declarations for global analytics objects
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}
