import React from 'react';

export const GridBackground: React.FC = () => {
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

            {/* Radial gradient spots */}
            <div
                className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
            />
            <div
                className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
            />
            <div
                className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
            />
        </div>
    );
};
