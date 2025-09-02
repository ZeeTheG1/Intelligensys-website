# Intelligensys Website - Tech Stack Documentation

## Overview
This document outlines the complete technology stack used in the Intelligensys website project, including development tools, frameworks, libraries, and deployment infrastructure.

## Frontend Technologies

### Core Framework
- **React 18.3.1**
  - Component-based UI library
  - Hooks for state management
  - Modern functional components
  - JSX for declarative UI

- **TypeScript 5.5.3**
  - Static type checking
  - Enhanced developer experience
  - Better code maintainability
  - Compile-time error detection

### Build Tools & Development

- **Vite 5.4.2**
  - Fast development server
  - Hot Module Replacement (HMR)
  - Optimized production builds
  - ES modules support
  - Built-in TypeScript support

- **@vitejs/plugin-react 4.3.1**
  - React integration for Vite
  - JSX transformation
  - React Fast Refresh

### Styling & UI

- **Tailwind CSS 3.4.1**
  - Utility-first CSS framework
  - Responsive design system
  - Customizable design tokens
  - Minimal CSS bundle size

- **PostCSS 8.4.35**
  - CSS processing pipeline
  - Plugin ecosystem
  - Autoprefixer for browser compatibility

- **Autoprefixer 10.4.18**
  - Automatic vendor prefixing
  - Browser compatibility handling

- **Lucide React 0.344.0**
  - Consistent icon library
  - SVG-based icons
  - Tree-shakeable imports
  - Customizable size and styling

### Code Quality & Linting

- **ESLint 9.9.1**
  - JavaScript/TypeScript linting
  - Code style enforcement
  - Error detection
  - Custom rule configuration

- **TypeScript ESLint 8.3.0**
  - TypeScript-specific linting rules
  - Type-aware linting
  - Integration with ESLint

- **React-specific ESLint Plugins:**
  - `eslint-plugin-react-hooks 5.1.0-rc.0`: Hooks rules
  - `eslint-plugin-react-refresh 0.4.11`: Fast Refresh compatibility

## Backend & Services

### Database & Authentication
- **Supabase 2.54.0**
  - PostgreSQL database
  - Real-time subscriptions
  - Authentication system
  - Row Level Security (RLS)
  - REST API auto-generation
  - Edge functions support

### API Integration
- **@supabase/supabase-js**
  - Official JavaScript client
  - Type-safe database operations
  - Authentication methods
  - Real-time capabilities

## Development Tools

### Type System
- **@types/react 18.3.5**: React type definitions
- **@types/react-dom 18.3.0**: React DOM type definitions

### Configuration Files
- **tsconfig.json**: TypeScript configuration
- **tsconfig.app.json**: App-specific TypeScript config
- **tsconfig.node.json**: Node.js TypeScript config
- **eslint.config.js**: ESLint configuration
- **tailwind.config.js**: Tailwind CSS configuration
- **postcss.config.js**: PostCSS configuration
- **vite.config.ts**: Vite configuration

## Production & Deployment

### Hosting Platform
- **Railway**
  - Git-based deployments
  - Automatic builds
  - Environment variable management
  - Custom domain support
  - SSL certificates
  - Global CDN

### Production Server
- **serve 10.0.2**
  - Static file serving
  - Production-ready HTTP server
  - Gzip compression
  - Cache headers

### Build Pipeline
1. **Development**: `npm run dev` - Vite dev server
2. **Linting**: `npm run lint` - ESLint validation
3. **Building**: `npm run build` - Production build
4. **Preview**: `npm run preview` - Local production preview
5. **Deployment**: Automatic via Railway

## Environment Configuration

### Development Environment Variables
```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Production Environment
- Environment variables configured in Railway dashboard
- Automatic HTTPS certificates
- Global CDN distribution

## Package Management

### Node.js & npm
- **Node.js**: v20.17.0+ recommended
- **npm**: v10.8.2+ recommended
- **Package Manager**: npm (package-lock.json)

### Dependencies Summary
```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.54.0",
    "lucide-react": "^0.344.0", 
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "serve": "^10.0.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

## Browser Support
- Modern browsers supporting ES2015+
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Characteristics
- **Bundle Size**: Optimized with tree-shaking
- **Load Time**: Fast initial page load via Vite optimization
- **Runtime**: Efficient React rendering
- **Caching**: Browser caching for static assets

## Security Features
- Environment variable protection
- Supabase Row Level Security
- HTTPS in production
- Content Security Policy ready
- XSS protection via React

## Development Workflow Tools
- **Hot Module Replacement**: Instant updates during development
- **TypeScript**: Compile-time error checking
- **ESLint**: Code quality enforcement
- **Vite Dev Server**: Fast development builds

## Future Tech Stack Considerations
- **State Management**: Redux Toolkit or Zustand for complex state
- **Testing**: Jest + React Testing Library
- **E2E Testing**: Playwright or Cypress  
- **Monitoring**: Sentry for error tracking
- **Analytics**: Google Analytics or Plausible
- **CMS**: Headless CMS integration
- **Internationalization**: react-i18next