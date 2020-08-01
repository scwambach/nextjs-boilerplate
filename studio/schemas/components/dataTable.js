import { FaTable } from 'react-icons/lib/fa';

export default {
  title: 'Data Table',
  name: 'dataTable',
  type: 'object',
  icon: FaTable,
  fields: [
    {
      title: 'Table',
      name: 'tableObject',
      type: 'table',
    },
    {
      title: 'No Margin',
      name: 'noMargin',
      type: 'boolean'
    },
  ],
  preview: {
    select: {
      title: 'table',
    },
    prepare(selection) {
      return Object.assign({}, selection, {
        title: 'Data Table',
      });
    },
  },
};
