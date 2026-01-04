import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    blur?: 'sm' | 'md' | 'lg';
    border?: boolean; // Defaults to true via CSS class
}

export default function GlassCard({
    children,
    className = '',
    blur = 'md'
}: GlassCardProps) {

    const blurClass = {
        sm: 'backdrop-blur-sm',
        md: 'backdrop-blur-2xl',
        lg: 'backdrop-blur-3xl'
    }[blur];

    return (
        <div className={`glass-card ${blurClass} ${className}`}>
            {children}
        </div>
    );
}
