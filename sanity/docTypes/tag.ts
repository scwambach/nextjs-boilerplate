import { HandWaving } from '@phosphor-icons/react'
import { themes } from './common'

export const tag = {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: HandWaving,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: themes,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'label',
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
