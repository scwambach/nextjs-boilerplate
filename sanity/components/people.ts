import { UsersThree } from '@phosphor-icons/react'
import {
  groups,
  headingProps,
  settingsProps,
  columnSizes,
  gaps,
} from '../docTypes/common'

export const people = {
  name: 'people',
  title: 'People',
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
      options: {
        layout: 'grid',
      },
      validation: (Rule: any) => Rule.required().min(1),
      of: [
        {
          type: 'reference',
          to: [{ type: 'person' }],
        },
      ],
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
      name: 'gap',
      title: 'Gap',
      group: 'settings',
      type: 'string',
      options: {
        list: gaps,
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
        title: title || 'People',
        subtitle: `${items.length} people`,
        media: UsersThree,
      }
    },
  },
}
