import { groups, settingsProps } from '../docTypes/common'

export const logoBanner = {
  name: 'logoBanner',
  title: 'Logo Banner',
  type: 'object',
  groups,
  fields: [
    ...settingsProps({}),
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'copy',
      title: 'Copy',
      type: 'string',
      group: 'content',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'copy',
      media: 'logo',
    },
    prepare(selection: any) {
      const { title, media } = selection
      return {
        title: title || 'Logo Banner',
        subtitle: title ? 'Logo Banner' : undefined,
        media,
      }
    },
  },
}
