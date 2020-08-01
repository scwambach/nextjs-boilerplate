import { FaStar } from 'react-icons/lib/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Row - |100|',
  name: 'row',
  type: 'object',
  icon: FaStar,
  fields: [
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'content', title: 'Columns' },
        { name: 'spacing', title: 'Spacing' },
        { name: 'background', title: 'Background' },
      ],
      options: {
        layout: 'object',
      },

      fields: [
        {
          name: 'columns',
          title: 'Columns',
          type: 'array',
          fieldset: 'content',
          validation: Rule => Rule.min(1).max(4),
          of: [{ type: 'columnContent' }],
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
        title: 'Row - |100|',
      });
    },
  },
};
