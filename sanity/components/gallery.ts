import { Image } from '@phosphor-icons/react'
import {
  columnSizes,
  gaps,
  groups,
  headingProps,
  settingsProps,
} from '../docTypes/common'

export const gallery = {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  groups,
  fields: [
    ...headingProps({ group: 'content' }),
    ...settingsProps({}),
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      group: 'content',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'gap',
      title: 'Gap',
      type: 'string',
      group: 'settings',
      options: {
        list: gaps,
      },
    },
    {
      name: 'columns',
      title: 'Columns',
      group: 'settings',
      type: 'string',
      options: {
        list: columnSizes,
      },
    },
  ],
  preview: {
    select: {
      title: 'heading',
      items: 'items',
    },
    prepare(selection: any) {
      const { title, items = [] } = selection
      return {
        title: title || 'Gallery',
        subtitle: `${items.length} items`,
        media: Image,
      }
    },
  },
}
