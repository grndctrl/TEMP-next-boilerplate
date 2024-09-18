import { FieldHook } from 'payload'
import slugify from 'slugify'

export function formatSlug(value: string) {
  return slugify(value, { lower: true, trim: true })
}

export const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ operation, value, originalDoc, data }) => {
    if (operation === 'create' || value === undefined || value === '') {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback]

      if (fallbackData && typeof fallbackData === 'string') {
        return formatSlug(fallbackData)
      }
    }

    if (typeof value === 'string') {
      return formatSlug(value)
    }

    return value
  }
