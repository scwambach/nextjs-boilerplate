import { gaps, groups, headingProps, settingsProps } from '../docTypes/common'

export const stats = {
  name: 'stats',
  title: 'Stats',
  type: 'object',
  groups,
  fields: [
    ...headingProps({ group: 'content' }),
    ...settingsProps({}),
    {
      name: 'gap',
      title: 'Gap',
      group: 'settings',
      type: 'string',
      options: {
        list: gaps,
      },
    },
    {
      name: 'items',
      title: 'Items',
      validation: (Rule: any) => Rule.required().min(1),
      group: 'content',
      type: 'array',
      of: [{ type: 'stat' }],
    },
  ],
}
