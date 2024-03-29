import { Cards } from '@phosphor-icons/react'
import { groups, headingProps, settingsProps } from '../docTypes/common'

export const cards = {
  name: 'cards',
  title: 'Cards',
  type: 'object',
  groups,
  fields: [
    ...headingProps({ group: 'content' }),
    ...settingsProps({}),
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'card',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      cards: 'cards',
    },
    prepare(selection: any) {
      const { title, cards } = selection
      return {
        title: title || 'Cards',
        subtitle: `${title ? 'Cards ' : ''}${cards.length} cards`,
        media: Cards,
      }
    },
  },
}
