export default {
  title: 'Menu Item',
  name: 'menuItem',
  type: 'object',
  fields: [
    {
      title: 'Link',
      name: 'link',
      type: 'link',
    },
    {
      name: 'subItems',
      title: 'Sub Items',
      type: 'array',
      of: [
        {
          title: 'Link',
          name: 'link',
          type: 'link',
        },
      ],
    },
    {
      name: 'classes',
      title: 'Classes',
      description: 'Separate classes with a single space.',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'link.copy',
      subtitle: 'link.url',
      subItems: 'subItems',
      classes: 'classes',
    },
    prepare(selection) {
      const { title, subtitle, subItems, classes } = selection;
      return {
        ...selection,
        title,
        subtitle: `${subtitle}${
          subItems && subItems.length > 0
            ? ` (${subItems.length} subitems)`
            : ''
        }${classes ? ` [${classes}]` : ''}`,
      };
    },
  },
};
