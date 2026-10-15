import ServicePage from '../../../components/ServicePage'
import { services } from '../../../lib/services'
import { pageMetadata } from '../../../lib/seo'

const service = services[0]
export const metadata = pageMetadata(service.title, service.metaDescription, service.path)

export default function Page() {
  return <ServicePage service={service} />
}
