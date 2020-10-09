import { FaImage } from 'react-icons/fa';

export default {
  title: 'Hero Banner',
  name: 'staticHeroBanner',
  type: 'object',
  icon: FaImage,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Copy',
      name: 'copy',
      type: 'minimalContent',
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      validation: (Rule) => Rule.max(2),
      of: [
        {
          title: 'Link',
          name: 'link',
          type: 'link',
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'headingContent.heading',
      image: 'logo',
    },
    prepare(selection) {
      const { heading, image } = selection;
      return Object.assign({}, selection, {
        title: heading || 'Hero Banner',
        media: image,
      });
    },
  },
};
