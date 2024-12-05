/** @type {import('tailwindcss').Config} */
const daisyuiColorObj = require("daisyui/src/theming/index.js")

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			'sans': ['Poppins', 'Inter', 'sans-serif'],
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: daisyuiColorObj['base-100'],
				foreground: daisyuiColorObj['base-content'],
				card: {
					DEFAULT:  daisyuiColorObj['base-100'],
					foreground: daisyuiColorObj['base-content'],
				},
				popover: {
					DEFAULT: daisyuiColorObj['base-100'],
					foreground: daisyuiColorObj['base-content'],
				},
				primary: {
					DEFAULT: daisyuiColorObj['primary'],
					foreground: daisyuiColorObj['primary-content'],
				},
				secondary: {
					DEFAULT: daisyuiColorObj['secondary'],
					foreground: daisyuiColorObj['secondary-content'],
				},
				muted: {
					DEFAULT: daisyuiColorObj['base-300'],
					foreground: daisyuiColorObj['base-content'],
				},
				accent: {
					DEFAULT: daisyuiColorObj['accent'],
					foreground: daisyuiColorObj['accent-content'],
				},
				destructive: {
					DEFAULT: daisyuiColorObj['error'],
					foreground: daisyuiColorObj['error-content'],
				},
				border: "var(--fallback-bc,oklch(var(--bc)/0.2))",
				input: daisyuiColorObj['base-content'],
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: daisyuiColorObj['base-300'],
					foreground: daisyuiColorObj['base-content'],
					primary: daisyuiColorObj['primary'],
					'primary-foreground': daisyuiColorObj['primary-content'],
					accent: daisyuiColorObj['base-100'],
					'accent-foreground': daisyuiColorObj['base-content'],
					border: daisyuiColorObj['base-content'],
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				"caret-blink": "caret-blink 1.25s ease-out infinite",
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("daisyui")],
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",
			"dim",
			"nord",
			"sunset",
		],
	},
}
