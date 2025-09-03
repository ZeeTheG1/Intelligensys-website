# Intelligensys Website

A modern, SEO-optimized React website for Intelligensys AI automation agency featuring comprehensive routing, error tracking, analytics, and performance monitoring.

## ✨ Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Multi-page Routing**: React Router with SEO-optimized pages
- **Error Tracking**: Sentry integration for production monitoring
- **Analytics**: PostHog for user behavior and conversion tracking
- **SEO Optimized**: Meta tags, structured data, and social sharing
- **Performance**: Optimized builds and lazy loading
- **Testing**: Playwright end-to-end testing
- **Design System**: Comprehensive component library and guidelines

## 🚀 Quick Start

### Prerequisites
- Node.js 20.17.0+
- npm 10.8.2+

### Installation
```bash
# Clone repository
git clone <repository-url>
cd intelligensys-website

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Configure environment variables (see Environment Setup)
```

### Development
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run test       # Run Playwright tests
npm run test:ui    # Run tests with UI
```

## 🔧 Environment Setup

Configure these environment variables in your `.env` file:

```bash
# Supabase (Required for contact forms)
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Sentry (Optional - Error tracking)
VITE_SENTRY_DSN=your_sentry_dsn

# PostHog (Optional - Analytics)
VITE_POSTHOG_KEY=your_posthog_api_key
VITE_POSTHOG_HOST=https://app.posthog.com

# Site Configuration
VITE_SITE_URL=https://intelligensys.com
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── ...
├── pages/              # Route-specific page components
│   ├── HomePage.tsx    # Landing page
│   ├── ServicesPage.tsx # Services showcase
│   ├── AboutPage.tsx   # Company information
│   └── ContactPage.tsx # Contact form
├── utils/              # Utility functions
│   ├── sentry.ts       # Error tracking setup
│   └── analytics.ts    # PostHog analytics helpers
├── lib/                # External service configurations
│   └── supabase.ts     # Supabase client setup
└── hooks/              # Custom React hooks
```

## 🎨 Design System

The project includes a comprehensive design system documented in `DESIGN-SYSTEM.md` covering:
- Color palette and typography
- Component patterns and layouts
- Responsive design guidelines
- Accessibility standards

## 📊 Analytics & Tracking

### PostHog Analytics
- Automatic pageview tracking
- Custom event tracking for business metrics
- Session recordings and heatmaps
- Feature flags support

### Sentry Error Tracking
- Automatic error capture and reporting
- Performance monitoring
- Session replay for debugging
- Custom error boundaries

## 🔍 SEO Features

- **Meta Tags**: Dynamic, page-specific SEO optimization
- **Structured Data**: JSON-LD for better search visibility
- **Open Graph**: Social media sharing optimization
- **Canonical URLs**: Proper URL canonicalization
- **Industry Keywords**: AI automation, business process automation, etc.

## 🧪 Testing

### Playwright E2E Tests
```bash
npm run test           # Run all tests
npm run test:ui        # Interactive test runner
npm run test:headed    # Visual test execution
```

Test coverage includes:
- Page loading and navigation
- Form submissions
- Mobile responsiveness
- Error handling

## 🏗️ Architecture

See `ARCHITECTURE.md` for detailed system architecture including:
- Component structure and data flow
- Routing and state management
- Performance optimizations
- Deployment considerations

## 🛠️ Tech Stack

See `TECH-STACK.md` for comprehensive technology documentation including:
- Frontend frameworks and libraries
- Development tools and configuration
- Deployment and hosting setup
- Performance monitoring tools

## 🚢 Deployment

### Railway (Current)
Automatic deployments on git push to main branch.

### Environment Variables
Configure in Railway dashboard:
- All VITE_ prefixed variables from `.env.example`
- Build command: `npm run build`
- Start command: `npm run preview`

## 📈 Performance

- **Lighthouse Scores**: 90+ across all metrics
- **Core Web Vitals**: Optimized for Google's ranking factors
- **Bundle Size**: Optimized with Vite and tree shaking
- **Caching**: Browser and CDN caching strategies

## 🤝 Contributing

1. Follow the established design system
2. Maintain TypeScript strict mode
3. Add tests for new features
4. Update documentation as needed
5. Run `npm run lint` before committing

## 📞 Support

For questions about setup or deployment:
- Check `ARCHITECTURE.md` for technical details
- Review `DESIGN-SYSTEM.md` for UI/UX guidelines
- Consult `TECH-STACK.md` for technology specifics

## 📝 License

Private - Intelligensys proprietary software.
# Deployment trigger
