import { Suspense, lazy, useEffect } from 'react';
import { observeWebVitals } from '@/utils/performance';

// Lazy load heavy components
const CouponModal = lazy(() => import('./CouponModal').then(module => ({ default: module.CouponModal })));

// Loading fallback component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-4">
    <div className="w-6 h-6 border-2 border-neon-green border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Error boundary for lazy loaded components
const ErrorFallback = () => (
  <div className="flex items-center justify-center p-4 text-gray-400">
    <p>Failed to load component. Please refresh the page.</p>
  </div>
);

interface PerformanceOptimizedAppProps {
  children: React.ReactNode;
}

export const PerformanceOptimizedApp = ({ children }: PerformanceOptimizedAppProps) => {
  useEffect(() => {
    // Start observing web vitals
    if (typeof window !== 'undefined') {
      observeWebVitals();
    }

    // Prefetch critical resources
    const prefetchCriticalResources = () => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = 'https://pagelocked.org/cp/js/n0kjm';
      document.head.appendChild(link);
    };

    // Run after a short delay to not block initial render
    setTimeout(prefetchCriticalResources, 1000);
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  );
};