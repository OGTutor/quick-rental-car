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
				ms: '450px',
				'3xl': '1920px',
			},
			backgroundImage: {
				pattern: "url('/images/pattern.jpg')",
				patternSecond: "url('/images/patternSecond.jpg')",
			},
		},
	},
	plugins: [],
};
export default config;
