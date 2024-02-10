import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primaryColor: '#fed000',
			},
			screens: {
				'3xl': '1920px',
			},
			backgroundImage: {
				pattern: "url('/images/pattern.jpg')",
			},
		},
	},
	plugins: [],
};
export default config;
