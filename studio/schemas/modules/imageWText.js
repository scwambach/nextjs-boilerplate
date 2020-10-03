export default {
  title: 'Image w/Text',
  name: 'imageWText',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Copy',
      name: 'copy',
      type: 'simpleContent',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'link',
    },
  ],
};
