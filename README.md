# Microsite Studio - Premium Web Design Agency

🏋️‍♀️ **Transform Your Fitness Business with Luxury Websites**

A premium, high-converting website for Microsite Studio - a luxury web design agency specializing in fitness coaches, gym owners, and personal trainers.

## ✨ Features

### 🌍 Geo-Location Based Pricing

- **Automatic location detection** using IP geolocation
- **Dynamic pricing** in local currencies:
  - 🇺🇸 **US & Canada**: $300-$800 USD
  - 🇬🇧 **UK**: £250-£650 GBP
  - 🇪🇺 **Europe**: €280-€750 EUR
  - 🇦🇪 **Middle East**: $280-$750 USD
  - 🇮🇳 **India & South Asia**: ₹20,000-₹50,000 INR

### 🎨 Premium Design

- **Luxury color scheme**: Black, white, gold, and red accents
- **Premium typography**: Inter and Poppins fonts
- **Smooth animations**: Framer Motion powered interactions
- **Mobile-first responsive design**
- **Glass morphism and gradient effects**

### 🚀 Technical Excellence

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **SEO optimized** with proper meta tags
- **Performance optimized** for speed

### 💼 Service Tiers

1. **Starter Package** - Basic professional websites
2. **Growth Package** - Advanced features and optimization
3. **Premium Package** - Luxury design with AI integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom luxury theme
- **Animations**: Framer Motion
- **Icons**: Lucide React & Heroicons
- **Forms**: React Hook Form with Zod validation
- **Geo-location**: IP geolocation API integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone and install dependencies**:

```bash
git clone <your-repo>
cd new_website_microsite
npm install
```

2. **Start development server**:

```bash
npm run dev
```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with fonts & metadata
│   ├── page.tsx        # Homepage with all sections
│   └── globals.css     # Global styles & Tailwind imports
├── components/
│   ├── ui/             # Reusable UI components
│   │   └── Button.tsx  # Premium button component
│   └── sections/       # Page sections
│       ├── Navigation.tsx  # Sticky navigation with mobile menu
│       ├── Hero.tsx       # Hero section with animations
│       └── Pricing.tsx    # Geo-location pricing tables
├── lib/
│   └── utils.ts        # Utilities for pricing, geo-location, etc.
└── types/
    └── index.ts        # TypeScript type definitions
```

## 🎨 Design System

### Colors

- **Primary Black**: `#0A0A0A`
- **Luxury White**: `#FAFAFA`
- **Gold Accent**: `#D4AF37`
- **Red Accent**: `#DC2626`
- **Gray Tones**: `#1F1F1F`, `#111111`

### Typography

- **Body Text**: Inter (300-900 weights)
- **Display Text**: Poppins (300-900 weights)
- **Features**: OpenType features enabled

### Components

- **Buttons**: 4 variants (primary, secondary, outline, ghost)
- **Animations**: Subtle hover effects and page transitions
- **Layout**: Container-based responsive grid system

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Other Platforms

Works with any platform supporting Next.js:

- Netlify
- Railway
- Render
- Self-hosted

## 📈 Performance Features

- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts with `display: swap`
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Optimization**: Tailwind CSS purging
- **SEO Ready**: Complete meta tags and structured data

## 🔧 Customization

### Adding New Regions

Edit `src/lib/utils.ts` to add new pricing regions:

```typescript
export const PRICING_REGIONS = {
  NEW_COUNTRY: {
    region: "Your Region",
    currency: "CURRENCY",
    symbol: "Symbol",
    starter: 300,
    growth: 500,
    premium: 800,
    custom: "Custom Quote",
  },
};
```

### Styling

All colors and design tokens are defined in:

- `tailwind.config.ts` - Tailwind theme extension
- `src/app/globals.css` - Custom CSS utilities

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions about this website or our services:

- 📧 Email: studiomicrosite@gmail.com
- 🌐 Website: [micrositestudio.com](https://micrositestudio.com)

---

**Built with ❤️ by Microsite Studio** - Creating premium websites for fitness professionals worldwide.
