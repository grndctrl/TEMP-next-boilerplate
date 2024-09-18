import { link } from '@/payload/fields/link'
import { GlobalConfig } from 'payload'

const Navigation: GlobalConfig = {
  slug: 'navigation',
  typescript: {
    interface: 'NavigationGlobal',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      maxRows: 8,
      fields: [link()],
    },
  ],
}

export default Navigation
