import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  typescript: {
    interface: 'MediaCollection',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
  ],
  upload: {
    staticDir: 'uploads/media',
    mimeTypes: ['image/*', 'video/*'],
    imageSizes: [
      {
        name: 'lg',
        width: 1200,
        position: 'centre',
        withoutEnlargement: true,
      },
      {
        name: 'xl',
        width: 2400,
        position: 'centre',
        withoutEnlargement: true,
      },
      {
        name: 'xs',
        width: 12,
        position: 'centre',
      },
    ],
  },
}
