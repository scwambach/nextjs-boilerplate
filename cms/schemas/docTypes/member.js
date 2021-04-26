import FaUsers from '@meronex/icons/fa/FaUsers';
import { orderNumber } from '../commonFields';

export default {
  name: 'member',
  title: 'Member',
  type: 'document',
  icon: FaUsers,
  fields: [
    { ...orderNumber },
    {
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      name: 'headshot',
      title: 'Head Shot',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'headshot',
      cred: 'description',
    },
    prepare(selection) {
      const { title, cred } = selection;
      return { ...selection, title, subtitle: `${cred}` };
    },
  },
};
