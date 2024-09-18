import {
  BoldFeature,
  HTMLConverterFeature,
  HeadingFeature,
  ItalicFeature,
  FixedToolbarFeature,
  LinkFeature,
  ParagraphFeature,
  UnorderedListFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'
import { link } from '../fields/link'

export const RichText: Block = {
  slug: 'richText',
  interfaceName: 'richTextBlock',
  imageURL: '/icons/richText.svg',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: () => [
          HeadingFeature({
            enabledHeadingSizes: ['h3'],
          }),
          ItalicFeature(),
          BoldFeature(),
          ParagraphFeature(),
          UnorderedListFeature(),
          LinkFeature({
            enabledCollections: ['pages'],
          }),
          HTMLConverterFeature(),
          FixedToolbarFeature(),
        ],
      }),
      localized: true,
    },
    lexicalHTML('richText', {
      name: 'richText_html',
    }),
  ],
}
