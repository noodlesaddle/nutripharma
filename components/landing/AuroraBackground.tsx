import React from 'react';

export const AuroraBackground: React.FC = () => {
    return (
        <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            aria-hidden="true"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white" />
            <div
                className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-radial from-emerald-200 via-emerald-100 to-transparent opacity-50 blur-3xl"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.4) 50%, transparent 100%)",
                }}
            />
            <div
                className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-radial from-emerald-200 via-emerald-100 to-transparent opacity-50 blur-3xl"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.4) 50%, transparent 100%)",
                }}
            />
        </div>
    );
};
