export const seo = [
  {
    name: 'title',
    title: 'Title',
    type: 'string',
  },
  {
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'title',
    },
  },
  {
    name: 'ogImage',
    title: 'Open Graph Image',
    type: 'image',
    options: {
      hotspot: true,
    },
  },
  {
    name: 'description',
    title: 'Description',
    type: 'text',
    rows: 3,
  },
  {
    name: 'keywords',
    title: 'Keywords',
    type: 'array',
    of: [{ type: 'string' }],
  },
]

export const settingsProps = (props: { group?: string }) => [
  {
    name: 'className',
    title: 'Class Name',
    group: props.group || 'settings',
    type: 'string',
  },
]

export const headingProps = (props: { group?: string }) => [
  {
    name: 'heading',
    title: 'Heading',
    type: 'string',
    group: props.group,
  },
  {
    name: 'headingLevel',
    title: 'Heading Level',
    group: props.group,
    type: 'string',
    options: {
      list: headings,
    },
  },
  richTextObject({
    name: 'subheading',
    title: 'Subheading',
    group: props.group,
  }),
]

export const richTextObject = (props: any) => {
  return {
    name: props.name,
    title: props.title,
    type: 'array',
    validation: props.validation,
    group: props.group,
    of: [
      {
        type: 'block',
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
          { title: 'Quote', value: 'blockquote' },
        ],
        marks: {
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'Link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL',
                  validation: (Rule: any) =>
                    Rule.uri({
                      allowRelative: true,
                    }),
                },
              ],
            },
          ],
        },
      },
      {
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }
}

export const pageComponents = [
  { type: 'banner' },
  { type: 'buttonRow' },
  { type: 'cards' },
  { type: 'carousel' },
  { type: 'compareTables' },
  { type: 'contactBlock' },
  { type: 'events' },
  { type: 'gallery' },
  { type: 'logoBanner' },
  { type: 'quote' },
  { type: 'river' },
]

export const headings = [
  { title: 'H1', value: '1' },
  { title: 'H2', value: '2' },
  { title: 'H3', value: '3' },
  { title: 'H4', value: '4' },
  { title: 'H5', value: '5' },
  { title: 'H6', value: '6' },
]

export const columnSizes = [1, 2, 3, 4, 5, 6]

export const widths = [
  { title: 'Wider', value: 'wider' },
  { title: 'Wide', value: 'wide' },
  { title: 'Normal', value: 'normal' },
  { title: 'Narrow', value: 'narrow' },
  { title: 'Narrower', value: 'narrower' },
  { title: 'Full', value: 'full' },
]

export const colors = [
  { title: 'Red', value: 'red' },
  { title: 'Blue', value: 'blue' },
  { title: 'Green', value: 'green' },
  { title: 'Orange', value: 'orange' },
  { title: 'Black', value: 'black' },
  { title: 'White', value: 'white' },
]

export const themes = [
  { title: 'Default', value: 'default' },
  { title: 'Primary', value: 'primary' },
  { title: 'Secondary', value: 'secondary' },
]

export const gaps = [
  { title: 'None', value: 'none' },
  { title: 'Micro', value: 'miro' },
  { title: 'XX Small', value: 'xxs' },
  { title: 'Extra Small', value: 'xs' },
  { title: 'Small', value: 'sm' },
  { title: 'Medium', value: 'md' },
  { title: 'Large', value: 'lg' },
  { title: 'Extra Large', value: 'xl' },
  { title: 'XX Large', value: 'xxl' },
  { title: 'Mega', value: 'mega' },
]

export const groups = [
  {
    name: 'settings',
    title: 'Settings',
  },
  {
    name: 'common',
    title: 'Common',
  },
  {
    name: 'content',
    title: 'Content',
    default: true,
  },
]
