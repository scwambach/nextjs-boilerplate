import { FaStar } from 'react-icons/lib/fa';

export default {
  title: 'Spacing',
  name: 'spacing',
  type: 'object',
  icon: FaStar,
  fields: [
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
    {
      name: 'paddingLeft',
      title: 'Padding Left',
      type: 'number',
    },
    {
      name: 'paddingRight',
      title: 'Padding Right',
      type: 'number',
    },
    {
      name: 'marginTop',
      title: 'Margin Top',
      type: 'number',
    },
    {
      name: 'marginBottom',
      title: 'Margin Bottom',
      type: 'number',
    },
    {
      name: 'marginLeft',
      title: 'Margin Left',
      type: 'number',
    },
    {
      name: 'marginRight',
      title: 'Margin Right',
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
