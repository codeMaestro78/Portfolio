# Devarshi's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and experience in a clean, interactive interface.

## 🚀 Features

- ⚡️ Built with Next.js 14 (App Router)
- 🎨 Styled with Tailwind CSS
- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🛠 TypeScript for type safety

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧩 Code Examples

### Hero Component
```tsx
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Devarshi</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer & UI/UX Enthusiast
        </p>
        <Button>View My Work</Button>
      </motion.div>
    </section>
  );
};
```

### Tailwind Configuration
```js
// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
      },
    },
  },
  plugins: [],
};
```

## 📂 Project Structure

```
.
├── app/                  # App router
│   ├── layout.tsx        # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # Reusable components
│   ├── ui/              # UI components
│   └── sections/        # Page sections
├── config/              # App configuration
├── lib/                 # Utility functions
└── public/              # Static assets
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Devarshi