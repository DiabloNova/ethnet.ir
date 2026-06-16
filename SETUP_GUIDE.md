# Ethnet.ir - Complete Setup & Deployment Guide

## 🎬 Quick Start (5 minutes)

### Option 1: Development Mode
```bash
# 1. Navigate to project
cd ethnet-platform

# 2. Install dependencies (one-time)
pnpm install

# 3. Start dev server
pnpm dev

# 4. Open browser
# Visit http://localhost:3000
```

**Result**: Hot-reload enabled, see changes instantly.

### Option 2: Production Build
```bash
# 1. Build the project
pnpm build

# 2. Start production server
pnpm start

# 3. Open browser
# Visit http://localhost:3000
```

**Result**: Optimized, minified production build.

## 📋 Prerequisites Checklist

- [ ] **Node.js 18+** installed (`node --version`)
- [ ] **pnpm installed** (`pnpm --version`)
  - If not: `npm install -g pnpm`
- [ ] **Git** installed for version control
- [ ] **Modern Browser** (Chrome, Firefox, Safari, Edge)
  - WebGL support for 3D animations
  - ES2020+ JavaScript support

## 🏗️ Project Setup from Scratch

### Step 1: Download/Clone Project
```bash
# Option A: Direct download
unzip ethnet-platform.zip
cd ethnet-platform

# Option B: Git clone
git clone https://github.com/yourusername/ethnet-platform.git
cd ethnet-platform
```

### Step 2: Install Dependencies
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

**Output**: Should install 75+ packages, creates `node_modules/` and `pnpm-lock.yaml`

### Step 3: Verify Installation
```bash
# Check Next.js is installed
pnpm list next

# Check Framer Motion
pnpm list framer-motion

# Check Three.js
pnpm list three
```

### Step 4: Start Development Server
```bash
pnpm dev
```

**Expected Output**:
```
▲ Next.js 16.2.6
- Local:         http://localhost:3000
- Network:       http://100.64.90.173:3000
✓ Ready in 706ms
```

### Step 5: Open in Browser
1. Open http://localhost:3000
2. You should see the Ethnet.ir landing page
3. Interact with animations and explore features

## ✅ Verification Checklist

After setup, verify these are working:

- [ ] **Page Loads** - No blank screen, content visible
- [ ] **3D Scene** - Animated purple/blue spheres visible in hero
- [ ] **Custom Cursor** - Cursor changes on hover
- [ ] **Buttons Animate** - Buttons glow and scale on hover
- [ ] **Scroll Animations** - Cards animate as you scroll
- [ ] **Mobile Responsive** - Resize browser, layout adapts
- [ ] **Farsi Text** - Arabic/Farsi text displays correctly
- [ ] **Console Clean** - No error messages (warnings OK)

## 🚀 Deployment Options

### Option 1: Vercel (Easiest - 2 minutes)

#### Prerequisites
- Vercel account (free signup at vercel.com)
- GitHub account for repo

#### Steps
```bash
# 1. Push code to GitHub
git init
git add .
git commit -m "Initial Ethnet commit"
git remote add origin https://github.com/yourusername/ethnet-platform.git
git push -u origin main

# 2. Go to vercel.com, click "New Project"
# 3. Import your GitHub repository
# 4. Click "Deploy"
# 5. Get automatic URL (e.g., ethnet-platform.vercel.app)
```

**Result**: Live production URL, auto-deploys on git push

### Option 2: Self-Hosted Server (Advanced)

#### Prerequisites
- Linux server with Node.js 18+
- SSH access to server
- Domain name (optional)

#### Steps
```bash
# 1. SSH into your server
ssh user@your-server.com

# 2. Clone the repository
git clone https://github.com/yourusername/ethnet-platform.git
cd ethnet-platform

# 3. Install dependencies
pnpm install

# 4. Build for production
pnpm build

# 5. Use PM2 for process management
npm install -g pm2
pm2 start "pnpm start" --name ethnet

# 6. Check status
pm2 status
pm2 logs ethnet
```

**Result**: Running on your server, accessible via domain

### Option 3: Docker (DevOps)

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
```

```bash
# Build and run
docker build -t ethnet .
docker run -p 3000:3000 ethnet
```

**Result**: Containerized application, portable to any Docker host

## 🔧 Configuration & Customization

### Change Brand Name
Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Platform - Investment Platform',
  description: 'Your description here',
  // ...
}
```

### Change Colors
Edit `app/globals.css`:
```css
@theme inline {
  --color-crypto-blue: #0066ff;      /* Change this */
  --color-crypto-purple: #a855f7;    /* Change this */
  --color-crypto-cyan: #00d4ff;      /* Change this */
}
```

### Change Fonts
Replace `public/fonts/*.ttf` with your own fonts and update `@font-face` in `app/globals.css`

### Change 3D Scene
Edit `components/3d/CryptoScene.tsx`:
```typescript
// Modify colors, geometry, particle count
// Adjust mouse interaction sensitivity
// Add new 3D objects
```

