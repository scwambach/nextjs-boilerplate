export default {
  title: 'Heading Content',
  name: 'headingContent',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Copy',
      name: 'copy',
      type: 'minimalContent'
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      validation: Rule => Rule.max(2),
      of: [
        {
          title: 'Link',
          name: 'link',
          type: 'link'
        }
      ],
    },
  ]
};
