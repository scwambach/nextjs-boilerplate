import { FaCode } from 'react-icons/lib/fa';

export default {
  title: 'Code Block',
  name: 'codeBlock',
  type: 'object',
  icon: FaCode,
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'code',
      description: 'Only setup for HTML, CSS, and JavaScript'
      // options: {
      //   language: 'html',
      //   languageAlternatives: ['html', 'css', 'javascript'],
      // },
    },
    {
      title: 'No Margin',
      name: 'noMargin',
      type: 'boolean'
    },
  ],
  preview: {
    select: {
      code: 'code',
    },
    prepare(selection) {
      const { code } = selection;
      return Object.assign({}, selection, {
        title: 'Code Block',
        subtitle: code.language
      });
    },
  },
};
