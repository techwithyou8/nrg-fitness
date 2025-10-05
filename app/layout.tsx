import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./performance.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nrgpremium.nl'),
  title: {
    default: "NRG Fitness Terneuzen & Hulst | All-Inclusive Familie Fitness",
    template: "%s | NRG Fitness",
  },
  description: "Ervaar premium coaching, hospitality en vooruitgang die je écht voelt. All-inclusive lidmaatschappen met persoonlijke begeleiding, moderne toestellen en community.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#B5FF3B' },
    { media: '(prefers-color-scheme: dark)', color: '#1C1F22' },
  ],
  keywords: ["fitness", "sportschool", "Terneuzen", "Hulst", "familie fitness", "groepslessen", "personal training", "all-inclusive fitness"],
  authors: [{ name: "NRG Fitness" }],
  creator: "NRG Fitness",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.nrgpremium.nl",
    siteName: "NRG Fitness",
    title: "NRG Fitness | All-Inclusive Familie Fitness",
    description: "Premium fitness met persoonlijke begeleiding en hospitality",
    images: [
      {
        url: "/logo-large.png",
        width: 588,
        height: 200,
        alt: "NRG Fitness Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NRG Fitness | All-Inclusive Familie Fitness",
    description: "Premium fitness met persoonlijke begeleiding en hospitality",
    images: ["/logo-large.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={cn(inter.variable)}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo-large.png" />
      </head>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
