import { GlobalConfig } from 'payload'
import { link } from '@/payload/fields/link'
import {
  BoldFeature,
  HTMLConverterFeature,
  ItalicFeature,
  LinkFeature,
  ParagraphFeature,
  UnorderedListFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical'

const Footer: GlobalConfig = {
  slug: 'footer',
  typescript: {
    interface: 'FooterGlobal',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'socials',
      type: 'group',
      fields: [
        {
          name: 'instagram',
          type: 'text',
        },
        {
          name: 'linkedin',
          type: 'text',
        },
        {
          name: 'facebook',
          type: 'text',
        },
        {
          name: 'x',
          type: 'text',
        },
      ],
    },
    {
      name: 'opening',
      type: 'group',
      fields: [
        {
          name: 'richText',
          type: 'richText',
          editor: lexicalEditor({
            features: () => [
              ParagraphFeature(),
              ItalicFeature(),
              BoldFeature(),
              UnorderedListFeature(),
              LinkFeature({
                enabledCollections: ['pages'],
              }),
              HTMLConverterFeature(),
            ],
          }),
          localized: true,
        },
        lexicalHTML('richText', {
          name: 'richText_html',
        }),
      ],
    },
    {
      name: 'holiday',
      type: 'group',
      fields: [
        {
          name: 'richText',
          type: 'richText',
          editor: lexicalEditor({
            features: () => [
              ItalicFeature(),
              BoldFeature(),
              UnorderedListFeature(),
              LinkFeature({
                enabledCollections: ['pages'],
              }),
              HTMLConverterFeature(),
            ],
          }),
          localized: true,
        },
        lexicalHTML('richText', {
          name: 'richText_html',
        }),
      ],
    },
    {
      name: 'usefulInfo',
      type: 'array',
      localized: true,
      fields: [link()],
    },
    {
      name: 'external',
      type: 'group',
      fields: [
        {
          name: 'michelin',
          type: 'text',
        },
        {
          name: 'allianceGastronomique',
          type: 'text',
        },
        {
          name: 'wereSmart',
          label: "We're Smart",
          type: 'text',
        },
        {
          name: 'gaultMillau',
          label: 'Gault & Millau',
          type: 'text',
        },
      ],
    },
  ],
}

export default Footer
