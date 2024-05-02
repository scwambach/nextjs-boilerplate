import { Clock, MapPin } from '@phosphor-icons/react'
import { groups, headingProps, settingsProps } from '../docTypes/common'

export const contactBlock = {
  name: 'contactBlock',
  title: 'Contact Block',
  type: 'object',
  groups,
  fields: [
    ...headingProps({ group: 'content' }),
    ...settingsProps({}),
    {
      name: 'marker',
      title: 'Marker',
      group: 'content',
      validation: (Rule: any) => Rule.required(),
      type: 'marker',
    },
    {
      name: 'info',
      title: 'Contact Info',
      validation: (Rule: any) => Rule.required(),
      group: 'content',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'object',
          options: {
            collapsible: false,
            collapsed: false,
          },
          fields: [
            {
              name: 'street',
              title: 'Street',
              type: 'string',
            },
            {
              name: 'city',
              title: 'City',
              type: 'string',
            },
            {
              name: 'state',
              title: 'State',
              type: 'string',
            },
            {
              name: 'zip',
              title: 'Zip',
              type: 'string',
            },
          ],
        },
        {
          name: 'hours',
          title: 'Hours',
          type: 'array',
          of: [
            {
              type: 'object',
              icon: Clock,
              fields: [
                {
                  name: 'days',
                  title: 'Day(s)',
                  type: 'string',
                },
                {
                  name: 'hours',
                  title: 'Hours',
                  type: 'string',
                },
              ],
              preview: {
                select: {
                  days: 'days',
                  hours: 'hours',
                },
                prepare(selection: any) {
                  const { days, hours } = selection
                  return {
                    title: days,
                    subtitle: hours,
                    media: Clock,
                  }
                },
              },
            },
          ],
        },
        {
          name: 'socials',
          title: 'Socials',
          type: 'array',
          of: [{ type: 'social' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      marker: 'marker',
    },
    prepare(selection: any) {
      const { heading } = selection
      const title = heading || 'Contact Block'
      const subtitle = heading ? 'Contact Block' : undefined
      return {
        title,
        subtitle,
        media: MapPin,
      }
    },
  },
}
