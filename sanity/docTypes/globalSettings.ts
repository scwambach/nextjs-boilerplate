import { Globe } from '@phosphor-icons/react'
import { icons } from '../icons'
import * as Icon from '@phosphor-icons/react'

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
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      options: {
        hotspot: true,
      },
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
              validation: (Rule: any) => Rule.required(),
              type: 'string',
            },
            {
              name: 'url',
              validation: (Rule: any) => Rule.required(),
              title: 'URL',
              type: 'url',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
              options: {
                list: icons,
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'icon',
            },
            prepare(selection: any) {
              const { title, media } = selection

              return {
                title,
                media: media ? Icon[media as keyof typeof Icon] : null,
              }
            },
          },
        },
      ],
    },
  ],
}
