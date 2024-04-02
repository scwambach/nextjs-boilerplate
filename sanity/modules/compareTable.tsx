import { Star } from '@phosphor-icons/react'
import { groups, settingsProps, themes } from '../docTypes/common'

export const compareTable = {
  name: 'compareTable',
  title: 'Compare Table',
  type: 'object',
  icon: Star,
  groups,
  fields: [
    ...settingsProps({}),
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      group: 'content',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
    },
    {
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'content',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
      group: 'content',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'button',
      group: 'content',
    },
    {
      name: 'highlight',
      title: 'Highlight',
      type: 'boolean',
      group: 'settings',
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: themes,
      },
      group: 'settings',
    },
  ],
}
