import { FaStar } from 'react-icons/lib/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Column Content',
  name: 'columnContent',
  type: 'object',
  icon: FaStar,
  fields: [
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'content', title: 'Content' },
        { name: 'columnSpacingStlyes', title: 'Spacing' },
        { name: 'columnBackgroundStyles', title: 'Background' },
      ],
      options: {
        layout: 'object',
      },
      fields: [
        {
          name: 'columnContent',
          title: 'Component Selector',
          type: 'array',
          fieldset: 'content',
          validation: Rule => Rule.min(1),
          of: [{ type: 'richText' }],
        },
        {
          name: 'paddingTop',
          title: 'Padding Top',
          type: 'number',
          fieldset: 'columnSpacingStlyes',
        },
        {
          name: 'paddingBottom',
          title: 'Padding Bottom',
          type: 'number',
          fieldset: 'columnSpacingStlyes',
        },
        {
          name: 'paddingLeft',
          title: 'Padding Left',
          type: 'number',
          fieldset: 'columnSpacingStlyes',
        },
        {
          name: 'paddingRight',
          title: 'Padding Right',
          type: 'number',
          fieldset: 'columnSpacingStlyes',
        },
        {
          name: 'marginTop',
          title: 'Margin Top',
          type: 'number',
          fieldset: 'columnSpacingStlyes',
        },
        {
          name: 'marginBottom',
          title: 'Margin Bottom',
          type: 'number',
          fieldset: 'columnSpacingStlyes',
        },
        {
          name: 'marginLeft',
          title: 'Margin Left',
          type: 'number',
          fieldset: 'columnSpacingStlyes',
        },
        {
          name: 'marginRight',
          title: 'Margin Right',
          type: 'number',
          fieldset: 'columnSpacingStlyes',
        },
        // Background Styles
        {
          name: 'backgroundImage',
          type: 'image',
          fieldset: 'columnBackgroundStyles',
          title: 'Background Image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'backgroundColor',
          type: 'color',
          fieldset: 'columnBackgroundStyles',
          title: 'Background color',
        },
        {
          name: 'fontColor',
          type: 'color',
          fieldset: 'columnBackgroundStyles',
          title: 'Font color',
        },
      ],
    },
  ],
  preview: {
    prepare(selection) {
      return Object.assign({}, selection, {
        title: 'Column Content',
      });
    },
  },
};
