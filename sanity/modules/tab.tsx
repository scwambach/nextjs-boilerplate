import { Avocado } from '@phosphor-icons/react'
import { richTextObject } from '../docTypes/common'

export const tab = {
  name: 'tab',
  title: 'Tab',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    richTextObject({
      name: 'content',
      title: 'Content',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      label: 'label',
    },
    prepare(selection: any) {
      const { label } = selection
      return {
        title: label,
        media: Avocado,
      }
    },
  },
}
