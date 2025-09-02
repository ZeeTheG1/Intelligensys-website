// Environment variable access utilities
// Centralized and safe access to Vite environment variables

// Direct access to Vite environment variables
// This is safe because Vite replaces import.meta.env at build time
const getEnvVar = (key: string, defaultValue?: string): string | undefined => {
  try {
    // @ts-ignore - Vite replaces import.meta.env at build time
    const value = import.meta.env[key];
    return value || defaultValue;
  } catch (error) {
    console.warn(`Failed to access environment variable ${key}:`, error);
    return defaultValue;
  }
};

// Environment configuration
export const env = {
  // App mode
  isDev: getEnvVar('DEV') === 'true' || getEnvVar('MODE') === 'development',
  isProd: getEnvVar('PROD') === 'true' || getEnvVar('MODE') === 'production',
  mode: getEnvVar('MODE') || 'development',
  
  // Sentry configuration
  sentry: {
    dsn: getEnvVar('VITE_SENTRY_DSN'),
    environment: getEnvVar('MODE') || 'development',
  },
  
  // PostHog configuration
  posthog: {
    apiKey: getEnvVar('VITE_POSTHOG_KEY'),
    host: getEnvVar('VITE_POSTHOG_HOST') || 'https://app.posthog.com',
  },
  
  // Supabase configuration
  supabase: {
    url: getEnvVar('VITE_SUPABASE_URL'),
    anonKey: getEnvVar('VITE_SUPABASE_ANON_KEY'),
  },
  
  // Email service configuration
  email: {
    resendApiKey: getEnvVar('VITE_RESEND_API_KEY'),
    notificationEmail: getEnvVar('VITE_NOTIFICATION_EMAIL') || 'intelligensys-cloud@intelligensys.io',
  },
  
  // Site configuration
  site: {
    url: getEnvVar('VITE_SITE_URL') || 'https://intelligensys.com',
  },
};

// Debug environment variables in development
if (env.isDev) {
  console.group('🔧 Environment Configuration');
  console.log('Mode:', env.mode);
  console.log('Sentry DSN:', env.sentry.dsn ? '✅ Set' : '❌ Missing');
  console.log('PostHog Key:', env.posthog.apiKey ? '✅ Set' : '❌ Missing');
  console.log('Supabase URL:', env.supabase.url ? '✅ Set' : '❌ Missing');
  console.log('Resend API Key:', env.email.resendApiKey ? '✅ Set' : '❌ Missing');
  console.groupEnd();
}