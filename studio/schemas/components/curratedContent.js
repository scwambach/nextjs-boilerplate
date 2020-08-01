import { MdLibraryBooks } from 'react-icons/lib/md';

export default {
  title: 'Currated Content',
  name: 'curratedContent',
  type: 'object',
  icon: MdLibraryBooks,
  fields: [
    {
      title: 'Content',
      name: 'posts',
      type: 'array',
      validation: Rule => Rule.max(4).required(),
      of: [
        {
          title: 'Content Item',
          name: 'post',
          type: 'reference',
          to: [{ type: 'post' }, {type: 'page'}, {type: 'product'}],
        },
      ],
    },
    {
      title: 'No Margin',
      name: 'noMargin',
      type: 'boolean'
    },
  ],
  preview: {
    select: {
      posts: 'posts',
    },
    prepare(selection) {
      const { posts } = selection;
      return Object.assign({}, selection, {
        title: 'Currated Content Listing',
        subtitle: posts.length,
      });
    },
  },
};
