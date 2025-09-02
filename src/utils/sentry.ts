import * as Sentry from '@sentry/react';
import { env } from './env';

export const initSentry = () => {
  try {
    const { dsn, environment } = env.sentry;
    
    if (!dsn) {
      console.warn('Sentry DSN not found. Error tracking disabled.');
      return;
    }

    Sentry.init({
      dsn,
      environment,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: false,
          blockAllMedia: false,
        }),
      ],
      // Performance Monitoring
      tracesSampleRate: env.isProd ? 0.1 : 1.0,
      // Session Replay
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      // Additional options
      beforeSend(event) {
        // Filter out common non-critical errors
        if (event.exception) {
          const error = event.exception.values?.[0];
          if (error?.type === 'ChunkLoadError' || 
              error?.value?.includes('Loading chunk') ||
              error?.value?.includes('Script error')) {
            return null;
          }
        }
        return event;
      },
    });
    
    console.log('✅ Sentry initialized successfully');
  } catch (error) {
    console.warn('❌ Failed to initialize Sentry:', error);
  }
};

export const captureException = Sentry.captureException;
export const captureMessage = Sentry.captureMessage;
export const setUser = Sentry.setUser;
export const setTag = Sentry.setTag;
export const setContext = Sentry.setContext;