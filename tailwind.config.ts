import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
	darkMode: ['class'],
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			smin: '1px',
			smax: '480px',
		},
		extend: {
			backgroundImage: {
				back1: "url('/back9.jpg')",
				back2: "url('/headerBg.gif')",
				back3: "url('/back8.jpg')",
				back4: "url('/back4.gif')",
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				transparent: 'transparent',
				current: 'currentColor',
				gray: colors.gray,
				red: colors.red,
				blue: colors.sky,
				yellow: colors.amber,
				op: 'rgba(100,100,100,0.5',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground':
						'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground':
						'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'slide-in-right': {
					'0%': {
						visibility: 'visible',
						transform: 'translate3d(100%, 0, 0)',
					},
					'100%': {
						transform: 'translate3d(0, 0, 0)',
					},
				},
				fadeIn: {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-in',
				'accordion-down':
					'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-in-right':
					'slide-in-right 0.5s ease-in ',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;
