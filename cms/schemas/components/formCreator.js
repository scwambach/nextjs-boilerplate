import MdFormatListBulleted from '@meronex/icons/md/MdFormatListBulleted';
import { backgroundColor } from '../commonFields';

export default {
  name: 'formCreator',
  title: 'Form Creator',
  type: 'object',
  icon: MdFormatListBulleted,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Form Recipient',
      name: 'formRecipient',
      type: 'email',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'minimalContent',
    },
    {
      name: 'showSocials',
      title: 'Show Socials',
      type: 'boolean',
    },
    {
      name: 'columns',
      title: 'Two Column Layout',
      type: 'boolean',
    },
    {
      title: 'Fields',
      name: 'fields',
      type: 'array',
      of: [
        {
          title: 'Field',
          name: 'formField',
          type: 'formField',
        },
      ],
    },
    {
      name: 'submitButtonCopy',
      title: 'Submit Button Copy',
      type: 'string',
    },
    {
      name: 'thankYouMessage',
      title: 'Thank You Message',
      type: 'text',
      rows: 4,
    },
    {
      name: 'errorMessage',
      title: 'Error Message',
      type: 'text',
      rows: 4,
    },
    { ...backgroundColor },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return { ...selection, title };
    },
  },
};
