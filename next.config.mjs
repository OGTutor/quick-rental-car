/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.imagin.studio.com',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
