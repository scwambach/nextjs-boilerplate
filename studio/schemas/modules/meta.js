export default {
  title: 'Meta Information',
  name: 'meta',
  type: 'object',
  fields: [
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      validation: Rule => Rule.max(80),
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      description: 'Keep it short and sweet!',
      validation: Rule => Rule.max(150).required(),
    },
  ],
};
