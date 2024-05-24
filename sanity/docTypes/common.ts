export const seo = [
  {
    name: 'title',
    title: 'Title',
    type: 'string',
    validation: (Rule: any) => Rule.required(),
  },
  {
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    validation: (Rule: any) => Rule.required(),
    options: {
      source: 'title',
    },
  },
  {
    name: 'ogImage',
    title: 'Open Graph Image',
    fieldset: 'seo',
    type: 'image',
    validation: (Rule: any) => Rule.required(),
    options: {
      hotspot: true,
    },
  },
  {
    name: 'description',
    title: 'Description',
    fieldset: 'seo',
    validation: (Rule: any) => Rule.required(),
    type: 'text',
    rows: 3,
  },
  {
    name: 'keywords',
    title: 'Keywords',
    fieldset: 'seo',
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
    fieldset: props.fieldset,
    of: [
      {
        type: 'block',
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'H1', value: 'h1' },
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

export const forms = [{ title: 'Contact', value: 'ContactForm' }]

export const pageComponents = [
  { type: 'banner' },
  { type: 'buttonRow' },
  { type: 'cards' },
  { type: 'carousel' },
  { type: 'compareTables' },
  { type: 'contactBlock' },
  { type: 'events' },
  { type: 'formSelector' },
  { type: 'gallery' },
  { type: 'logoBanner' },
  { type: 'logoRow' },
  { type: 'people' },
  { type: 'map' },
  { type: 'quote' },
  { type: 'richText' },
  { type: 'river' },
  { type: 'stats' },
  { type: 'tabs' },
  { type: 'timeline' },
  { type: 'videos' },
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
  { title: 'Red', value: 'quaternary' },
  { title: 'Light Red', value: 'quaternary-light' },
  { title: 'Blue', value: 'primary' },
  { title: 'Light Blue', value: 'primary-light' },
  { title: 'Green', value: 'secondary' },
  { title: 'Light Green', value: 'secondary-light' },
  { title: 'Orange', value: 'tertiary' },
  { title: 'Light Orange', value: 'tertiary-light' },
  { title: 'Black', value: 'black' },
  { title: 'White', value: 'white' },
]

export const themes = [
  { title: 'Primary', value: 'primary' },
  { title: 'Secondary', value: 'secondary' },
  { title: 'Tertiary', value: 'tertiary' },
]

export const gaps = [
  { title: 'None', value: 'none' },
  { title: 'Micro', value: 'micro' },
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
