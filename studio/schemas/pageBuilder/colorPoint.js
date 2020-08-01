import { FaStar } from 'react-icons/lib/fa';

export default {
  title: 'Color Point',
  name: 'colorPoint',
  type: 'object',
  icon: FaStar,
  fields: [
    {
      name: 'colorPoint',
      type: 'color',
      title: 'Color Point',
    },
    {
      name: 'percent',
      title: 'Percent',
      type: 'number',
    },
  ],
  preview: {
    prepare(selection) {
      return Object.assign({}, selection, {
        title: 'Color Point',
      });
    },
  },
};
