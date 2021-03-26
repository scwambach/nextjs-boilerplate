import MdInput from '@meronex/icons/md/MdInput';

export default {
  name: 'formField',
  title: 'Form Field',
  type: 'object',
  icon: MdInput,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'fieldId',
      title: 'Field ID',
      type: 'string',
    },
    {
      name: 'required',
      title: 'Required',
      type: 'boolean',
    },
    {
      title: 'Input Type',
      name: 'inputType',
      type: 'string',
      options: {
        list: [
          { title: 'text', value: 'text' },
          { title: 'number', value: 'number' },
          { title: 'email', value: 'email' },
          { title: 'tel', value: 'tel' },
          { title: 'date', value: 'date' },
          { title: 'textarea', value: 'textarea' },
        ],
      },
    },
  ],

  preview: {
    select: {
      label: 'label',
      fieldId: 'fieldId',
      inputType: 'inputType',
    },
    prepare(selection) {
      const { label, fieldId, inputType } = selection;
      return {
        ...selection,
        title: label,
        subtitle: `${inputType} - ${fieldId}`,
      };
    },
  },
};
