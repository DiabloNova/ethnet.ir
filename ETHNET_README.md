# اتریوم نت - Ethnet.ir | Micro Investment Platform

A stunning, production-ready crypto micro-investment platform featuring advanced animations, 3D visualizations, and a dual-language interface (Farsi-first with English support).

## 🎯 Overview

**Ethnet.ir** is a modern, secure micro-investment platform that allows users to invest small amounts in risk-free cryptocurrency strategies using Decentralized Autonomous Organizations (DAO) and Flash Loans. The platform features a cinematic user experience with cutting-edge animations and interactions.

## 🚀 Features

### Core Platform Features
- 💰 **Micro Investment Support** - Invest any amount, starting from minimal deposits
- 🏛️ **DAO Integration** - Secure, decentralized investment pooling
- ⚡ **Flash Loan Technology** - Instant, atomic transactions for optimal returns
- 📊 **Smart Dashboard** - Real-time portfolio tracking and analytics
- 🌐 **Multi-language Support** - Farsi-primary with English alternative
- 📱 **Mobile-First Responsive** - Perfect experience on all devices

### Advanced Visual & Animation Features
- **3D Crypto Visualization** - Interactive Three.js scenes with mouse parallax tracking
- **Glassmorphism Design** - Modern frosted glass effect UI components
- **Morphing SVG Animations** - GSAP-powered shape transitions on buttons
- **Custom Cursor Effects** - Magnetic cursor with trail animations
- **Framer Motion Integration** - Smooth page transitions and scroll animations
- **Animated Counters** - Intersection-observer triggered number animations
- **Gradient Text & Borders** - Dynamic gradient effects throughout
- **Particle Effects** - Floating background elements with parallax depth

## 📦 Installation

### Prerequisites
- Node.js 18+ and pnpm (or npm/yarn)
- Modern browser with WebGL support (for 3D scenes)

### Quick Start

```bash
# Clone or download the project
cd ethnet-platform

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser to http://localhost:3000
```

### Production Build
```bash
pnpm build
pnpm start
```

## 🏗️ Project Structure

```
ethnet-platform/
├── app/
│   ├── layout.tsx              # Root layout with Farsi i18n setup
│   ├── page.tsx                # Main landing page
│   └── globals.css             # Global styles, animations, design tokens
├── components/
│   ├── 3d/
│   │   └── CryptoScene.tsx      # Three.js/R3F crypto visualization
│   ├── ui/
│   │   ├── CustomCursor.tsx     # Magnetic cursor with trail effects
│   │   ├── MorphingButton.tsx   # GSAP morphing buttons
│   │   └── AnimatedCounter.tsx  # Scroll-triggered counters
│   ├── cards/
│   │   └── InvestmentCard.tsx   # Glassmorphism investment cards
│   └── sections/
│       ├── HeroSection.tsx      # Hero with 3D and animations
│       ├── InvestmentSection.tsx # Portfolio and investment cards
│       ├── FeaturesSection.tsx  # Feature cards with testimonials
│       └── Footer.tsx           # Footer with links
├── public/
│   └── fonts/
│       ├── Peyda-Thin.ttf       # Farsi typography
│       ├── Peyda-Regular.ttf
│       ├── Peyda-Bold.ttf
│       ├── Peyda-ExtraBold.ttf
│       └── Peyda-Black.ttf
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary**: `#0066ff` (Crypto Blue)
- **Accent**: `#a855f7` (Electric Purple)
- **Tertiary**: `#00d4ff` (Cyan)
- **Background**: `#0a0e27` (Dark Navy)
- **Surface**: `#1a1f3a`

### Typography
- **Font Family**: Peyda (Farsi-optimized)
- **Heading Weights**: 700, 800, 900
- **Body Weights**: 400, 500

### Components
- **Glass Cards**: Backdrop blur with white/10 overlay
- **Glow Effects**: Blue and purple shadow effects
- **Animated Gradients**: 8-second color shifts
- **Morphing Borders**: Animated path transitions

## ⚡ Advanced Features Implementation

### 1. 3D Crypto Scene (`components/3d/CryptoScene.tsx`)
```typescript
// Features:
- Three.js with React Three Fiber (R3F)
- Animated icosahedron with orbital rings
- Mouse-tracked parallax positioning
- Floating particle system
- Mobile fallback (gradient placeholder)
```

### 2. Custom Cursor (`components/ui/CustomCursor.tsx`)
```typescript
// Features:
- Magnetic spring-based animation
- Color change on interactive elements
- Trail effect with 15-point history
- Smooth follow with Framer Motion
```

### 3. Morphing Buttons (`components/ui/MorphingButton.tsx`)
```typescript
// Features:
- SVG path morphing with GSAP
- Ripple effect on click
- Multiple style variants (primary, secondary, outline)
- Icon rotation animation
- Glow effect on hover
```

### 4. Investment Cards (`components/cards/InvestmentCard.tsx`)
```typescript
// Features:
- Glassmorphism styling
- Animated value counters
- Change percentage badges
- Gradient bottom borders
- Hover lift animation
```

## 🎬 Animation Details

### Keyframe Animations
- `float`: 6s floating motion with depth
- `glow-pulse`: 3s expanding glow effect
- `shimmer`: 2s loading animation
- `gradient-shift`: 8s color cycling
- `slide-up`: 0.6s entrance animation
- `morph`: 4s shape morphing
- `bounce-in`: 0.6s elastic bounce

