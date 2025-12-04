# Landing Page Components

This directory contains the refactored landing page components for Nutripharma.

## Structure

```
landing/
├── types.ts                      # TypeScript type definitions
├── constants.ts                  # Content and configuration constants
├── FloatingNav.tsx              # Navigation header component
├── AuroraBackground.tsx         # Decorative background component
├── AppleCardsCarousel.tsx       # Product carousel component
├── HeroSection.tsx              # Hero/banner section
├── ProductsSection.tsx          # Featured products section
├── ServicesSection.tsx          # Services grid section
├── AboutSection.tsx             # About company section
├── ProductDistributorSection.tsx # Reusable product distributor section
├── ContactSection.tsx           # Contact form section
├── Footer.tsx                   # Footer component
└── index.ts                     # Barrel export file
```

## Key Improvements

### 1. Component Organization
- Split 1120-line monolithic component into 12 focused, reusable components
- Each component has a single responsibility
- Easier to test, maintain, and update

### 2. Type Safety
- Full TypeScript support with proper interfaces
- Type-safe props for all components
- Centralized type definitions in `types.ts`

### 3. Performance
- Removed problematic window event listeners from carousel
- Used Framer Motion's built-in drag constraints
- Components are now easier to memoize if needed
- Proper image optimization with Next.js Image component

### 4. Accessibility
- Added proper ARIA labels throughout
- Keyboard navigation support
- Semantic HTML structure
- Proper form labels and validation
- Fixed nav scroll offset to account for fixed header

### 5. Code Quality
- Extracted magic numbers into constants
- Consistent color theming system
- Reusable ProductDistributorSection for both Nutricost and Radiant Viewer
- Clean separation of concerns

### 6. Form Functionality
- Working contact form with state management
- Loading states during submission
- Success/error feedback
- Form validation
- Disabled state during submission

### 7. Maintainability
- Content separated from components in `constants.ts`
- Easy to add new languages
- Easy to add new product sections
- Consistent styling patterns

## Usage

```tsx
import NutripharmLanding from "@/components/nutripharm-landing-new";

export default function Home() {
  return <NutripharmLanding />;
}
```

## Adding New Content

### Add a new language:
Edit `constants.ts` and add your language key with translations.

### Add a new product section:
Use the `ProductDistributorSection` component:

```tsx
<ProductDistributorSection
  id="new-product"
  tag="Official Distributor"
  title="Your Title"
  highlight="Product Name"
  description="Description..."
  features={["Feature 1", "Feature 2"]}
  ctaPrimary="Learn More"
  ctaPrimaryLink="https://example.com"
  cardTitle="Card Title"
  cardDescription="Card description"
  imageSrc="/path/to/image.jpg"
  imageAlt="Alt text"
  colorScheme="emerald" // or "sky"
  reverse={false} // true to swap image/text positions
/>
```

## Next Steps

Consider implementing:
- Form backend integration (replace console.log in ContactSection)
- Analytics tracking
- SEO metadata per section
- Lazy loading for images
- Skeleton loaders
- Scroll-to-top button
- Language preference persistence (localStorage)
- URL-based language selection
