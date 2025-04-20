import createNextIntlPlugin from "next-intl/plugin"
import type { NextConfig } from "next"

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	/* config options here */
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			// use: ['@svgr/webpack', 'url-loader'],
			use:[{ loader: '@svgr/webpack', options: { icon: true } }, 'url-loader'],
		})

		// config.resolve.fallback = { fs: false }

		return config
	},
}

export default withNextIntl(nextConfig)