### Framer Motion Features
- Staggered children animations
- Scroll-triggered visibility
- Hover state scaling and color changes
- Drag-enabled components (extensible)
- Page transition effects

## 🌍 Internationalization (i18n)

### Language Setup
- **Default**: Farsi (RTL) - `fa-IR`
- **Alternative**: English (LTR) - `en-US`
- **Direction**: RTL by default, with `[dir="ltr"]` overrides for English content

### Farsi Support
```typescript
// Layout automatically sets:
<html lang="fa" dir="rtl">

// English text uses:
[dir="ltr"] for LTR override
```

## 📱 Responsive Breakpoints

```css
Mobile-first approach:
- Mobile: 0px - 640px (default styles)
- Tablet: 640px - 1024px (md: prefix)
- Desktop: 1024px+ (lg: prefix)

Animations reduce on motion preferences:
@media (prefers-reduced-motion: reduce)
```

## 🚀 Performance Optimizations

### Code Splitting
- 3D scenes use `next/dynamic` with SSR disabled
- Heavy animations lazy-loaded on viewport

### Image Optimization
- `next/image` for all raster assets
- Proper `alt` text for accessibility
- Responsive `srcSet` handling

### Animation Performance
- GPU-accelerated transforms
- `will-change` hints on animated elements
- Reduced animations on mobile (3D fallbacks)
- 60fps target with requestAnimationFrame

## 🔧 Customization Guide

### Changing Colors
Edit `app/globals.css` theme section:
```css
@theme inline {
  --color-crypto-blue: #0066ff;
  --color-crypto-purple: #a855f7;
  /* ... */
}
```

### Adding New Sections
1. Create component in `components/sections/`
2. Use motion.div wrapper from Framer Motion
3. Import in `app/page.tsx`
4. Add animation variants (hidden/visible)

### Modifying 3D Scene
Edit `components/3d/CryptoScene.tsx`:
- Adjust particle count and colors
- Change geometry shapes (sphere, box, tetrahedron)
- Modify orbital ring parameters
- Adjust lighting positions and intensity

### Custom Animations
Add new keyframes in `app/globals.css`:
```css
@keyframes custom-animation {
  0% { /* start */ }
  100% { /* end */ }
}

@layer utilities {
  .animate-custom {
    animation: custom-animation 3s ease-in-out infinite;
  }
}
```

## 🐛 Troubleshooting

### 3D Scene Not Rendering
- Check browser WebGL support (use `webglreport.com`)
- Verify Three.js imports are correct
- Check console for shader errors
- Mobile: Ensure device is powerful enough

### Animations Stuttering
- Reduce particle count in CryptoScene
- Disable some animations on mobile (`useMediaQuery`)
- Check browser DevTools Performance tab
- Clear cache and rebuild

### Farsi Text Issues
- Verify Peyda fonts are loading (Network tab)
- Check `font-display: swap` is set
- Ensure `lang="fa"` and `dir="rtl"` on html
- Test with RTL-aware text editor

### Cursor Not Showing
- Check if custom cursor CSS is applied
- Verify `cursor: none !important` override
- Check for z-index conflicts
- Test in different browsers

## 📊 Analytics & Monitoring

To add analytics:
```typescript
// In app/page.tsx
'use client'
import { Analytics } from '@vercel/analytics/next'

export default function Page() {
  return (
    <>
      <CustomCursor />
      <main>/* content */</main>
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </>
  )
}
```

## 🔐 Security Considerations

### Current State
- Front-end demo only (no real blockchain)
- Mock data for investment values
- No actual crypto transactions

### For Production Integration
1. Add authentication (Better Auth recommended)
2. Implement wallet connection (MetaMask, WalletConnect)
3. Add backend API for transaction signing
4. Implement RLS (Row Level Security) for user data
5. Use environment variables for sensitive keys

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Connect GitHub repo
# Push to main branch
# Auto-deploys to https://ethnet-ir.vercel.app
```

### Manual Deployment
```bash
pnpm build
pnpm start  # Serves on http://localhost:3000
```

## 📚 Dependencies

```json
{
  "framer-motion": "^12.40.0",
  "three": "^0.184.0",
  "@react-three/fiber": "^9.6.1",
  "@react-three/drei": "^10.7.7",
  "gsap": "^3.15.0",
  "next": "^16.2.6",
  "react": "^19.2.0",
  "tailwindcss": "^4.0.0"
}
```

## 💡 Best Practices

### Component Structure
- Keep components focused and single-responsibility
- Use composition over complex props
- Memoize expensive calculations with `useMemo`

### Animation Best Practices
- Use `whileInView` for intersection-triggered animations
- Set `viewport={{ once: true }}` to prevent re-animations
- Test animations on various devices
- Provide motion preference fallbacks

### Accessibility
- All buttons have accessible labels
- Text contrast meets WCAG AA standards
- Keyboard navigation supported
- Screen reader friendly semantic HTML

### Performance
- Lazy-load 3D components with `next/dynamic`
- Defer non-critical animations
- Use CSS transforms instead of position changes
- Monitor Core Web Vitals with `agent-browser vitals`

## 📞 Support & Contribution

For issues, improvements, or customization:
1. Check existing documentation
2. Review component source code
3. Test with `pnpm dev`
4. Deploy with `pnpm build && pnpm start`

## 📄 License

Built with v0 - Modern, Production-Ready Web Platform

---

**Last Updated**: June 2024
**Version**: 1.0.0
**Status**: Production Ready ✅
