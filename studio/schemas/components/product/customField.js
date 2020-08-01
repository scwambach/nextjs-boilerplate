import { FaEdit } from 'react-icons/lib/fa';

export default {
  title: 'Custom Field',
  name: 'customField',
  type: 'object',
  icon: FaEdit,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    { title: 'Required', name: 'required', type: 'boolean' },
    {
      title: 'Visibility',
      name: 'visibility',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'Cart and Page', value: 'cartAndPage' },
          { title: 'Cart only', value: 'cartOnly' },
          { title: 'Page only', value: 'pageOnly' },
        ],
      },
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'text', value: 'text' },
          { title: 'textarea', value: 'textarea' },
          { title: 'boolean', value: 'boolean' },
          { title: 'select', value: 'select' },
        ],
      },
    },
    {
      itle: 'Options',
      name: 'options',
      description: 'this only applies if using "select" type',
      type: 'array',
      of: [
        {
          title: 'Option',
          name: 'option',
          type: 'option',
        },
      ],
    },
  ],
  preview: {
    select: {
      name: 'name',
      type: 'type',
      options: 'options',
    },
    prepare(selection) {
      const { name, type, options } = selection;

      let optionsString = '';

      if (type === 'select') {
        options.forEach((element, index) => {
          optionsString += `${element.label}${
            index + 1 !== options.length ? ' | ' : ''
          }`;
        });
      } else if (type === 'boolean') {
        optionsString += 'true | false';
      }

      return Object.assign({}, selection, {
        title: name + ' - type: ' + type,
        subtitle: optionsString !== '' && 'Options: ' + optionsString,
      });
    },
  },
};
