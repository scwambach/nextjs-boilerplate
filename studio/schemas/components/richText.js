import { MdLibraryBooks } from 'react-icons/lib/md';

export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'object',
  icon: MdLibraryBooks,
  fields: [
    {
      title: 'Copy',
      name: 'copy',
      validation: Rule => Rule.required(),
      type: 'blockContent'
    },
    {
      title: 'No Margin',
      name: 'noMargin',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'copy.[0].children[0].text'
    },
    prepare(selection) {
      const { title } = selection;
      return Object.assign({}, selection, {
        title: 'Rich Text',
        subtitle: title
      });
    }
  }
};
