import { groups, settingsProps, themes } from '../docTypes/common'
import { icons } from '../icons'

export const stat = {
  name: 'stat',
  title: 'Stat',
  type: 'object',
  groups,
  fields: [
    ...settingsProps({}),
    {
      name: 'title',
      title: 'Title',
      group: 'content',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'value',
      title: 'Value',
      group: 'content',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      group: 'content',
      type: 'string',
      options: {
        list: icons,
      },
    },
    {
      name: 'type',
      title: 'Type',
      group: 'content',
      type: 'string',
      options: {
        list: [
          { title: 'Number', value: 'number' },
          { title: 'Percentage', value: 'percentage' },
          { title: 'Currency', value: 'currency' },
        ],
      },
    },
    {
      name: 'numberPrefix',
      title: 'Number Prefix',
      group: 'content',
      type: 'string',
    },
    {
      name: 'numberSuffix',
      title: 'Number Suffix',
      group: 'content',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      group: 'content',
      type: 'string',
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
      name: 'decimals',
      title: 'Decimals',
      group: 'settings',
      type: 'boolean',
    },
    {
      name: 'tags',
      title: 'Tags',
      group: 'content',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
