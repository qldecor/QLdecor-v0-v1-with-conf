import createNextIntlPlugin from 'next-intl/plugin'; 


/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
  }
}
 
const withNextIntl = createNextIntlPlugin('./app/i18n/request.tsx');
export default withNextIntl(nextConfig);