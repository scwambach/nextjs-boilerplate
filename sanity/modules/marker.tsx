import { MapPin } from '@phosphor-icons/react'

export const marker = {
  name: 'marker',
  title: 'Marker',
  icon: MapPin,
  type: 'object',
  fields: [
    {
      name: 'lat',
      title: 'Latitude',
      type: 'number',
    },
    {
      name: 'lng',
      title: 'Longitude',
      type: 'number',
    },
  ],
}
