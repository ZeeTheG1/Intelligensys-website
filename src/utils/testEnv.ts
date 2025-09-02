// Test environment variable access
// This file can be imported in development to verify env vars are working

import { env } from './env';

export const testEnvironmentVariables = () => {
  console.group('🧪 Environment Variables Test');
  
  // Test basic env access
  console.log('Environment mode:', env.mode);
  console.log('Is development:', env.isDev);
  console.log('Is production:', env.isProd);
  
  // Test service configurations
  console.log('\n📧 Sentry Configuration:');
  console.log('  DSN:', env.sentry.dsn ? '✅ Set' : '❌ Missing');
  console.log('  Environment:', env.sentry.environment);
  
  console.log('\n📊 PostHog Configuration:');
  console.log('  API Key:', env.posthog.apiKey ? '✅ Set' : '❌ Missing');
  console.log('  Host:', env.posthog.host);
  
  console.log('\n🗄️ Supabase Configuration:');
  console.log('  URL:', env.supabase.url ? '✅ Set' : '❌ Missing');
  console.log('  Anon Key:', env.supabase.anonKey ? '✅ Set' : '❌ Missing');
  
  console.log('\n📮 Email Configuration:');
  console.log('  Resend API Key:', env.email.resendApiKey ? '✅ Set' : '❌ Missing');
  console.log('  Notification Email:', env.email.notificationEmail);
  
  console.log('\n🌐 Site Configuration:');
  console.log('  Site URL:', env.site.url);
  
  console.groupEnd();
  
  // Return summary for programmatic use
  return {
    mode: env.mode,
    services: {
      sentry: !!env.sentry.dsn,
      posthog: !!env.posthog.apiKey,
      supabase: !!(env.supabase.url && env.supabase.anonKey),
      email: !!env.email.resendApiKey
    },
    ready: !!(env.supabase.url && env.supabase.anonKey) // Minimum required for basic functionality
  };
};

// Auto-run in development
if (env.isDev) {
  testEnvironmentVariables();
}