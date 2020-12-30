import BsImage from '@meronex/icons/bs/BsImage';

export default {
  title: 'Hero Banner',
  name: 'staticHeroBanner',
  type: 'object',
  icon: BsImage,
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
      return Object.assign({}, selection, {
        title: heading || 'Hero Banner',
        media: image,
      });
    },
  },
};
