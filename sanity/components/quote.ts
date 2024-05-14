import { Quotes } from '@phosphor-icons/react'
import { colors, groups, settingsProps } from '../docTypes/common'

export const quote = {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  groups,
  fields: [
    ...settingsProps({}),
    {
      name: 'bgColor',
      title: 'Background Color',
      group: 'settings',
      type: 'string',
      options: {
        list: colors,
      },
    },
    {
      name: 'quote',
      title: 'Quote',
      group: 'content',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'cite',
      title: 'Cite',
      group: 'content',
      type: 'string',
      hidden: ({ parent }: any) => !!parent.person,
    },
    {
      name: 'person',
      title: 'Person',
      group: 'content',
      type: 'reference',
      hidden: ({ parent }: any) => !!parent.cite,
      to: [{ type: 'person' }],
    },
  ],
  preview: {
    select: {
      quote: 'quote',
      cite: 'cite',
      person: 'person.firstName',
      personLast: 'person.lastName',
    },
    prepare(selection: any) {
      const { quote, cite, person, personLast } = selection
      return {
        title: cite ? cite : person ? `${person} ${personLast}` : 'Quote',
        subtitle: `"${quote}"`,
        media: Quotes,
      }
    },
  },
}
