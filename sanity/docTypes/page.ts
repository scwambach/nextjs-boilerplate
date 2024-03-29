import { seo } from './common'

export const page = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    ...seo,
    {
      name: 'pageComponents',
      title: 'Page Components',
      type: 'array',
      of: [{ type: 'banner' }, { type: 'buttonRow' }, { type: 'cards' }],
    },
  ],
}
