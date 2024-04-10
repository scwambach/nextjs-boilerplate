import { Video } from '@phosphor-icons/react'
import {
  columnSizes,
  gaps,
  groups,
  headingProps,
  settingsProps,
} from '../docTypes/common'

export const videos = {
  name: 'videos',
  title: 'Videos',
  type: 'object',
  groups,
  fields: [
    ...headingProps({ group: 'content' }),
    ...settingsProps({}),
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
      type: 'number',
      options: {
        list: columnSizes,
      },
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      validation: (Rule: any) => Rule.min(1),
      group: 'content',
      of: [{ type: 'video' }],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'copy',
      items: 'items',
    },
    prepare(selection: any) {
      const { title, items = [] } = selection
      return {
        title: title || 'Videos',
        subtitle: title
          ? `Videos - ${items.length} items`
          : `${items.length} items`,
        media: Video,
      }
    },
  },
}
