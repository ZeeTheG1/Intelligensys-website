import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import * as Sentry from '@sentry/react';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Contact from './components/Contact';

import { initSentry } from './utils/sentry';
import { initPostHog, trackPageView, trackNavigation } from './utils/analytics';

// Initialize error tracking and analytics safely
try {
  initSentry();
} catch (error) {
  console.warn('Failed to initialize Sentry:', error);
}

try {
  initPostHog();
} catch (error) {
  console.warn('Failed to initialize PostHog:', error);
}

// Analytics wrapper component to track route changes
const AnalyticsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = React.useState(location.pathname);

  useEffect(() => {
    try {
      // Track page views
      trackPageView();
      
      // Track navigation between pages
      if (prevLocation !== location.pathname) {
        trackNavigation(prevLocation, location.pathname);
        setPrevLocation(location.pathname);
      }
    } catch (error) {
      console.warn('Analytics tracking error:', error);
    }
  }, [location, prevLocation]);

  return <>{children}</>;
};

// Error Boundary Component
const SentryErrorBoundary = Sentry.withErrorBoundary(
  ({ children }: { children: React.ReactNode }) => <>{children}</>,
  {
    fallback: ({ error, resetError }) => (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-6">
            We're sorry, but something unexpected happened. Our team has been notified.
          </p>
          <button
            onClick={resetError}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    ),
    showDialog: false,
  }
);

function App() {
  return (
    <SentryErrorBoundary>
      <HelmetProvider>
        <Router>
          <AnalyticsWrapper>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Catch-all route for 404s */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Layout>
          </AnalyticsWrapper>
        </Router>
      </HelmetProvider>
    </SentryErrorBoundary>
  );
}

// 404 Not Found component
const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-md mx-auto text-center p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </a>
          <div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;