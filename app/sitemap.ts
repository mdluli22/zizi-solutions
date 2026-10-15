import { MetadataRoute } from 'next'
import { siteUrl } from '../lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/work", "/contact", "/services/web-design-dev", "/services/analytics", "/services/ai-integration", "/privacy-policy", "/terms-of-service"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path.startsWith('/services/') ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : path.startsWith('/services/') ? 0.8 : 0.5,
  }))
}
