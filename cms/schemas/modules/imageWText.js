import AiOutlineLink from '@meronex/icons/ai/AiOutlineLink';

export default {
  title: 'Image w/Text',
  name: 'imageWText',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Video',
      name: 'video',
      description:
        'Retrieve the YouTube ID "https://www.youtube.com/watch?v=YOUTUBE_ID_IS_HERE"',
      type: 'string',
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Copy',
      name: 'copy',
      type: 'simpleContent',
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
          icon: AiOutlineLink,
        },
      ],
    },
  ],
};
