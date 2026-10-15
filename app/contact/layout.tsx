import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata("Contact Zizi Solutions", "Discuss your website and SEO, business automation or data reporting project with Zizi Solutions. Email admin@zizisolutions.co.za or call +27 78 189 7780.", "/contact")

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
