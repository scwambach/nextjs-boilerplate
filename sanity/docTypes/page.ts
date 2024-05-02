import { pageComponents, seo } from './common'

export const page = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fieldsets: [
    {
      name: 'seo',
      title: 'Page Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    ...seo,
    {
      name: 'pageComponents',
      title: 'Page Components',
      type: 'array',
      of: pageComponents,
    },
  ],
}
