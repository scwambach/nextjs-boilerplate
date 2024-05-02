import { VideoCamera } from '@phosphor-icons/react'
import { groups, settingsProps } from '../docTypes/common'

export const video = {
  name: 'video',
  title: 'Video',
  type: 'object',
  groups,
  fields: [
    ...settingsProps({}),
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'copy',
      title: 'Copy',
      type: 'text',
      group: 'content',
      rows: 3,
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      group: 'content',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      copy: 'url',
      media: 'poster',
    },
    prepare(selection: any) {
      const { title, copy, media } = selection
      return {
        title: title || 'Video',
        copy,
        media: media || VideoCamera,
      }
    },
  },
}
