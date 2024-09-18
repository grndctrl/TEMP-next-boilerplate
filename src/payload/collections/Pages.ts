import type { CollectionConfig } from 'payload'
import { slug } from '../fields/slug'
import { link } from '../fields/link'
// import { isAuthenticated } from '../access'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { RichText } from '@/payload/blocks/RichText'
import { Gallery } from '@/payload/blocks/Gallery'

export const Pages: CollectionConfig = {
  slug: 'pages',
  typescript: {
    interface: 'PagesCollection',
  },
  versions: {
    drafts: true,
    maxPerDoc: 10,
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    // read: isAuthenticated,
  },
  hooks: {
    afterChange: [
      // revalidatePage(
      //   process.env.PAYLOAD_PUBLIC_NEXT_URL,
      //   process.env.PAYLOAD_API_SECRET
      // ),
    ],
    beforeValidate: [
      // generateSeo('title', 'Lorem Ipsum')
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'headerMedia',
      type: 'upload',
      relationTo: 'media',
      localized: true,
    },
    ...slug(),
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              blocks: [RichText, Gallery],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
  ],
}
