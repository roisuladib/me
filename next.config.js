/** @type {import('next').NextConfig} */
const nextConfig = {
   poweredByHeader: false,
   devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-right',
   },
   logging: {
      fetches: {
         fullUrl: true,
      },
   },
   experimental: {
      typedRoutes: true,
   },
};

module.exports = nextConfig;
