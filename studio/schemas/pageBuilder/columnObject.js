import { FaStar } from 'react-icons/lib/fa';

export default {
  title: 'Column',
  name: 'columnObject',
  type: 'object',
  icon: FaStar,
  fields: [
    {
      name: 'columnContent',
      title: 'Content',
      type: 'array',
      validation: Rule => Rule.min(1),
      of: [{ type: 'richText' }],
    },
  ],
  preview: {
    prepare(selection) {
      return Object.assign({}, selection, {
        title: 'Column',
      });
    },
  },
};
