import type { MetadataRoute } from 'next';

// Update routes to be disallowed
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        // disallow: ['/dashboard/', '/api/', '/adopt/profiles/[dogId]'],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/'],
        // disallow: ['/dashboard/', '/api/', '/adopt/profiles/[dogId]'],
      },
    ],
    // host: 'https://www.onebyone.nz',
  };
}
