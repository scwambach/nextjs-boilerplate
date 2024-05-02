import { MapTrifold } from '@phosphor-icons/react'
import { groups, settingsProps } from '../docTypes/common'

export const map = {
  name: 'map',
  title: 'Map',
  type: 'object',

  groups,
  fields: [
    ...settingsProps({}),
    {
      name: 'markers',
      title: 'Markers',
      type: 'array',
      group: 'content',
      validation: (Rule: any) => Rule.required().min(1),
      of: [{ type: 'marker' }],
    },
  ],
  preview: {
    select: {
      markers: 'markers',
    },
    prepare(selection: any) {
      const { markers = [] } = selection
      return {
        title: 'Map',
        subtitle: `${markers.length} markers`,
        media: MapTrifold,
      }
    },
  },
}
