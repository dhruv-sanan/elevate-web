import React from 'react';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    error?: string;
    containerClassName?: string;
}

export default function GlassInput({
    icon,
    error,
    className = '',
    containerClassName = '',
    ...props
}: GlassInputProps) {
    return (
        <div className={`relative ${containerClassName}`}>
            {icon && (
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                    {icon}
                </div>
            )}
            <input
                className={`
          w-full h-12 bg-glass-bg backdrop-blur-md border border-glass-border rounded-xl px-4 
          text-text-primary placeholder-text-muted/50 transition-all duration-300
          focus:outline-none focus:border-accent/50 focus:ring-4 focus:ring-accent/10
          ${icon ? 'pl-12' : ''}
          ${error ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/10' : ''}
          ${className}
        `}
                {...props}
            />
            {error && (
                <p className="mt-1 text-xs text-red-500 ml-1">{error}</p>
            )}
        </div>
    );
}
