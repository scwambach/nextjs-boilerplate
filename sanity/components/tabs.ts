import { Tabs } from '@phosphor-icons/react'
import { groups, headingProps, settingsProps, themes } from '../docTypes/common'

export const tabs = {
  name: 'tabs',
  title: 'Tabs',
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
      of: [{ type: 'tab' }],
    },
    {
      name: 'theme',
      title: 'Theme',
      group: 'settings',
      type: 'string',
      options: {
        list: themes,
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
        title: title || 'Tabs',
        subtitle: `${items.length} tabs`,
        media: Tabs,
      }
    },
  },
}
