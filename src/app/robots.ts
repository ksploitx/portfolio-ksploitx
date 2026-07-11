import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Explicitly allow icon paths for crawlers
      // (though allow: '/' covers this, being explicit doesn't hurt)
    },
    // sitemap: 'https://ksploitx.pages.dev/sitemap.xml',
  };
}
