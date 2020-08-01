import { FaStar } from 'react-icons/lib/fa';

export default {
  title: 'Spacing',
  name: 'rowSpacing',
  type: 'object',
  icon: FaStar,
  fields: [
    {
      title: 'No Margin',
      name: 'noMargin',
      type: 'boolean',
    },
    {
      name: 'paddingTop',
      title: 'Padding Top',
      type: 'number',
    },
    {
      name: 'paddingBottom',
      title: 'Padding Bottom',
      type: 'number',
    },
  ],
  preview: {
    prepare(selection) {
      return Object.assign({}, selection, {
        title: 'Spacing',
      });
    },
  },
};
