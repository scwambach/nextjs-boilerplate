import { FaStar } from 'react-icons/lib/fa';

export default {
  icon: FaStar,
  title: 'Social Item',
  name: 'socialItem',
  type: 'object',
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'string',
    }, {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
  ],
};
