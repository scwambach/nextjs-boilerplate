import { Waves } from '@phosphor-icons/react'
import {
  groups,
  headings,
  settingsProps,
  themes,
  widths,
} from '../docTypes/common'

export const river = {
  name: 'river',
  title: 'River',
  type: 'object',
  groups,
  fields: [
    ...settingsProps({}),
    {
      name: 'headingLevel',
      title: 'Heading Level',
      group: 'content',
      type: 'string',
      options: {
        list: headings,
      },
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      group: 'settings',
      options: {
        list: themes,
      },
    },
    {
      name: 'reverse',
      title: 'Reverse',
      type: 'boolean',
      group: 'settings',
    },
    {
      name: 'container',
      title: 'Container',
      type: 'string',
      group: 'settings',
      options: {
        list: widths,
      },
    },
    {
      name: 'items',
      title: 'Items',
      validation: (Rule: any) => Rule.required().min(1),
      group: 'content',
      type: 'array',
      of: [{ type: 'riverObject' }],
    },
  ],

  preview: {
    select: {
      items: 'items',
    },
    prepare(selection: any) {
      const { items = [] } = selection
      return {
        title: 'River',
        subtitle: `${items.length} items`,
        media: Waves,
      }
    },
  },
}
