import HiMenuAlt3 from '@meronex/icons/hi/HiMenuAlt3';
import { objectTitle } from '../commonFields';

export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: HiMenuAlt3,
  fields: [
    { ...objectTitle },
    {
      name: 'items',
      title: 'Items',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          name: 'menuItem',
          title: 'Menu Item',
          type: 'menuItem',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare(selection) {
      const { title, items } = selection;
      return {
        ...selection,
        title,
        subtitle: `${items.length > 0 ? `${items.length} items` : ''}`,
      };
    },
  },
};
