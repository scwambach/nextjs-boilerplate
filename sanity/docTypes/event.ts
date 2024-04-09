import { CalendarCheck } from '@phosphor-icons/react'

export const event = {
  name: 'event',
  title: 'Event',
  icon: CalendarCheck,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'string',
        },
      ],
    },
    {
      name: 'doorsOpenTime',
      title: 'Doors Open Time',
      type: 'string',
    },
    {
      name: 'startTime',
      validation: (Rule: any) => Rule.required(),
      title: 'Start Time',
      type: 'string',
    },
    {
      name: 'endTime',
      title: 'End Time',
      type: 'string',
    },

    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'button' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'poster',
    },
    prepare(selection: any) {
      const { title, date, media } = selection
      return {
        title,
        subtitle: date,
        media,
      }
    },
  },
}
