export default {
  title: 'Logo Grid Item',
  name: 'logoGridItem',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Link',
      name: 'link',
      type: 'link',
    },
  ],

  preview: {
    select: {
      image: 'image',
    },
    prepare(selection) {
      const { image } = selection;
      return Object.assign({}, selection, {
        title: 'Grid Item',
        media: image,
      });
    },
  },
};
