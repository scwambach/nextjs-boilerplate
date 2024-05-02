import { Cards } from '@phosphor-icons/react'
import {
  columnSizes,
  gaps,
  groups,
  headingProps,
  settingsProps,
} from '../docTypes/common'

export const cards = {
  name: 'cards',
  title: 'Cards',
  type: 'object',
  groups,
  fields: [
    ...headingProps({ group: 'content' }),
    ...settingsProps({}),
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      validation: (Rule: any) => Rule.min(1),
      group: 'content',
      of: [
        {
          type: 'card',
        },
      ],
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
      type: 'number',
      options: {
        list: columnSizes,
      },
    },
    {
      name: 'paginated',
      title: 'Paginated',
      type: 'boolean',
      group: 'settings',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button',
      group: 'content',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'heading',
      cards: 'items',
    },
    prepare(selection: any) {
      const { title, cards = [] } = selection
      return {
        title: title || 'Cards',
        subtitle: `${title ? 'Cards ' : ''}${cards.length} cards`,
        media: Cards,
      }
    },
  },
}
