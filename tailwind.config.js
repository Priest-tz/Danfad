// tailwind.config.js

export const content = [
	"./pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./components/**/*.{js,ts,jsx,tsx,mdx}",
	"./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
	extend: {
		colors: {
			"custom-purple": "#9914eb",
			"custom-blue-dark": "#3e49b5",
			"custom-blue-light": "#2aaff4",
			"custom-purple-dark": "#520faa",
		},
		fontFamily: {
			figtree: ["Figtree", "sans-serif"],
		},
		backgroundImage: {
			'custom-gradient': 'linear-gradient(to right, #27cefb, #ffffff)',
		},
	},
};
export const variants = {};
export const plugins = [];
