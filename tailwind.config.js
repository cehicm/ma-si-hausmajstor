/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				topTransform: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(30%)" },
				},
				rightTransform: {
					"0%, 100%": { transform: "translateX(0)" },
					"50%": { transform: "translateX(-30%)" },
				},
				peekaboo: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0%)" },
				},
				peekabooRight: {
					"0%": { transform: "translateX(105%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
			animation: {
				rightTransform: "rightTransform 1s ease-in-out infinite",
				peekaboo: "peekaboo 1s ease-in-out",
				peekabooRight: "peekabooRight 1s ease-in-out",
			},
		},
	},
	plugins: [],
};
