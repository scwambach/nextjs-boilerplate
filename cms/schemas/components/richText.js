import BsTextLeft from '@meronex/icons/bs/BsTextLeft';
import { backgroundColor } from '../commonFields';

export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'object',
  icon: BsTextLeft,
  fields: [
    {
      title: 'Copy',
      name: 'copy',
      validation: (Rule) => Rule.required(),
      type: 'blockContent',
    },
    { ...backgroundColor },
  ],
  preview: {
    select: {
      title: 'copy.[0].children[0].text',
    },
    prepare(selection) {
      const { title } = selection;
      return { ...selection, title: 'Rich Text', subtitle: title };
    },
  },
};
