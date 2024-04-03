import { Waves } from '@phosphor-icons/react'
import { richTextObject } from '../docTypes/common'

export const riverObject = {
  name: 'riverObject',
  title: 'River Object',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'video',
      title: 'Video URL',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Image',
      validation: (Rule: any) => Rule.required(),
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    richTextObject({
      name: 'description',
      title: 'Description',
      validation: (Rule: any) => Rule.required(),
    }),
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
      media: 'image',
    },

    prepare(selection: any) {
      const { title, media } = selection
      return {
        title: title || 'River Item',
        media: media || Waves,
      }
    },
  },
}
