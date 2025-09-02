# Intelligensys Design System

## Overview
This document outlines the design system used in the Intelligensys website, including color schemes, typography, spacing, components, and patterns.

## Design Principles
- **Clean & Modern**: Minimalist design with focus on content
- **Professional**: Business-focused AI agency aesthetic
- **Accessible**: WCAG compliant color contrasts and interactions
- **Responsive**: Mobile-first approach with fluid layouts

## Color Palette

### Primary Colors
```css
/* Blue - Primary Brand Color */
--blue-50: rgb(239 246 255)    /* Light backgrounds */
--blue-500: rgb(59 130 246)    /* Interactive elements */
--blue-600: rgb(37 99 235)     /* Primary actions */
--blue-700: rgb(29 78 216)     /* Hover states */

/* Purple - Accent/Gradient */
--purple-50: rgb(250 245 255)  /* Light backgrounds */
--purple-600: rgb(147 51 234)  /* Gradient accents */
```

### Neutral Colors
```css
/* Grays - Text & UI Elements */
--gray-50: rgb(249 250 251)    /* Lightest backgrounds */
--gray-200: rgb(229 231 235)   /* Borders */
--gray-500: rgb(107 114 128)   /* Secondary text */
--gray-600: rgb(75 85 99)      /* Body text */
--gray-700: rgb(55 65 81)      /* Navigation */
--gray-900: rgb(17 24 39)      /* Headings */

/* White & Transparent */
--white: rgb(255 255 255)
--white-90: rgba(255 255 255 0.9)  /* Backdrop blur */
```

### Gradient Patterns
```css
/* Brand Gradients */
.gradient-primary: bg-gradient-to-r from-blue-600 to-purple-600
.gradient-background: bg-gradient-to-br from-blue-50 via-white to-purple-50
```

## Typography

### Font System
- **Primary Font**: Default system font stack (San Francisco, Segoe UI, Roboto)
- **Weight Hierarchy**: 
  - Regular (400): Body text
  - Semibold (600): Subheadings
  - Bold (700): Headings

### Type Scale
```css
/* Headings */
.text-6xl: 3.75rem (60px)    /* Hero titles */
.text-5xl: 3rem (48px)       /* Large headings */
.text-4xl: 2.25rem (36px)    /* Section headings */
.text-3xl: 1.875rem (30px)   /* Subsection headings */
.text-2xl: 1.5rem (24px)     /* Component titles */
.text-xl: 1.25rem (20px)     /* Large body text */

/* Body Text */
.text-lg: 1.125rem (18px)    /* Emphasized text */
.text-base: 1rem (16px)      /* Regular body text */
.text-sm: 0.875rem (14px)    /* Secondary text */
```

### Line Height
- **Headings**: `leading-tight` (1.25)
- **Body Text**: `leading-relaxed` (1.625)

## Spacing System

### Padding/Margin Scale
```css
/* Component Spacing */
px-4: 1rem (16px)        /* Small horizontal padding */
px-6: 1.5rem (24px)      /* Medium horizontal padding */
px-8: 2rem (32px)        /* Large horizontal padding */

py-2: 0.5rem (8px)       /* Small vertical padding */
py-4: 1rem (16px)        /* Medium vertical padding */
py-16: 4rem (64px)       /* Section spacing */

/* Layout Spacing */
space-x-2: 0.5rem (8px)  /* Small horizontal gaps */
space-x-8: 2rem (32px)   /* Navigation gaps */
space-y-4: 1rem (16px)   /* Vertical element spacing */
space-y-8: 2rem (32px)   /* Section content spacing */
```

### Container Widths
```css
max-w-7xl: 80rem (1280px)   /* Main content container */
max-w-4xl: 56rem (896px)    /* Hero content width */
max-w-3xl: 48rem (768px)    /* Text content width */
```

## Components

### Buttons

#### Primary Button
```tsx
<button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
  Button Text
</button>
```

#### CTA Button (Large)
```tsx
<button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group">
  Button Text
  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
</button>
```

### Cards

#### Service Card
```tsx
<div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group hover:border-blue-200">
  {/* Icon */}
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
    <Icon className="h-6 w-6 text-white" />
  </div>
  
  {/* Content */}
  <h3 className="text-xl font-semibold text-gray-900 mb-3">Title</h3>
  <p className="text-gray-600 mb-6 leading-relaxed">Description</p>
  
  {/* Feature List */}
  <ul className="space-y-2">
    <li className="flex items-center text-sm text-gray-500">
      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
      Feature
    </li>
  </ul>
</div>
```

### Navigation

#### Header Structure
```tsx
<header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Logo + Navigation */}
  </div>
</header>
```

#### Logo Pattern
```tsx
<div className="flex items-center space-x-2">
  <Brain className="h-8 w-8 text-blue-600" />
  <span className="text-2xl font-bold text-gray-900">Intelligensys</span>
</div>
```

### Icons

#### Icon System
- **Library**: Lucide React
- **Sizes**: 
  - `h-4 w-4` (16px): Small icons
  - `h-5 w-5` (20px): Button icons
  - `h-6 w-6` (24px): Component icons
  - `h-8 w-8` (32px): Logo/prominent icons

#### Brand Icons
- **Brain**: Primary logo icon
- **Bot, Database, Settings, BarChart3, Workflow, Shield**: Service icons
- **Menu, X**: Mobile navigation
- **ArrowRight**: CTA indicators

## Layout Patterns

### Section Structure
```tsx
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Title</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">Description</p>
    </div>
    
    {/* Section Content */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Cards/Content */}
    </div>
  </div>
</section>
```

### Grid Systems
- **2 Column**: `md:grid-cols-2`
- **3 Column**: `lg:grid-cols-3`
- **Gap**: `gap-8` (2rem)

## Interactive States

### Transitions
```css
/* Standard Transitions */
transition-colors: 150ms ease-in-out
transition-all duration-300: 300ms ease-in-out
transition-transform: transform 150ms ease-in-out

/* Hover Effects */
hover:bg-blue-700: Color changes
hover:shadow-lg: Elevation changes
hover:scale-110: Scale transformations
group-hover:translate-x-1: Contextual animations
```

### Focus States
- Uses browser defaults with enhanced visibility
- Blue focus rings for accessibility

## Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Small screens */
md: 768px   /* Medium screens */
lg: 1024px  /* Large screens */
xl: 1280px  /* Extra large screens */
```

### Mobile Navigation
- Hamburger menu for mobile
- Full-width mobile buttons
- Collapsible navigation drawer

## Accessibility

### Color Contrast
- All text meets WCAG AA standards
- Primary blue (#2563eb) provides sufficient contrast
- Gray levels tested for readability

### Interactive Elements
- Minimum 44px touch targets
- Keyboard navigation support
- Screen reader friendly markup

## Animation & Motion

### Design Principles
- Subtle and purposeful
- 300ms standard duration
- Ease-in-out timing
- Performance optimized (transform/opacity)

### Common Patterns
- Button hover states
- Card elevation changes
- Icon micro-interactions
- Smooth page transitions

## Future Enhancements

### Planned Additions
- Dark mode support
- Extended color palette
- Component library extraction
- Animation system expansion
- Design tokens implementation

### Component Expansion
- Form components
- Modal systems
- Toast notifications
- Loading states
- Error boundaries