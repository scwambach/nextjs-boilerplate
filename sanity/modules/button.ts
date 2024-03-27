import { icons } from '../icons'

export const button = {
  name: 'button',
  title: 'Button',
  type: 'object',
  fieldsets: [
    {
      name: 'settings',
      title: 'Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      fieldset: 'content',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      fieldset: 'settings',
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      fieldset: 'content',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Tertiary', value: 'tertiary' },
        ],
      },
    },
    {
      name: 'small',
      title: 'Small',
      type: 'boolean',
      fieldset: 'settings',
    },
    {
      name: 'disabled',
      title: 'Disabled',
      type: 'boolean',
      fieldset: 'settings',
    },
    {
      name: 'unstyled',
      title: 'Unstyled',
      type: 'boolean',
      fieldset: 'settings',
    },
    {
      name: 'ariaExpanded',
      title: 'Aria Expanded',
      type: 'boolean',
      fieldset: 'settings',
    },
    {
      name: 'ariaControls',
      title: 'Aria Controls',
      type: 'string',
      fieldset: 'settings',
    },
    {
      name: 'ariaLabel',
      title: 'Aria Label',
      type: 'string',
      fieldset: 'settings',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      fieldset: 'content',
      options: {
        list: icons,
      },
    },
    {
      name: 'suffixIcon',
      title: 'Suffix Icon',
      type: 'string',
      fieldset: 'content',
      options: {
        list: icons,
      },
    },
    {
      name: 'href',
      title: 'Href',
      type: 'url',
      fieldset: 'content',
      validation: (Rule: any) =>
        Rule.uri({
          allowRelative: true,
        }),
    },
  ],
}
