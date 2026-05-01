import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
				popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
				primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
				secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
				muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
				accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
				destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				navy: {
					DEFAULT: '#0F172A',
					light: '#1E293B',
					dark: '#020617',
				},
				teal: {
					DEFAULT: '#0D9488',
					light: '#14B8A6',
					dark: '#0F766E',
				},
				silver: {
					DEFAULT: '#64748B',
					light: '#94A3B8',
				},
				ink: {
					DEFAULT: '#0F172A',
					mid: '#1E293B',
					light: '#334155',
				},
				mint: {
					DEFAULT: '#F0FDF9',
					dark: '#CCFBF1',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
			},
			backgroundImage: {
				'navy-gradient': 'linear-gradient(135deg, #081A1A 0%, #0D2B2B 50%, #1E4545 100%)',
				'teal-gradient': 'linear-gradient(135deg, #0EA5A0, #0A7A76)',
				'hero-radial': 'radial-gradient(ellipse at 60% 50%, rgba(14,165,160,0.08) 0%, transparent 70%)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
