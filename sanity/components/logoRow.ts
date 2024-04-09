import { AlignCenterHorizontalSimple, Star } from '@phosphor-icons/react'
import { groups, settingsProps } from '../docTypes/common'

export const logoRow = {
  name: 'logoRow',
  title: 'Logo Row',
  type: 'object',
  groups,
  fields: [
    ...settingsProps({}),
    {
      name: 'items',
      title: 'Items',
      validation: (Rule: any) => Rule.required().min(1),
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          icon: Star,
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare(selection: any) {
      const { items = [] } = selection
      return {
        title: 'Logo Row',
        subtitle: `${items.length} items`,
        media: AlignCenterHorizontalSimple,
      }
    },
  },
}
