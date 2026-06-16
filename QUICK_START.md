# Ethnet.ir - Quick Start (2 Minutes)

## ⚡ Fastest Way to Get Running

### Step 1: Install (30 seconds)
```bash
pnpm install
```

### Step 2: Run (10 seconds)
```bash
pnpm dev
```

### Step 3: Open (10 seconds)
Visit: **http://localhost:3000**

**✅ Done! You're live.**

---

## 🌐 Deploy to Internet (2 minutes)

### Free Option: Vercel
```bash
# 1. Create account: vercel.com (free)
# 2. Connect GitHub
# 3. Click "Deploy"
# 4. Get live URL instantly
```

**Live URL**: `ethnet-platform.vercel.app`

---

## 🎨 Customize (Common Changes)

### Change Brand Color
File: `app/globals.css` (line 68)
```css
--color-crypto-blue: #0066ff;  /* Change to your color */
```

### Change Title
File: `app/layout.tsx` (line 12)
```typescript
title: 'Your Platform Name',
```

### Change Hero Text
File: `components/sections/HeroSection.tsx` (line 63)
```typescript
title: 'Your Title Here'
```

---

## 📱 Check on Mobile

### In Browser
1. Press `F12` to open DevTools
2. Click phone icon in top-left
3. Select device (iPhone 14, Galaxy S25, etc.)
4. Resize to see responsive design

### On Real Phone
1. Get your computer's local IP: `ipconfig getifaddr en0`
2. On phone: Visit `http://YOUR_IP:3000`
3. Test animations and scrolling

---

## 🐛 Troubleshooting (30 seconds)

### Port Already in Use
```bash
# Kill process on 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm dev -- -p 3001
```

### 3D Scene Blank
- Check WebGL: Visit `webglreport.com`
- Try different browser
- Check console (F12 > Console)

### Fonts Not Loading
- Open DevTools (F12)
- Go to Network tab
- Search for "Peyda"
- Should show status 200
- If 404: fonts not in `public/fonts/`

### Animations Slow
- Open DevTools > Performance
- Record for 3 seconds
- Look for dropped frames
- If yes, reduce particles in 3D scene

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| `ETHNET_README.md` | Complete guide (380+ lines) |
| `SETUP_GUIDE.md` | Deployment guide (450+ lines) |
| `IMPLEMENTATION_SUMMARY.md` | What was built |
| `QUICK_START.md` | This file |

---

## ✅ What You Get

- ✅ 3D crypto visualization
- ✅ Custom cursor with trail
- ✅ Morphing buttons
- ✅ Animated counters
- ✅ Glassmorphism cards
- ✅ 20+ animations
- ✅ Farsi & English
- ✅ Mobile responsive
- ✅ Production ready
- ✅ Fully customizable

---

## 🎯 Next Steps

1. **Explore**: Visit `http://localhost:3000` and scroll
2. **Customize**: Edit colors, text, fonts in files
3. **Deploy**: Push to GitHub, deploy on Vercel
4. **Extend**: Add backend, database, authentication

---

## 💬 Need Help?

- Check `ETHNET_README.md` for detailed info
- Check `SETUP_GUIDE.md` for deployment help
- Check browser console (F12) for errors
- Search "Ethnet" in this folder for other docs

---

## 🚀 You're Ready!

Your platform is ready to impress. Go build something amazing! 🎉

---

**Questions?** → See `ETHNET_README.md`
**Deploying?** → See `SETUP_GUIDE.md`
**Curious?** → See `IMPLEMENTATION_SUMMARY.md`
