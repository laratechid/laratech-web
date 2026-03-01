# Laratech ID - Company Profile Website

Website company profile modern untuk Laratech ID, sebuah Software House & IT Consulting yang berbasis di Indonesia. Dibangun dengan React, TypeScript, Tailwind CSS, dan Framer Motion untuk pengalaman scrolling yang sinematik dan imersif.

## 🚀 Fitur Utama

- **Parallax Scrolling** - Efek parallax 3-layer pada hero section
- **Smooth Scroll** - Navigasi halus antar section
- **Scrollspy Navigation** - Highlight menu aktif real-time
- **Animated Counters** - Animasi angka pada trust bar
- **Dark Mode Default** - Deep space palette yang elegan
- **Fully Responsive** - Optimized untuk 320px - 1440px+
- **Zero Form Contact** - CTA WhatsApp + Google Maps (tanpa form)

## 🛠 Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 3.4
- **Animation:** Framer Motion + GSAP
- **Icons:** Lucide React
- **UI Components:** shadcn/ui

## 📁 Struktur Project

```
src/
├── components/
│   └── navigation/
│       └── Navbar.tsx          # Navigation dengan scrollspy
├── sections/
│   ├── Hero.tsx                # Hero dengan 3-layer parallax
│   ├── TrustBar.tsx            # Animated counters
│   ├── TentangKami.tsx         # About section
│   ├── Layanan.tsx             # Services grid 3x2
│   ├── Portofolio.tsx          # Portfolio dengan filter
│   ├── Teknologi.tsx           # Tech stack
│   ├── Testimoni.tsx           # Testimonials
│   ├── Kontak.tsx              # Contact (WhatsApp + Maps)
│   └── Footer.tsx              # Footer
├── hooks/
│   ├── useParallax.ts          # Parallax hooks
│   └── useCounter.ts           # Counter animation hooks
├── App.tsx                     # Main app component
├── index.css                   # Global styles
└── App.css                     # App-specific styles
```

## 🎨 Design System

### Colors
- **Background Primary:** `#070A12` (deep space navy)
- **Background Secondary:** `#0B0F1C`
- **Accent:** `#2EE9FF` (electric cyan)
- **Text Primary:** `#F2F5FF`
- **Text Secondary:** `#A7B1C8`
- **WhatsApp:** `#25D366`

### Typography
- **Headings:** Space Grotesk (600-700)
- **Body:** Inter (400-500)
- **Labels:** IBM Plex Mono (500, uppercase)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm atau yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd laratech-id

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Development Server
```bash
npm run dev
```
Server berjalan di `http://localhost:5173`

### Production Build
```bash
npm run build
```
Output ada di folder `dist/`

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1536px

## ♿ Accessibility

- Semantic HTML5
- ARIA labels
- Keyboard navigation support
- Focus visible states
- Reduced motion support (`prefers-reduced-motion`)

## 🔧 Konfigurasi

### Google Maps
Iframe src dapat diubah di `src/sections/Kontak.tsx`:
```tsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  ...
/>
```

### WhatsApp Link
Nomor WhatsApp dapat diubah di `src/sections/Kontak.tsx`:
```tsx
<a
  href="https://wa.me/YOUR_NUMBER?text=..."
  ...
>
```

## 📄 License

© 2025 Laratech ID. All rights reserved.

---

Made with ❤️ in Indonesia
