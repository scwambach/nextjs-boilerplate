import { CalendarCheck, ClockCounterClockwise } from '@phosphor-icons/react'
import { groups, headingProps, settingsProps } from '../docTypes/common'

export const timeline = {
  name: 'timeline',
  title: 'Timeline',
  type: 'object',
  groups,
  fields: [
    ...headingProps({ group: 'content' }),
    ...settingsProps({}),
    {
      name: 'events',
      title: 'Events',
      icon: CalendarCheck,
      type: 'array',
      validation: (Rule: any) => Rule.min(1),
      group: 'content',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'date',
              title: 'Date',
              type: 'date',
              validation: (Rule: any) => Rule.required(),
            },
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
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'copy',
      events: 'events',
    },
    prepare(selection: any) {
      const { title, events = [] } = selection
      return {
        title: title || 'Timeline',
        subtitle: title
          ? `Timeline - ${events.length} events`
          : `${events.length} events`,
        media: ClockCounterClockwise,
      }
    },
  },
}
