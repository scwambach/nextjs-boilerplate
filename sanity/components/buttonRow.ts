import { DotsThreeOutline } from '@phosphor-icons/react'
import { groups, headingProps, settingsProps } from '../docTypes/common'

export const buttonRow = {
  name: 'buttonRow',
  title: 'Button Row',
  type: 'object',
  groups,
  fields: [
    ...headingProps({ group: 'content' }),
    ...settingsProps({}),
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      group: 'content',
      validation: (Rule: any) => Rule.required().min(1).max(3),
      of: [{ type: 'button' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      buttons: 'buttons',
    },
    prepare(selection: any) {
      const { title, buttons } = selection
      return {
        title: title || 'Button Row',
        subtitle: `${title ? 'Button Row ' : ''}${buttons.length} buttons`,
        media: DotsThreeOutline,
      }
    },
  },
}
