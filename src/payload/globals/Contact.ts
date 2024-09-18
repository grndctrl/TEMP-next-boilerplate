import { GlobalConfig } from 'payload'

const Contact: GlobalConfig = {
  slug: 'contact',
  typescript: {
    interface: 'ContactGlobal',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'contact',
      type: 'group',
      fields: [
        {
          name: 'address',
          type: 'textarea',
        },
        {
          name: 'phone',
          type: 'text',
        },
        {
          name: 'email',
          type: 'email',
        },
      ],
    },
  ],
}

export default Contact
