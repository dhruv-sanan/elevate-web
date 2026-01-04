import React from 'react';
import Link from 'next/link';

interface GlassButtonProps {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string; // Allow custom classes
    target?: string;
    rel?: string;
}

export default function GlassButton({
    variant = 'primary',
    size = 'md',
    icon,
    children,
    href,
    onClick,
    className = '',
    target,
    rel
}: GlassButtonProps) {

    // Base classes always applied
    const baseClasses = "flex items-center justify-center gap-2 font-medium transition-all cursor-pointer select-none";

    // Variant styles
    const variantStyles = {
        primary: "glass-button-primary",
        secondary: "glass-button text-text-primary hover:text-accent",
        ghost: "backdrop-blur-sm bg-transparent border border-transparent hover:bg-glass-bg text-text-secondary hover:text-text-primary"
    };

    // Size styles
    const sizeStyles = {
        sm: "h-9 px-3 text-xs rounded-lg",
        md: "h-11 px-4 text-sm rounded-xl",
        lg: "h-14 px-6 text-base rounded-2xl"
    };

    const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses} onClick={onClick} target={target} rel={rel}>
                {icon && <span className="flex-shrink-0">{icon}</span>}
                {children}
            </Link>
        );
    }

    // Handle 'a' tag behavior if href is external/absolute but Link usually handles it? 
    // Next.js Link handles internal well. For external, usually just <a>.
    // Assuming href is internal unless handled by parent. 
    // Actually, for external links passed to href, Next Link works but might be slower? 
    // If target is blank, maybe just use <a> logic? 
    // For simplicity, using Link for all hrefs.

    return (
        <button onClick={onClick} className={combinedClasses}>
            {icon && <span className="flex-shrink-0">{icon}</span>}
            {children}
        </button>
    );
}
