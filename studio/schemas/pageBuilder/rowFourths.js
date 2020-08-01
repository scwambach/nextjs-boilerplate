import { FaStar } from 'react-icons/lib/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Row - 4 x |25|',
  name: 'rowFourths',
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
        { name: 'column3', title: 'Column 3' },
        { name: 'column4', title: 'Column 4' },
        { name: 'spacing', title: 'Spacing' },
        { name: 'background', title: 'Background' },
      ],
      options: {
        layout: 'object',
      },

      fields: [
        // Content Columns
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
          name: 'column3',
          title: 'Column 3',
          type: 'columnContent',
          fieldset: 'column3',
        },
        {
          name: 'column4',
          title: 'Column 4',
          type: 'columnContent',
          fieldset: 'column4',
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
      ],
    },
  ],
  preview: {
    prepare(selection) {
      return Object.assign({}, selection, {
        title: 'Row - 4 x |25|',
      });
    },
  },
};
