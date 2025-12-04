// Performance configuration for animations
// Adjust these values to balance visual effects with performance

export const performanceConfig = {
    // Reduce motion for better performance
    reduceMotion: false, // Set to true to disable heavy animations

    // Animation settings
    animations: {
        // Viewport detection settings
        viewport: {
            once: true, // Only animate once when scrolling into view
            amount: 0.3, // Trigger when 30% of element is visible (was 0.2)
            margin: '0px', // No margin offset
        },

        // Stagger timing (delay between child animations)
        stagger: {
            fast: 0.05,
            normal: 0.1,
            slow: 0.15,
        },

        // Duration settings
        duration: {
            fast: 0.2,
            normal: 0.3,
            slow: 0.5,
        },
    },

    // Background effects
    effects: {
        // Disable heavy blur effects on mobile
        disableBlurOnMobile: true,

        // Reduce floating animations
        reduceFloatingAnimations: true,

        // Disable beam effects (can be heavy)
        disableBeams: false,

        // Simplify grid background
        simplifyGrid: false,
    },
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check if device is mobile
export const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
};

// Get optimized viewport settings
export const getViewportSettings = () => {
    return {
        once: true,
        amount: isMobile() ? 0.1 : 0.2, // Less strict on mobile
    };
};
