export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="text-center">
        {/* Animated Logo/Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-white font-display text-xl font-bold">
            NRG <span className="text-primary">Fitness</span>
          </p>
          <p className="text-neutral-400 text-sm">Laden...</p>
        </div>
      </div>
    </div>
  );
}
