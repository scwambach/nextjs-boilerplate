import BsImage from '@meronex/icons/bs/BsImage';
import FaRegLightbulb from '@meronex/icons/fa/FaRegLightbulb';

export default {
  title: 'Hero Banner',
  name: 'heroBanner',
  type: 'object',
  icon: BsImage,
  fields: [
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gridNote2',
      type: 'note',
      options: {
        icon: FaRegLightbulb,
        headline: 'Pro Tip!',
        message:
          'If you leave the Background Image empty, it will inherit the "Main Image" field.',
        tone: 'positive',
      },
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
      title: 'Vimeo Video ID',
      name: 'vimeoVideoId',
      type: 'string',
    },
  ],
  preview: {
    select: {
      heading: 'headingContent.heading',
      image: 'logo',
    },
    prepare(selection) {
      const { heading, image } = selection;
      return { ...selection, title: heading || 'Hero Banner', media: image };
    },
  },
};
