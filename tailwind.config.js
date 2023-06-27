/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				peekaboo: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
			animation: {
				peekaboo: "peekaboo 1s ease-in-out",
			},
			colors: {
				lightprimary: "#FDF7F2",
				dirtygray: "#A8A29C",
				lightbrown: "#846D62",
			},
		},
	},
	plugins: [],
};
