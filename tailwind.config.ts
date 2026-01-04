import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'navbar-glass': 'var(--navbar-bg-glass)',
        'navbar-border': 'var(--navbar-border)',
        'glass-bg': 'var(--glass-bg)',
        'glass-border': 'var(--glass-border)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
      },
      boxShadow: {
        'navbar': 'var(--navbar-shadow)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        'glass-inset': '0 0 0 1px rgba(255, 255, 255, 0.1) inset',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right-blur': 'slideInRightBlur 1s ease-out forwards',
        'scale-fade': 'scaleFade 0.6s ease-out forwards',
        'pop-in': 'popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'marquee': 'marquee 30s linear infinite',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRightBlur: {
          '0%': { opacity: '0', transform: 'translateX(32px)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateX(0)', filter: 'blur(0)' },
        },
        scaleFade: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
