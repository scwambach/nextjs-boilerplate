import { Flag } from '@phosphor-icons/react'
import {
  colors,
  groups,
  headingProps,
  settingsProps,
  widths,
} from '../docTypes/common'

export const banner = {
  name: 'banner',
  title: 'Banner',
  type: 'object',
  groups,
  fields: [
    ...headingProps({ group: 'content' }),
    ...settingsProps({}),
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
      name: 'contained',
      title: 'Contained',
      group: 'settings',
      hidden: ({ parent }: any) => parent?.overlap,
      type: 'boolean',
    },
    {
      name: 'overlap',
      title: 'Overlap',
      group: 'settings',
      hidden: ({ parent }: any) => parent?.contained,
      type: 'boolean',
    },
    {
      name: 'micro',
      title: 'Micro',
      hidden: ({ parent }: any) => !parent?.contained,
      group: 'settings',
      type: 'boolean',
      description:
        'Enabling this will make the banner much smaller, used for things like mid-page callouts.',
    },
    {
      name: 'containedWidth',
      hidden: ({ parent }: any) => !parent?.contained,
      title: 'Contained Width',
      group: 'settings',
      type: 'string',
      options: {
        list: widths,
      },
    },
    {
      name: 'boxBgColor',
      title: 'Box Background Color',
      group: 'settings',
      hidden: ({ parent }: any) => !parent?.contained,
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
      type: 'image',
      options: {
        hotspot: true,
      },
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
