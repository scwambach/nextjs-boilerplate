import { groups, settingsProps } from '../docTypes/common'
import { Slideshow } from '@phosphor-icons/react'

export const carousel = {
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  groups,
  fields: [
    ...settingsProps({}),
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      validation: (Rule: any) => Rule.min(1),
      group: 'content',
      of: [{ type: 'banner' }],
    },
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare(selection: any) {
      const { items = [] } = selection
      return {
        title: 'Carousel',
        subtitle: `${items.length} items`,
        media: Slideshow,
      }
    },
  },
}
