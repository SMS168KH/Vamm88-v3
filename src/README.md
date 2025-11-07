# 🎰 VAM88 Casino - Online Promotions Website

A premium online casino promotions website featuring a sophisticated black and gold aesthetic, built with React, TypeScript, and Tailwind CSS.

## ✨ Features

### 🎨 Design
- **Luxury Black & Gold Theme**: Professional casino aesthetic with pure black backgrounds (#000000) and gold accents
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Premium transitions and hover effects throughout
- **Modern UI Components**: Built with Radix UI and shadcn/ui components

### 🎮 Gaming Categories
- **Live Casino**: Real-time dealer games with Evolution Gaming
- **Slots**: Wide selection including JDB, Pragmatic Play, and Microgaming
- **Sports Betting**: CMD Sports integration
- **Chess Games**: Traditional table games
- **Hot Games Carousel**: Featured games showcase

### 🎁 Promotions & Bonuses
- **Multiple Bonus Types**: Welcome, deposit, cashback, birthday, and VIP bonuses
- **Dynamic Filtering**: Filter bonuses by category (All, New Member, Daily, VIP, Special)
- **Enhanced Cards**: Luxury borders, animations, and premium styling
- **Time-Limited Offers**: Clear display of bonus validity periods

### 🌍 Internationalization
- **Multi-Language Support**: English, Chinese (中文), and Khmer (ខ្មែរ)
- **Country Selection**: Cambodia, Malaysia, and Singapore
- **Real-time Translation**: Instant language switching

### 🔐 Authentication
- **Login/Register Modal**: Elegant authentication system
- **Form Validation**: Built with React Hook Form and Zod
- **Password Toggle**: Enhanced user experience
- **Remember Me**: Persistent login option

### 💬 Additional Features
- **Live Chat Widget**: 24/7 customer support access
- **Trust Badges**: Security certifications and payment methods
- **Social Media Integration**: Facebook, Telegram, Instagram, YouTube
- **Newsletter Signup**: Email subscription for promotions
- **24/7 Support Info**: Multiple contact methods

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/vam88-casino.git
   cd vam88-casino
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

### Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

### GitHub Pages

Detailed deployment instructions are available in [DEPLOYMENT.md](./DEPLOYMENT.md).

**Quick Deploy:**

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. Enable GitHub Pages in repository settings
4. Choose "GitHub Actions" as the source
5. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`

### Other Hosting Options

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **AWS S3**: Upload the `dist` folder to an S3 bucket with static hosting
- **Cloudflare Pages**: Connect your GitHub repo for automatic deployments

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Carousel**: Embla Carousel
- **State Management**: React Context API
- **Routing**: Hash-based client-side routing

## 📁 Project Structure

```
vam88-casino/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── figma/                   # Figma import components
│   ├── AppPage.tsx              # Mobile app download page
│   ├── BonusCard.tsx            # Bonus display cards
│   ├── BonusGrid.tsx            # Bonus grid layout
│   ├── BonusPage.tsx            # Promotions page
│   ├── BonusTabs.tsx            # Bonus category filters
│   ├── CasinoFooter.tsx         # Footer component
│   ├── CasinoHeader.tsx         # Navigation header
│   ├── HomePage.tsx             # Landing page
│   ├── HotGamesCarousel.tsx     # Featured games
│   ├── LiveChat.tsx             # Chat widget
│   ├── LoginModal.tsx           # Authentication modal
│   ├── SlotsPage.tsx            # Slots games page
│   ├── TrustSection.tsx         # Trust badges
│   └── WelcomeBanner.tsx        # Hero banner
├── contexts/
│   └── TranslationContext.tsx   # i18n context
├── styles/
│   ├── colors.css               # Color variables
│   └── globals.css              # Global styles
├── translations/
│   └── index.ts                 # Translation strings
├── App.tsx                      # Main app component
├── package.json                 # Dependencies
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript config
└── tailwind.config.ts          # Tailwind config
```

## 🎨 Color Scheme

```css
/* Gold Palette */
--gold: #F4D889        /* Primary gold */
--gold-light: #FFE5A0  /* Light gold */
--gold-dark: #E6C75F   /* Dark gold */
--gold-darker: #C9A961 /* Darker gold */
--gold-darkest: #B89544 /* Darkest gold */

/* Background */
--background: #000000   /* Pure black */
```

## 🔧 Configuration

### Base Path (for subdirectory hosting)

If hosting in a subdirectory, update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-subdirectory/',
  // ... other config
});
```

### API Integration

For production, replace mock data with real API calls:

1. Create environment variables for API endpoints
2. Implement authentication token handling
3. Add error handling and loading states
4. Set up proper CORS configuration

## ⚠️ Important Notes

### Legal Compliance

This is a **demonstration website**. Before going live with real gambling services:

- ✅ Obtain proper gambling licenses for your jurisdiction
- ✅ Implement age verification (18+/21+)
- ✅ Add responsible gambling tools
- ✅ Include privacy policy and terms of service
- ✅ Ensure compliance with local gambling laws
- ✅ Implement proper KYC (Know Your Customer) procedures
- ✅ Set up secure payment processing

### Security

- 🔒 Never commit API keys or credentials to the repository
- 🔒 Use environment variables for sensitive data
- 🔒 This is currently a frontend-only demo
- 🔒 Implement proper backend authentication for production
- 🔒 Use HTTPS in production
- 🔒 Implement rate limiting and DDoS protection

### Responsible Gaming

Include features like:
- Self-exclusion options
- Deposit limits
- Time reminders
- Reality checks
- Links to gambling addiction resources

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For questions or support:
- Email: support@vam88.net
- Live Chat: Available 24/7 on the website

## 🌟 Acknowledgments

- Design inspired by professional casino websites
- UI components from shadcn/ui
- Icons from Lucide
- Images from Unsplash

---

**Live Demo**: [View on GitHub Pages](https://YOUR-USERNAME.github.io/vam88-casino/)

**Made with ❤️ for the online gaming community**
