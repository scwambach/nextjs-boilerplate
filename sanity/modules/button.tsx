import { RadioButton } from '@phosphor-icons/react'
import { icons } from '../icons'
import { IconSelector } from '@components/utility'
import { themes } from '../docTypes/common'

export const button = {
  name: 'button',
  title: 'Button',
  type: 'object',
  groups: [
    {
      name: 'settings',
      title: 'Settings',
    },
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
  ],
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      group: 'content',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'href',
      title: 'Href',
      type: 'url',
      group: 'content',
      validation: (Rule: any) =>
        Rule.uri({
          allowRelative: true,
        }).required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      group: 'settings',
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      group: 'content',
      options: {
        list: themes,
      },
    },
    {
      name: 'small',
      title: 'Small',
      type: 'boolean',
      group: 'settings',
    },
    {
      name: 'disabled',
      title: 'Disabled',
      type: 'boolean',
      group: 'settings',
    },
    {
      name: 'unstyled',
      title: 'Unstyled',
      type: 'boolean',
      group: 'settings',
    },
    {
      name: 'ariaExpanded',
      title: 'Aria Expanded',
      type: 'boolean',
      group: 'settings',
    },
    {
      name: 'ariaControls',
      title: 'Aria Controls',
      type: 'string',
      group: 'settings',
    },
    {
      name: 'ariaLabel',
      title: 'Aria Label',
      type: 'string',
      group: 'settings',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      group: 'content',
      options: {
        list: icons,
      },
    },
    {
      name: 'suffixIcon',
      title: 'Suffix Icon',
      type: 'string',
      group: 'content',
      options: {
        list: icons,
      },
    },
  ],
  preview: {
    select: {
      label: 'label',
      theme: 'theme',
      icon: 'icon',
      suffix: 'suffixIcon',
    },
    prepare(selection: any) {
      const { label, theme, icon, suffix } = selection

      const mediaIcon = icon || suffix

      return {
        title: label || 'Button',
        subtitle: `${label ? 'Button ' : ''}${theme || 'Primary'}${
          icon ? ` with ${icon}` : ''
        }`,
        media: mediaIcon ? <IconSelector icon={mediaIcon} /> : RadioButton,
      }
    },
  },
}
