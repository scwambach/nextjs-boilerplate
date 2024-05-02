import { Ticket } from '@phosphor-icons/react'
import { groups, headingProps, settingsProps } from '../docTypes/common'

export const events = {
  name: 'events',
  title: 'Events',
  type: 'object',
  groups,
  fields: [...headingProps({ group: 'content' }), ...settingsProps({})],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare(selection: any) {
      const { heading } = selection
      return {
        title: heading || 'Events',
        media: Ticket,
      }
    },
  },
}
