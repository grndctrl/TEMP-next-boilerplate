'use client'

import {
  TextInput,
  useField,
  useFieldProps,
  FieldLabel,
  Button,
  useFormFields,
} from '@payloadcms/ui'
import { Lock, LockOpen, LockSimple, LockSimpleOpen } from '@phosphor-icons/react'
import { TextFieldClientProps } from 'payload'
import { useCallback, useEffect } from 'react'
import { formatSlug } from './formatSlug'

type ComponentProps = {
  fromField: string
  isLockedFieldPath: string
} & TextFieldClientProps

export function Component({ field, fromField, isLockedFieldPath }: ComponentProps) {
  const { path } = useFieldProps()

  const { value, setValue } = useField<string>({ path })
  const { value: isLocked, setValue: setIsLocked } = useField<boolean>({
    path: isLockedFieldPath,
  })

  const fromFieldValue = useFormFields(([fields, discpatch]) => {
    if (fields) {
      return fields[fromField].value as string
    }
    return ''
  })

  useEffect(() => {
    if (isLocked) {
      if (fromFieldValue) {
        setValue(formatSlug(fromFieldValue))
      } else {
        if (value !== '') setValue('')
      }
    }
  }, [fromFieldValue, isLocked, setValue, value])

  return (
    <div>
      <FieldLabel field={field} label={'Slug'} />
      <div className="relative">
        <TextInput label={''} path={path} value={value} onChange={setValue} readOnly={isLocked} />
        <div className="absolute top-0 bottom-0 right-0 w-10 flex items-center">
          <Button
            buttonStyle="none"
            className="m-0 p-1"
            onClick={(event) => {
              event.preventDefault
              setIsLocked(!isLocked)
            }}
          >
            {isLocked && <LockSimple weight="light" size={16} />}
            {!isLocked && <LockSimpleOpen weight="light" size={16} />}
          </Button>
        </div>
      </div>
    </div>
  )
}
