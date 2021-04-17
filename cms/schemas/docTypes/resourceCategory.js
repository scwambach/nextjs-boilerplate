import AiFillStar from '@meronex/icons/ai/AiFillStar';
import { slugify } from './post';

export default {
  name: 'resourceCategory',
  title: 'Resource Category',
  type: 'document',
  icon: AiFillStar,
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
        slugify: (input) => `/resource-category/${slugify(input)}`,
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
      return { ...selection, title, subtitle: desc };
    },
  },
};
