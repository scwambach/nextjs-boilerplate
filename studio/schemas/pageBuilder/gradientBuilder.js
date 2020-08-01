import { FaStar } from 'react-icons/lib/fa';

export default {
  title: 'Gradient Builder',
  name: 'gradientBuilder',
  type: 'object',
  icon: FaStar,
  fields: [
    {
      name: 'gradientColors',
      title: 'Gradient Colors',
      type: 'array',
      of: [
        {
          name: 'colorPoint',
          type: 'colorPoint',
          title: 'Color Point',
        },
      ],
    },
  ],
  preview: {
    prepare(selection) {
      return Object.assign({}, selection, {
        title: 'Gradient Builder',
      });
    },
  },
};
