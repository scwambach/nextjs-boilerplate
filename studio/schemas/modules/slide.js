import { FaDotCircle } from 'react-icons/lib/fa';

export default {
  title: 'Slide',
  name: 'slide',
  type: 'object',
  icon: FaDotCircle,
  fields: [
    {
      title: 'Heading Content',
      name: 'headingContent',
      type: 'headingContent'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: 'Parallax',
      name: 'parallax',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'headingContent.heading',
      path: 'image.asset.originalFilename',
      image: 'image'
    },
    prepare(selection) {
      const { title, path } = selection;
      return Object.assign({}, selection, {
        title,
        subtitle: path,
        media: 'image'
      });
    }
  }
};
