import { IconSelector } from '@components/utility'
import { icons } from '../icons'

export const social = {
  name: 'social',
  title: 'Social',
  type: 'object',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      validation: (Rule: any) => Rule.required(),
      type: 'string',
      options: {
        list: icons,
      },
    },
    {
      name: 'screenReader',
      validation: (Rule: any) => Rule.required(),
      title: 'Screen Reader Text',
      type: 'string',
    },
    {
      name: 'href',
      title: 'Href',
      type: 'url',
      validation: (Rule: any) =>
        Rule.required().uri({
          allowRelative: true,
        }),
    },
  ],
  preview: {
    select: {
      icon: 'icon',
      screenReader: 'screenReader',
    },
    prepare(selection: any) {
      const { icon, screenReader } = selection

      return {
        title: screenReader,
        media: <IconSelector icon={icon || 'Star'} />,
      }
    },
  },
}
