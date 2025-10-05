'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="text-center max-w-md">
        {/* Error Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
          <svg 
            className="w-10 h-10 text-secondary" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>

        {/* Error Title */}
        <h1 className="text-2xl md:text-3xl font-display font-bold text-dark mb-4">
          Oeps, er ging iets mis!
        </h1>

        {/* Error Message */}
        <p className="text-neutral-600 mb-8">
          We konden de pagina niet laden. Probeer het opnieuw of ga terug naar de homepage.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} className="w-full sm:w-auto">
            Probeer Opnieuw
          </Button>
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full">
              Naar Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
