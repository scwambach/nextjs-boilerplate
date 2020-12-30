import HiMenuAlt3 from '@meronex/icons/hi/HiMenuAlt3';

export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: HiMenuAlt3,
  fields: [
    {
      name: 'title',
      title: 'Title',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
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
      return Object.assign({}, selection, {
        title,
        subtitle: `${items.length > 0 ? `${items.length} items` : ''}`,
      });
    },
  },
};
