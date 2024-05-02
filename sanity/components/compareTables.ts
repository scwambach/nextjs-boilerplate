import { Table } from '@phosphor-icons/react'
import { groups, headingProps, settingsProps, themes } from '../docTypes/common'

export const compareTables = {
  name: 'compareTables',
  title: 'Compare Tables',
  type: 'object',
  groups,
  fields: [
    ...headingProps({ group: 'content' }),
    ...settingsProps({}),
    {
      name: 'overallTheme',
      title: 'Overall Theme',
      type: 'string',
      group: 'settings',
      options: {
        list: themes,
      },
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      validation: (Rule: any) => Rule.min(1).max(4),
      group: 'content',
      of: [{ type: 'compareTable' }],
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection: any) {
      const { title } = selection
      return {
        title: title || 'Compare Tables',
        subtitle: title ? 'Compare Tables' : undefined,
        media: Table,
      }
    },
  },
}
