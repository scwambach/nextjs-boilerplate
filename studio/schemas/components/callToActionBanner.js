import { FaStar } from 'react-icons/lib/fa';

export default {
  title: 'Call to Action Banner',
  name: 'callToActionBanner',
  type: 'object',
  icon: FaStar,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Copy',
      name: 'copy',
      type: 'minimalContent'
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      validation: Rule => Rule.max(2),
      of: [
        {
          title: 'Link',
          name: 'link',
          type: 'link'
        }
      ],
    },
    {
      title: 'Backgroud Color',
      name: 'backgroundColor',
      type: 'colorList'
    },
    {
      title: 'Backgroud Image',
      name: 'ctaBackgroundImage',
      type: 'image'
    },
    {
      title: 'No Margin',
      name: 'noMargin',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      color: 'backgroundColor.hex'
    },
    prepare(selection) {
      const { title, color } = selection;
      return Object.assign({}, selection, {
        title: 'Call to Action Banner',
        subtitle: `${title}${color ? ` (${color})` : ''}`
      });
    }
  }
};
