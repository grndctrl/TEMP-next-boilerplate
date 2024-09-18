import { CheckboxField, TextField } from 'payload'
import { formatSlugHook } from './formatSlug'

type Slug = {
  fromField: string
}

export function slug<Slug>(fromField = 'title') {
  const isLockedField: CheckboxField = {
    type: 'checkbox',
    name: 'isLocked',
    defaultValue: true,
    admin: {
      hidden: true,
      disableListColumn: true,
      disableListFilter: true,
      disableBulkEdit: true,
    },
  }

  const textField: TextField = {
    type: 'text',
    name: 'slug',
    hooks: {
      beforeValidate: [formatSlugHook(fromField)],
    },
    admin: {
      position: 'sidebar',
      disableListColumn: true,
      disableListFilter: true,
      disableBulkEdit: true,
      components: {
        Field: {
          path: '@/payload/fields/slug/Component',
          exportName: 'Component',
          clientProps: {
            fromField,
            isLockedFieldPath: isLockedField.name,
          },
        },
      },
    },
  }

  return [textField, isLockedField]
}
