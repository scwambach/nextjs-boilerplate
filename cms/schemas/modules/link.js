export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'Copy',
      name: 'copy',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'Can be full URL or relative path (e.g. "/about")',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
        }),
    },
    {
      title: 'New Tab',
      name: 'newTab',
      type: 'boolean',
    },
  ],
};
