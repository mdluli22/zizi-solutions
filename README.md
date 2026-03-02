# NexTech — Blockchain & AI Solutions Website

A pixel-faithful recreation of the website from the screen recording, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Canvas API** — for animated particle orb and service card visuals (no external 3D library needed)

## Features Recreated

1. **Hero Section** — Full-screen animated colorful particle sphere with floating frosted-glass info cards ("Cybersecurity", "Artificial Intelligence")
2. **What We Do Section** — Bright neon-yellow (#f4f53c) background, animated count-up stats (320+ clients, 125+ projects, 43+ partners)
3. **Services We Offer Section** — Dark grid-texture background, 4 service cards with unique animated particle art:
   - Custom Software Development
   - Embedded Hardware Development
   - Machine Vision Design
   - IoT & Connected Devices
4. **Navbar** — Transparent on top, blurred dark on scroll, mobile hamburger menu
5. **Footer** — Minimal dark footer with navigation links

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
nextech/
├── app/
│   ├── globals.css      # Global styles, animations, fonts
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page assembling all sections
├── components/
│   ├── Navbar.tsx       # Fixed nav with scroll-aware styling
│   ├── HeroSection.tsx  # Full-screen hero with floating cards
│   ├── ParticleOrb.tsx  # Canvas particle sphere animation
│   ├── WhatWeDoSection.tsx  # Yellow section with animated stats
│   ├── ServicesSection.tsx  # Dark services grid
│   ├── ServiceParticle.tsx  # Per-card canvas particle animations
│   └── Footer.tsx       # Site footer
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Design Notes

- **Colors**: Black `#0a0a0a` + Neon Yellow `#f4f53c` + white accents
- **Typography**: Barlow Condensed (display/headings) + Barlow (body)
- **Animations**: Pure CSS keyframes + Canvas requestAnimationFrame (no heavy 3D libraries)
- **Responsive**: Mobile-first, fully responsive at all breakpoints
