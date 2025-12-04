import React from 'react';

interface OptimizedGridBackgroundProps {
    simplified?: boolean;
}

export const OptimizedGridBackground: React.FC<OptimizedGridBackgroundProps> = ({
    simplified = false
}) => {
    if (simplified) {
        // Simplified version with no animations
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgb(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
            </div>
        );
    }

    // Full version with animations (use sparingly)
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgb(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />

            {/* Static gradient spots (no animation for better performance) */}
            <div
                className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            />
            <div
                className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            />
        </div>
    );
};
