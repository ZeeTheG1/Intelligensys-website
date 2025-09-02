import posthog from 'posthog-js';

export const initPostHog = () => {
  const apiKey = import.meta.env.VITE_POSTHOG_KEY;
  const apiHost = import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com';

  if (!apiKey) {
    console.warn('PostHog API key not found. Analytics disabled.');
    return;
  }

  posthog.init(apiKey, {
    api_host: apiHost,
    // Capture pageviews automatically
    capture_pageview: true,
    // Capture clicks automatically
    autocapture: true,
    // Session recording
    session_recording: {
      maskAllInputs: true,
      maskAllText: false,
    },
    // Feature flags
    bootstrap: {
      featureFlags: {},
    },
    // Privacy settings
    respect_dnt: true,
    // Performance monitoring
    capture_performance: true,
    // Only load in production
    loaded: (posthog) => {
      if (import.meta.env.DEV) {
        posthog.debug();
      }
    },
  });
};

// Analytics event helpers
export const trackEvent = (event: string, properties?: Record<string, any>) => {
  if (typeof posthog !== 'undefined') {
    posthog.capture(event, properties);
  }
};

export const trackPageView = (page?: string) => {
  if (typeof posthog !== 'undefined') {
    posthog.capture('$pageview', {
      $current_url: page || window.location.href,
    });
  }
};

export const identifyUser = (userId: string, properties?: Record<string, any>) => {
  if (typeof posthog !== 'undefined') {
    posthog.identify(userId, properties);
  }
};

export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof posthog !== 'undefined') {
    posthog.people.set(properties);
  }
};

// Business-specific analytics events
export const trackContactFormSubmission = (formData: {
  name?: string;
  email?: string;
  company?: string;
  source?: string;
}) => {
  trackEvent('contact_form_submitted', {
    form_location: 'contact_page',
    has_company: !!formData.company,
    email_domain: formData.email?.split('@')[1],
    ...formData,
  });
};

export const trackServiceInterest = (service: string, location: string) => {
  trackEvent('service_interest', {
    service_name: service,
    page_location: location,
  });
};

export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent('cta_clicked', {
    cta_text: ctaText,
    page_location: location,
  });
};

export const trackNavigation = (from: string, to: string) => {
  trackEvent('navigation', {
    from_page: from,
    to_page: to,
  });
};