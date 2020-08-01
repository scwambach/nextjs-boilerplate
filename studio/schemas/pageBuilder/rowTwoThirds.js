import { FaStar } from 'react-icons/lib/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Row - |66|33|',
  name: 'rowTwoThirds',
  type: 'object',
  icon: FaStar,
  fields: [
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'column1', title: 'Column 1' },
        { name: 'column2', title: 'Column 2' },
        { name: 'spacing', title: 'Spacing' },
        { name: 'background', title: 'Background' },
        { name: 'settings', title: 'Settings' },
      ],
      options: {
        layout: 'object',
      },

      fields: [
        {
          name: 'column1',
          title: 'Column 1',
          type: 'columnContent',
          fieldset: 'column1',
        },
        {
          name: 'column2',
          title: 'Column 2',
          type: 'columnContent',
          fieldset: 'column2',
        },
        {
          title: 'Spacing',
          name: 'rowSpacing',
          type: 'rowSpacing',
          fieldset: 'spacing',
        },
        {
          title: 'Background',
          name: 'background',
          type: 'background',
          fieldset: 'background',
        },
        {
          name: 'flip',
          name: 'Flip',
          fieldset: 'settings',
          type: 'boolean',
        },
      ],
    },
  ],
  preview: {
    prepare(selection) {
      return Object.assign({}, selection, {
        title: 'Row - |66|33|',
      });
    },
  },
};
