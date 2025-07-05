# 🚗 Maruti Petroleum - Premium Indian Oil Services

A modern, responsive website for Maruti Petroleum, a premium fuel station located in Devgana, Sihor, Bhavnagar, Gujarat. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring beautiful animations and a seamless user experience.

![Maruti Petroleum](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)

## 🌟 Features

### 🎨 Modern Design
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Beautiful Animations**: Smooth scroll animations and interactive elements
- **Gradient Backgrounds**: Modern gradient designs with floating elements
- **Professional UI**: Clean, modern interface with excellent UX

### ⛽ Fuel Services
- **Premium Petrol**: ₹95.93/litre - High-octane performance fuel
- **Premium Diesel**: ₹91.60/litre - Power and efficiency for all vehicles
- **Engine Oil**: Premium lubricants for optimal engine performance
- **Quality Assurance**: All fuels meet Indian Oil's stringent standards

### 🏪 Business Features
- **24×7 Service**: Round-the-clock availability
- **Strategic Location**: Conveniently located in Devgana, Sihor, Bhavnagar
- **Modern Infrastructure**: State-of-the-art facilities
- **Transparent Pricing**: Competitive rates with clear billing

### 📞 Contact & Communication
- **Contact Form**: Interactive form with email integration
- **Direct Contact**: Phone and email support
- **Location Services**: Google Maps integration with directions
- **Real-time Status**: Live operating hours and availability

## 🛠️ Technology Stack

### Frontend
- **Next.js 15.3.2**: React framework with App Router
- **React 19.0.0**: Latest React with concurrent features
- **TypeScript 5.0**: Type-safe development
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Framer Motion 12.11.1**: Smooth animations and transitions

### UI Components
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library
- **Class Variance Authority**: Component variant management
- **Tailwind Merge**: Utility class merging

### Backend & Services
- **Nodemailer**: Email service integration
- **Gmail SMTP**: Email delivery service
- **Next.js API Routes**: Serverless API endpoints

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📁 Project Structure

```
maruti-petroleum/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable UI components
│   │   └── ui/                 # Base UI components
│   ├── componts/               # Main page components
│   │   ├── HeroSection.tsx     # Hero section with CTA
│   │   ├── FeaturedCources.tsx # Fuel products showcase
│   │   ├── Stickyscroll.tsx    # Interactive fuel details
│   │   ├── Loacation.tsx       # Location and contact info
│   │   ├── Footer.tsx          # Footer with contact form
│   │   └── ui/                 # Custom UI components
│   ├── lib/                    # Utility functions
│   └── pages/                  # API routes
│       └── api/
│           └── send-email.ts   # Email API endpoint
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts              # Next.js configuration
└── package.json                # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd maruti-petroleum
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Email Configuration

To enable the contact form functionality:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. **Update the API configuration** in `src/pages/api/send-email.ts`

## 📱 Pages & Components

### Main Sections

1. **Hero Section** (`HeroSection.tsx`)
   - Company branding and value proposition
   - Call-to-action buttons
   - Animated background elements

2. **Fuel Products** (`FeaturedCources.tsx`)
   - Product showcase with pricing
   - Feature highlights
   - Interactive cards with hover effects

3. **Interactive Experience** (`Stickyscroll.tsx`)
   - Sticky scroll reveal animations
   - Detailed product information
   - Visual storytelling

4. **Location & Contact** (`Loacation.tsx`)
   - Google Maps integration
   - Contact information
   - Operating hours
   - Directions and accessibility

5. **Footer & Contact Form** (`Footer.tsx`)
   - Contact form with email integration
   - Company information
   - Social links and legal pages

## 🎨 Customization

### Styling
- **Colors**: Modify `tailwind.config.ts` for brand colors
- **Fonts**: Update font families in the configuration
- **Animations**: Customize animation classes and durations

### Content
- **Fuel Prices**: Update prices in component data
- **Contact Information**: Modify phone, email, and address
- **Location**: Update Google Maps embed URL

### Features
- **Email Integration**: Configure SMTP settings
- **Analytics**: Add Google Analytics or other tracking
- **SEO**: Update meta tags and structured data

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on push to main branch

### Other Platforms
- **Netlify**: Configure build settings for Next.js
- **AWS Amplify**: Use Next.js build configuration
- **Self-hosted**: Build and serve static files

### Build Commands
```bash
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📞 Contact Information

**Maruti Petroleum**
- 📍 **Address**: Devgana, Sihor, Bhavnagar, Gujarat - 364240
- 📞 **Phone**: +91 73834 85353
- 📧 **Email**: marutipetroleumksk@gmail.com
- 🕒 **Hours**: 24×7 Service Available

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Indian Oil Corporation** for quality fuel standards
- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons

---

**Built with ❤️ for Maruti Petroleum**

*Your trusted partner for premium fuel services in Devgana, Sihor, Bhavnagar*
