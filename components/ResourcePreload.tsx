import Script from 'next/script';

export function ResourcePreload() {
  return (
    <>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload critical assets */}
      <link rel="preload" href="/logo.png" as="image" />
      <link rel="preload" href="/images/hero-gym.webp" as="image" />
      
      {/* DNS prefetch for better performance */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Manifest voor PWA */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Theme color voor mobile browsers */}
      <meta name="theme-color" content="#B5FF3B" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Touch icons voor iOS */}
      <link rel="apple-touch-icon" href="/logo-large.png" />
      
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
    </>
  );
}
