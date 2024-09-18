import { Field, GroupField, TextField } from 'payload'

export function link(): GroupField {
  const groupField: GroupField = {
    type: 'group',
    name: 'link',
    fields: [
      {
        type: 'text',
        name: 'text',
        label: 'Text to display',
      },
      {
        type: 'radio',
        name: 'type',
        label: 'Link Type',
        required: true,
        admin: {
          layout: 'horizontal',
          description: 'Choose between entering a custom text URL or linking to another document.',
        },
        defaultValue: 'custom',
        options: [
          {
            value: 'custom',
            label: 'Custom URL',
          },
          {
            value: 'internal',
            label: 'Internal Link',
          },
        ],
      },
      {
        type: 'text',
        name: 'url',
        label: 'Enter a URL',
        defaultValue: 'https://',
        required: true,
        admin: {
          condition: (data, siblingData, { user }) => {
            if (siblingData.type === 'custom') {
              return true
            }
            return false
          },
        },
      },
      {
        type: 'relationship',
        relationTo: ['pages'],
        name: 'doc',
        label: 'Choose a document to link to',
        required: true,
        admin: {
          condition: (data, siblingData, { user }) => {
            if (siblingData.type === 'internal') {
              return true
            }
            return false
          },
        },
      },
      {
        type: 'checkbox',
        name: 'newTab',
        label: 'Open in new tab',
        admin: {
          style: {
            alignSelf: 'flex-end',
            alignItems: 'flex-end',
            display: 'flex',
          },
        },
      },
    ],
  }

  return groupField
}
