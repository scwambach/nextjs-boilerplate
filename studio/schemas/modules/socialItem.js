import FaGrinStars from '@meronex/icons/fa/FaGrinStars';

export default {
  icon: FaGrinStars,
  title: 'Social Item',
  name: 'socialItem',
  type: 'object',
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
  ],
};
