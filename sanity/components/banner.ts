import { Flag } from '@phosphor-icons/react'
import { colors, headingProps, widths } from '../docTypes/common'

export const banner = {
  name: 'banner',
  title: 'Banner',
  type: 'object',
  groups: [
    {
      name: 'settings',
      title: 'Settings',
    },
    {
      name: 'common',
      title: 'Common',
    },
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
  ],
  fields: [
    ...headingProps({ group: 'content' }),
    {
      name: 'contained',
      title: 'Contained',
      group: 'settings',
      type: 'boolean',
    },
    {
      name: 'overlap',
      title: 'Overlap',
      group: 'settings',
      type: 'boolean',
    },
    {
      name: 'micro',
      title: 'Micro',
      group: 'settings',
      type: 'boolean',
      description:
        'Enabling this will make the banner much smaller, used for things like mid-page callouts.',
    },
    {
      name: 'containedWidth',
      title: 'Contained Width',
      group: 'settings',
      type: 'string',
      options: {
        list: widths,
      },
    },
    {
      name: 'bgColor',
      group: 'settings',
      title: 'Background Color',
      type: 'string',
      options: {
        list: colors,
      },
    },
    {
      name: 'boxBgColor',
      title: 'Box Background Color',
      group: 'settings',
      description:
        'This is the background color of the inner box, but only works when `contained` is active.',
      type: 'string',
      options: {
        list: colors,
      },
    },
    {
      name: 'links',
      title: 'Links',
      group: 'content',
      type: 'array',
      of: [{ type: 'button' }],
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      group: 'content',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'foregroundMedia',
      title: 'Foreground Media',
      group: 'content',
      type: 'reference',
      to: [{ type: 'image' }],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
      backgroundImage: 'backgroundImage',
    },
    prepare(selection: any) {
      return {
        title: selection.heading || selection.subheading,
        subtitle: 'Banner',
        media: Flag || selection.backgroundImage,
      }
    },
  },
}
