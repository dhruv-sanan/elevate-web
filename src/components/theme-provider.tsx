'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Get saved theme or detect system preference
        const savedTheme = localStorage.getItem('elevatewebTheme') as Theme;
        // Default to dark if no saved preference
        const initialTheme = savedTheme || 'dark';

        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);

        // Ensure Tailwind class mode works
        if (initialTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';

        // Add transitioning class to prevent jarring transitions
        document.body.classList.add('theme-transitioning');

        setTheme(newTheme);
        localStorage.setItem('elevatewebTheme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);

        // Ensure Tailwind class mode works
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Remove transitioning class after transition completes
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 300);
    };

    // Prevent flash of unstyled content
    // We must provide the context even during SSR/hydration to avoid errors in consumers like Navbar

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
            {/* Script to avoid FOUC could be injected here if we were doing custom script injection, 
                but for now we rely on the effect. To fix hydration mismatch on icons, 
                we can handle that in the components or accept the flicker/warning. */}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
};
