import { ArticleNyTimes } from '@phosphor-icons/react'
import {
  gaps,
  groups,
  richTextObject,
  settingsProps,
  widths,
} from '../docTypes/common'

export const richText = {
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  groups,
  fields: [
    ...settingsProps({}),
    {
      name: 'centered',
      group: 'settings',
      title: 'Centered',
      type: 'boolean',
    },
    {
      name: 'container',
      group: 'settings',
      title: 'Container',
      type: 'string',
      options: {
        list: widths,
      },
    },
    {
      name: 'gap',
      title: 'Gap',
      group: 'settings',
      type: 'string',
      options: {
        list: gaps,
      },
    },
    richTextObject({
      name: 'copy',
      group: 'content',
      title: 'Copy',
      validation: (Rule: any) => Rule.required(),
    }),
    richTextObject({
      name: 'column2Copy',
      group: 'content',
      title: 'Column 2 Copy',
    }),
    richTextObject({
      name: 'column3Copy',
      group: 'content',
      title: 'Column 3 Copy',
    }),
    richTextObject({
      name: 'column4Copy',
      group: 'content',
      title: 'Column 4 Copy',
    }),
  ],
  preview: {
    select: {
      copy: 'copy',
      column2Copy: 'column2Copy',
      column3Copy: 'column3Copy',
      column4Copy: 'column4Copy',
    },
    prepare(selection: any) {
      const { copy } = selection

      const amountOfColumns = [
        copy,
        selection.column2Copy,
        selection.column3Copy,
        selection.column4Copy,
      ].filter(Boolean).length

      return {
        title: 'Rich Text',
        subtitle: `${amountOfColumns} columns`,
        media: ArticleNyTimes,
      }
    },
  },
}
