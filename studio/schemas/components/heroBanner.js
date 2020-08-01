import { FaImage } from 'react-icons/lib/fa';

export default {
  title: 'Hero Banner',
  name: 'heroBanner',
  type: 'object',
  icon: FaImage,
  fields: [
    {
      name: 'fullScreen',
      title: 'Full Screen',
      type: 'boolean',
    },
    {
      title: 'Parallax',
      name: 'parallax',
      type: 'boolean',
    },
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
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      title: 'Video URL',
      name: 'videoUrl',
      description: 'Choose either file or url for video.',
      type: 'url',
    },
    {
      title: 'Video File',
      name: 'video',
      description: 'Choose either file or url for video.',
      type: 'file',
    },
    {
      title: 'No Margin',
      name: 'noMargin',
      type: 'boolean',
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
