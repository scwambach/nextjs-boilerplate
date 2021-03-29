import FaDotCircle from '@meronex/icons/fa/FaDotCircle';

export default {
  title: 'Tile',
  name: 'tile',
  type: 'object',
  icon: FaDotCircle,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Link',
      name: 'link',
      type: 'link',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      link: 'link',
    },
    prepare(selection) {
      const { link, title } = selection;
      return {
        ...selection,
        title,
        subtitle: link.url,
      };
    },
  },
};
