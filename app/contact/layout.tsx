import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata("Contact Zizi Solutions", "Discuss your website, software, branding, analytics or AI project with Zizi Solutions. Email admin@zizisolutions.co.za or call +27 68 154 5803.", "/contact")

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
