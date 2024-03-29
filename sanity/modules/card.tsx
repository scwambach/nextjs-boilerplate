import { IconSelector } from '@components/utility'
import { groups, headingProps, settingsProps, themes } from '../docTypes/common'
import { icons } from '../icons'
import { Cards } from '@phosphor-icons/react'

export const card = {
  name: 'card',
  title: 'Card',
  type: 'object',
  groups,
  fields: [
    ...headingProps({ group: 'content' }),
    ...settingsProps({}),
    {
      name: 'title',
      title: 'Title',
      group: 'content',
      type: 'string',
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
      name: 'description',
      title: 'Description',
      group: 'content',
      type: 'text',
      rows: 3,
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
    {
      name: 'href',
      title: 'Href',
      description: 'The URL to link to when the card is clicked.',
      group: 'content',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          allowRelative: true,
        }),
      hidden: ({
        parent,
      }: {
        parent: {
          links: any[]
        }
      }) => parent?.links?.length > 0,
    },
    {
      name: 'links',
      title: 'Links',
      group: 'content',
      hidden: ({
        parent,
      }: {
        parent: {
          href: string
        }
      }) => !!parent?.href,
      description:
        'Links to display on the card. Only use when HREF is not set.',
      type: 'array',
      of: [
        {
          type: 'button',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon',
      description: 'description',
    },
    prepare: ({ title, icon, description }: any) => {
      return {
        title: title || 'Card',
        subtitle: description || 'Description',
        media: icon ? <IconSelector icon={icon} /> : Cards,
      }
    },
  },
}
