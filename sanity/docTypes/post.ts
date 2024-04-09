import { Pencil } from '@phosphor-icons/react'
import { richTextObject } from './common'

export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fieldsets: [
    {
      title: 'Meta Information',
      name: 'meta',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      title: 'Content',
      name: 'content',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  icon: Pencil,
  fields: [
    {
      name: 'title',
      title: 'Title',
      fieldset: 'content',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      fieldset: 'content',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedAt',
      fieldset: 'meta',
      title: 'Published at',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'authors',
      fieldset: 'meta',
      title: 'Authors',
      type: 'array',
      validation: (Rule: any) => Rule.required().min(1),
      of: [
        {
          type: 'reference',
          to: [{ type: 'person' }],
        },
      ],
    },
    {
      name: 'image',
      fieldset: 'content',
      title: 'Image',
      type: 'image',
      description: 'Image for the post',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      fieldset: 'meta',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      rows: 3,
    },
    {
      name: 'tags',
      fieldset: 'meta',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    },
    richTextObject({
      name: 'content',
      validation: (Rule: any) => Rule.required(),
      fieldset: 'content',
      title: 'Content',
    }),
  ],
}
