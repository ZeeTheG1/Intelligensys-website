# Intelligensys Website - Architecture Documentation

## Overview
The Intelligensys website is a modern React-based single-page application built for showcasing AI agency services. The application follows a component-driven architecture with a clean separation of concerns.

## System Architecture

### High-Level Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Services      │    │   Database      │
│   (React/Vite)  │────│   (Supabase)    │────│   (Supabase)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │
        ▼
┌─────────────────┐
│   Deployment    │
│   (Railway)     │
└─────────────────┘
```

## Frontend Architecture

### Component Structure
```
src/
├── App.tsx                 # Root component & routing
├── main.tsx               # Application entry point
├── index.css              # Global styles
├── vite-env.d.ts         # Vite type declarations
├── components/            # Reusable UI components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Landing section
│   ├── Services.tsx       # Services showcase
│   ├── About.tsx          # Company information
│   ├── Contact.tsx        # Contact form with Supabase integration
│   └── Footer.tsx         # Site footer
└── lib/                   # Utilities and configurations
    └── supabase.ts        # Supabase client & types
```

### Application Flow
1. **Entry Point**: `main.tsx` renders the root `App` component
2. **Layout**: `App.tsx` provides the main layout structure
3. **Components**: Six main sections rendered in order:
   - Header (navigation)
   - Hero (landing/intro)
   - Services (offerings)
   - About (company info)
   - Contact (form submission)
   - Footer (links/info)

### Data Management
- **State Management**: React built-in state (useState, useEffect)
- **External Data**: Supabase client for contact form submissions
- **Types**: TypeScript interfaces defined in `lib/supabase.ts`

### Styling Strategy
- **Framework**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Global Styles**: Minimal custom CSS in `index.css`

## Backend Architecture

### Supabase Integration
- **Client Setup**: Configured in `src/lib/supabase.ts`
- **Environment Variables**: 
  - `VITE_SUPABASE_URL`: Project URL
  - `VITE_SUPABASE_ANON_KEY`: Anonymous access key
- **Data Types**: `ContactMessage` interface for form submissions

### Contact Form Flow
```
User Form Input → Contact.tsx → Supabase Client → Supabase Database
```

## Build & Deployment Architecture

### Development Environment
- **Build Tool**: Vite for fast development and building
- **Dev Server**: Hot module replacement enabled
- **Type Checking**: TypeScript with React types

### Production Deployment
- **Platform**: Railway for hosting
- **Build Process**: Vite production build
- **Static Assets**: Served via Railway's static hosting
- **Environment**: Production environment variables configured in Railway

## Security Considerations
- Environment variables for sensitive configuration
- Supabase Row Level Security (RLS) for data access
- Client-side validation with server-side enforcement
- HTTPS enabled in production

## Performance Optimizations
- Vite's optimized bundling
- Lucide React icons excluded from optimization (specific configuration)
- Tree-shaking for unused code elimination
- Modern ES modules for efficient loading

## Scalability Considerations
- Component-based architecture for easy feature additions
- Supabase provides scalable backend infrastructure
- Static site deployment for global CDN distribution
- Modular structure allows for easy refactoring

## Development Workflow
1. Local development with `npm run dev`
2. Code linting with `npm run lint`
3. Production build with `npm run build`
4. Automatic deployment via Railway on git push

## Future Architecture Enhancements
- State management library (Redux/Zustand) for complex state
- Component library/design system
- API layer abstraction
- Caching strategy implementation
- Monitoring and analytics integration