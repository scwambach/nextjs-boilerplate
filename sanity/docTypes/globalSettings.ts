import { Globe } from '@phosphor-icons/react'
import { icons } from '../icons'

export const globalSettings = {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  icon: Globe,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'footerCopy',
      title: 'Footer Copy',
      type: 'text',
      rows: 3,
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: icons,
              },
            },
          ],
        },
      ],
    },
  ],
}
