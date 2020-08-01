import { FaEdit } from 'react-icons/lib/fa';

export default {
  title: 'Custom Fields',
  name: 'customFields',
  type: 'object',
  icon: FaEdit,
  fields: [
    {
      title: 'Fields',
      name: 'fields',
      type: 'array',
      of: [
        { title: 'Field', name: 'field', type: 'customField' },
      ],
    },
  ],
  preview: {
    select: {
      fields: 'fields'
    },
    prepare(selection) {
      const { fields } = selection;
      return Object.assign({}, selection, {
        title: 'Custom Fields',
        subtitle: `Number of fields: ${fields.length}`,
      });
    }
  }
};
