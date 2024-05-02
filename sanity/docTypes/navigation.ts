import { Compass, Link } from '@phosphor-icons/react'

export const navigation = {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: Compass,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      validation: (Rule: any) => Rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'href',
              title: 'URL',
              type: 'url',
              validation: (Rule: any) =>
                Rule.uri({
                  allowRelative: true,
                }).required(),
            },
            {
              name: 'subNav',
              title: 'Sub Navigation',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'copy',
                      title: 'Label',
                      type: 'string',
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: 'href',
                      title: 'URL',
                      type: 'url',
                      validation: (Rule: any) =>
                        Rule.uri({
                          allowRelative: true,
                        }).required(),
                    },
                  ],
                  preview: {
                    select: {
                      title: 'copy',
                      subtitle: 'href',
                    },
                    prepare(selection: any) {
                      const { title, subtitle } = selection
                      return {
                        title,
                        subtitle,
                        media: Link,
                      }
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
              subNav: 'subNav',
            },
            prepare(selection: any) {
              const { title, subtitle, subNav } = selection
              return {
                title,
                subtitle: `${subtitle}${
                  subNav ? ` (${subNav.length} sub items)` : ''
                }`,
                media: Link,
              }
            },
          },
        },
      ],
    },
  ],
}
