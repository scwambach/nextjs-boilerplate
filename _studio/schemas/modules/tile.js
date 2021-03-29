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
      title: 'Sub Title',
      name: 'subTitle',
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
      subTitle: 'subTitle',
      link: 'link',
    },
    prepare(selection) {
      const { link, title, subTitle } = selection;
      return {
        ...selection,
        title,
        subtitle: `${subTitle} | ${link.url}`,
      };
    },
  },
};
