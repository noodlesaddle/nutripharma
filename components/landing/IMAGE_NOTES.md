# Image Handling Notes

## Current Implementation

We're using regular `<img>` tags instead of Next.js `<Image>` component for external images to avoid configuration complexity.

## Why?

1. **Simplicity**: No need to configure `remotePatterns` in `next.config.mjs`
2. **Flexibility**: Works with any external image URL without config changes
3. **No Build Issues**: Avoids Next.js image optimization errors

## Trade-offs

### Using `<img>` (Current)
✅ No configuration needed
✅ Works immediately
✅ No build errors
❌ No automatic optimization
❌ No lazy loading by default
❌ No blur placeholder

### Using Next.js `<Image>` (Alternative)
✅ Automatic optimization
✅ Built-in lazy loading
✅ Blur placeholder support
❌ Requires `remotePatterns` configuration
❌ Can cause build errors if misconfigured
❌ Slower initial load for external images

## Recommendation for Production

### Option 1: Keep Current (Recommended for MVP)
Continue using `<img>` tags. It's simple and works reliably.

### Option 2: Download Images Locally
1. Download all external images to `public/images/`
2. Use Next.js `<Image>` component with local paths
3. Get all optimization benefits without external URL issues

```tsx
// Example with local images
<Image
  src="/images/pharma-warehouse.jpg"
  alt="Pharmaceutical warehouse"
  width={600}
  height={400}
  className="rounded-xl"
/>
```

### Option 3: Use Next.js Image with Config
If you want to keep external URLs and use Next.js Image:

1. The `next.config.mjs` is already configured with `remotePatterns`
2. Change `<img>` back to `<Image>` in:
   - `components/landing/AboutSection.tsx`
   - `components/landing/ProductDistributorSection.tsx`
3. Add back the import: `import Image from "next/image"`

## Current External Images

1. **About Section**: 
   - `https://www.arrowedge.co.uk/wp-content/uploads/2018/09/arro_pharma.jpg`

2. **Radiant Viewer**:
   - `https://www.radiantviewer.com/img/mainbg.jpg`

3. **Nutricost**:
   - `https://www.nasc.cc/wp-content/uploads/2024/09/Nutricost-Logo.jpg`

## Next Steps

For production, consider:
1. Download and optimize images locally
2. Use WebP format for better compression
3. Create multiple sizes for responsive images
4. Add proper alt text for SEO
5. Consider using a CDN for image hosting
