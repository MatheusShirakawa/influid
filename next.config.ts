import createNextIntlPlugin from "next-intl/plugin"
import type { NextConfig } from "next"

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	// output: 'export',
	images: { unoptimized: true }
}

// module.exports = nextConfig
export default withNextIntl(nextConfig)
