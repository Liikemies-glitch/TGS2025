# TGS2025 - Modern Website

A modern, responsive website built with Next.js 15, React 19, Tailwind CSS, and advanced UI components. Features a complete landing page with hero section, problem/solution presentation, and team showcase.

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - App Router with Turbopack for fast development
- **React 19** - Latest React features and optimizations
- **TypeScript** - Full type safety throughout the project
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Radix UI** - Unstyled, accessible UI primitives
- **Framer Motion** - Smooth animations and transitions

### UI Components & Libraries
- **Lucide React** - Beautiful, customizable icons
- **Tabler Icons** - Additional icon set
- **next-themes** - Dark/light mode support
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Intelligent Tailwind class merging

## 🛠️ Development Setup

### Requirements
- Node.js 18.17 or newer
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tgs2025-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
tgs2025-website/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── demo/              # Demo pages
│   │   ├── globals.css        # Global styles with custom CSS variables
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Homepage with all sections
│   │   └── favicon.ico        # Site favicon
│   ├── components/
│   │   ├── blocks/            # Page section components
│   │   │   ├── hero-section-4.tsx     # Advanced hero with animations
│   │   │   ├── problem-section.tsx    # Problem presentation
│   │   │   ├── solution-section.tsx   # Solution showcase
│   │   │   ├── team-section.tsx       # Team member cards
│   │   │   └── footer.tsx             # Site footer
│   │   ├── ui/                # shadcn/ui and custom components
│   │   │   ├── animated-group.tsx     # Animated component groups
│   │   │   ├── animated-testimonials.tsx # Testimonial carousel
│   │   │   ├── announcement-button.tsx # Animated announcement
│   │   │   ├── bento-grid.tsx         # Modern grid layout
│   │   │   ├── glowing-effect.tsx     # Glow animations
│   │   │   ├── infinite-slider.tsx    # Infinite scrolling slider
│   │   │   ├── progressive-blur.tsx   # Blur effects
│   │   │   ├── shimmer-button.tsx     # Shimmer animations
│   │   │   └── [other ui components]
│   │   ├── illustrations/     # SVG illustrations and graphics
│   │   ├── navigation.tsx     # Main navigation component
│   │   ├── theme-provider.tsx # Theme context provider
│   │   └── theme-toggle.tsx   # Dark/light mode toggle
│   └── lib/
│       └── utils.ts           # Utility functions and helpers
├── public/                    # Static assets
├── components.json            # shadcn/ui configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── next.config.ts             # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🎨 Components

The project uses an extensive collection of modern UI components:

### Core UI Components (shadcn/ui)
- `Button` - Multiple variants with animations
- `Card` - Content containers with hover effects
- `Input` & `Textarea` - Form inputs with validation styles
- `Label` - Accessible form labels
- `Badge` - Status and category indicators
- `Avatar` - User profile images with fallbacks
- `Checkbox` & `Switch` - Form controls
- `Tooltip` - Contextual information overlays

### Advanced Components
- `AnimatedGroup` - Staggered animations for groups
- `AnimatedTestimonials` - Carousel with smooth transitions
- `AnnouncementButton` - Eye-catching call-to-action
- `BentoGrid` - Modern grid layout system
- `GlowingEffect` - Dynamic glow animations
- `InfiniteSlider` - Continuous scrolling content
- `ProgressiveBlur` - Gradient blur effects
- `ShimmerButton` - Loading state animations

### Page Sections
- `HeroSection` - Advanced hero with multiple animations
- `ProblemSection` - Problem statement with visual elements
- `SolutionSection` - Solution presentation
- `TeamSection` - Team member showcase
- `Footer` - Complete site footer with links

### Adding New Components

```bash
npx shadcn@latest add [component]
```

Examples:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add form
npx shadcn@latest add table
npx shadcn@latest add dropdown-menu
```

## 🎯 Features

### ✅ Implemented
- **Responsive Design** - Mobile-first approach with all breakpoints
- **Dark/Light Mode** - Complete theme system with smooth transitions
- **Advanced Animations** - Framer Motion powered interactions
- **TypeScript** - Full type safety and IntelliSense
- **SEO Optimized** - Meta tags, structured data, and performance
- **Accessibility** - WCAG compliant components
- **Modern Gradients** - Custom CSS gradient system
- **Smooth Scrolling** - Enhanced navigation experience
- **Performance Optimized** - Next.js 15 with Turbopack
- **Icon System** - Multiple icon libraries integrated
- **Component Variants** - Flexible styling system

### 🎨 Design System
- **Custom Color Palette** - Carefully crafted color scheme
- **Typography Scale** - Consistent text sizing and spacing
- **Animation Library** - Reusable animation patterns
- **Component Theming** - CSS variables for easy customization
- **Responsive Breakpoints** - Mobile, tablet, desktop optimized

## 🚀 Production Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect Vercel account to GitHub repository
3. Deploy automatically with optimizations

### Manual Build
```bash
npm run build
npm start
```

### Build Optimizations
- **Turbopack** - Fast development builds
- **Image Optimization** - Next.js automatic image optimization
- **Bundle Analysis** - Optimized package imports
- **Code Splitting** - Automatic route-based splitting

## 🔧 Configuration

### Tailwind CSS
Configuration in `tailwind.config.ts` includes:
- **Custom Color System** - Extended color palette
- **Dark Mode Support** - Class-based theme switching
- **Custom Animations** - Tailwind animation extensions
- **Responsive Design** - Mobile-first breakpoints
- **Component Variants** - CVA integration

### TypeScript
Configuration in `tsconfig.json` features:
- **Path Mapping** - `@/` aliases to `src/` directory
- **Strict Mode** - Enhanced type checking
- **Next.js Optimizations** - Framework-specific settings
- **Modern Target** - Latest ECMAScript features

### Next.js
Configuration in `next.config.ts` includes:
- **React Strict Mode** - Development warnings
- **Image Domains** - Remote image optimization
- **Package Optimization** - Selective imports for better performance
- **Turbopack** - Fast refresh and builds

## 📝 Development Guidelines

### Code Style
- **TypeScript First** - All code written in TypeScript
- **Component Composition** - Reusable, composable components
- **Functional Programming** - Prefer functions over classes
- **ESLint Compliance** - Automated code quality checks
- **Naming Conventions** - PascalCase components, camelCase functions

### File Organization
- **Feature-based** - Group related components together
- **Index Exports** - Clean import statements
- **Type Definitions** - Co-located with components
- **Asset Organization** - Logical grouping in public/

### Commit Messages
- `feat: new feature implementation`
- `fix: bug fixes and corrections`
- `docs: documentation updates`
- `style: code formatting and style`
- `refactor: code restructuring`
- `perf: performance improvements`
- `test: testing additions`

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Workflow
- **Feature Branches** - Separate branches for each feature
- **Code Review** - All changes reviewed before merge
- **Testing** - Ensure all features work across devices
- **Documentation** - Update docs with new features

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 📞 Contact

- **Email:** info@tgs2025.fi
- **GitHub:** [github.com/tgs2025](https://github.com/tgs2025)
- **Website:** [tgs2025.fi](https://tgs2025.fi)

---

Built with ❤️ using Next.js 15, React 19 & Modern Web Technologies
