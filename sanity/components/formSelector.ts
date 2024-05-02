import {
  forms,
  groups,
  headingProps,
  settingsProps,
  widths,
} from '../docTypes/common'

export const formSelector = {
  name: 'formSelector',
  title: 'Form Selector',
  type: 'object',
  groups,
  fields: [
    ...headingProps({ group: 'content' }),
    ...settingsProps({}),
    {
      name: 'container',
      group: 'settings',
      title: 'Container',
      type: 'string',
      options: {
        list: widths,
      },
    },
    {
      name: 'formName',
      title: 'Form Name',
      type: 'string',
      group: 'content',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: forms,
      },
    },
    {
      name: 'submitCopy',
      title: 'Submit Copy',
      type: 'string',
      group: 'content',
    },
  ],
}
