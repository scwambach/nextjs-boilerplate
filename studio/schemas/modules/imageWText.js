export default {
  title: 'Image w/Text',
  name: 'imageWText',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true
      }
    },
    {
      title: 'Parallax',
      name: 'parallax',
      type: 'boolean'
    },
    {
      title: 'Video',
      name: 'video',
      description:
        'Retrieve the YouTube ID "https://www.youtube.com/watch?v=YOUTUBE_ID_IS_HERE"',
      type: 'string'
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Copy',
      name: 'copy',
      type: 'simpleContent'
    },
    {
      title: 'Link',
      name: 'link',
      type: 'link'
    }
  ]
};