## 📊 Environment Variables

Currently, no environment variables are required for development.

For production with blockchain integration, you'll need:
```bash
# .env.local
NEXT_PUBLIC_ALCHEMY_API_KEY=your_key
NEXT_PUBLIC_WALLET_CONNECT_ID=your_id
```

## 🐛 Troubleshooting

### Issue: Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm dev -- -p 3001
```

### Issue: Fonts Not Loading
```bash
# Verify fonts are in public/fonts/
ls -la public/fonts/

# Check in browser DevTools > Network > Fonts tab
# Fonts should show status 200
```

### Issue: 3D Scene Blank
```bash
# Check browser console for WebGL errors
# Open DevTools (F12) > Console tab

# Test WebGL support: visit webglreport.com
# If no WebGL, try different browser

# On mobile, ensure device is capable
```

### Issue: Animations Laggy
```bash
# Open DevTools Performance tab
# Record page interaction
# Look for dropped frames or long tasks

# Solutions:
# - Reduce particle count in CryptoScene
# - Disable 3D on mobile
# - Use `prefers-reduced-motion` media query
```

### Issue: Farsi Text Garbled
```bash
# Ensure fonts downloaded correctly
# Check HTML lang attribute: <html lang="fa" dir="rtl">
# Verify CSS @font-face declarations
# Clear browser cache (Ctrl+Shift+Del)
```

## 📈 Performance Monitoring

### Check Web Vitals
```bash
# Run in your browser console
pnpm build && pnpm start

# Open DevTools > Lighthouse
# Run audit for desktop/mobile
# Check scores for:
# - Performance
# - Accessibility
# - Best Practices
# - SEO
```

### Monitor Real User Metrics
```bash
# Already integrated in page.tsx:
import { Analytics } from '@vercel/analytics/next'

// Vercel Analytics tracks:
// - Page load times
// - User interactions
// - Performance issues
```

## 🔐 Security Best Practices

### Development
- Never commit `.env.local` files
- Use `.gitignore` for secrets
- Keep dependencies updated

### Production
- Enable HTTPS (automatic on Vercel)
- Set Content Security Policy headers
- Implement CORS properly
- Validate all user inputs
- Use secure authentication

### Database Integration (Future)
```typescript
// Use environment variables for DB credentials
const dbUrl = process.env.DATABASE_URL
// Never expose in client-side code
```

## 🎬 Advanced: Custom Animations

### Add New Keyframe Animation
```css
/* In app/globals.css */
@keyframes my-animation {
  0% { opacity: 0; transform: scale(0.8); }
  50% { opacity: 0.5; }
  100% { opacity: 1; transform: scale(1); }
}

@layer utilities {
  .animate-my-animation {
    animation: my-animation 0.5s ease-out;
  }
}

/* In your component */
<div className="animate-my-animation">Content</div>
```

### Add New Motion Component
```typescript
// components/ui/MyAnimatedComponent.tsx
'use client'

import { motion } from 'framer-motion'

export function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Content
    </motion.div>
  )
}
```

## 📚 Learning Resources

### Animations
- **Framer Motion**: https://www.framer.com/motion
- **GSAP**: https://greensock.com/gsap
- **CSS Animations**: https://developer.mozilla.org/en-US/docs/Web/CSS/animation

### 3D Graphics
- **Three.js**: https://threejs.org
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber
- **Drei**: https://github.com/pmndrs/drei

### Next.js
- **Official Docs**: https://nextjs.org/docs
- **App Router Guide**: https://nextjs.org/docs/app
- **Image Optimization**: https://nextjs.org/docs/app/building-your-application/optimizing/images

### Tailwind CSS
- **Official Docs**: https://tailwindcss.com/docs
- **v4 Announcement**: https://tailwindcss.com/blog/tailwindcss-v4

## 🤝 Getting Help

1. **Check Documentation**: Read ETHNET_README.md
2. **Browser DevTools**: F12 for errors and debugging
3. **GitHub Issues**: Report bugs
4. **Stack Overflow**: Tag questions with `next.js`, `framer-motion`, `three.js`

## ✅ Pre-Deployment Checklist

Before going live:

- [ ] All animations smooth on target devices
- [ ] No console errors or warnings
- [ ] Images optimized and loading fast
- [ ] Text readable at all font sizes
- [ ] Mobile responsive tested
- [ ] Links working correctly
- [ ] Fonts loading (visible in Network tab)
- [ ] Metadata correct (title, description)
- [ ] Analytics enabled (if using Vercel)
- [ ] Environment variables set (if needed)

## 🎉 You're Ready!

Your Ethnet.ir platform is now:
- ✅ Installed and running locally
- ✅ Ready for customization
- ✅ Deployed to production
- ✅ Monitoring performance

Visit your live site and enjoy the cinematic experience!

---

**Questions?** Check ETHNET_README.md for detailed documentation.

**Need Help?** Open an issue or check the troubleshooting section above.

Happy investing! 🚀💰
