import { FaStar } from 'react-icons/fa';
import { slugify } from './post';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: FaStar,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        slugify: (input) => `/category/${slugify(input)}`,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      desc: 'description',
    },
    prepare(selection) {
      const { title, desc } = selection;
      return Object.assign({}, selection, {
        title,
        subtitle: desc,
      });
    },
  },
};
