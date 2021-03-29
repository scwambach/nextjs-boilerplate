import BsImages from '@meronex/icons/bs/BsImages';
import BsImage from '@meronex/icons/bs/BsImage';

export default {
  title: 'Image Gallery',
  name: 'imageGallery',
  type: 'object',
  icon: BsImages,
  fields: [
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      icon: BsImage,
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          validation: (Rule) => Rule.required(),
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'colorSelector',
    },
  ],
  preview: {
    select: {
      image: 'gallery[0].asset',
    },
    prepare(selection) {
      const { image } = selection;
      return { ...selection, title: 'Image Gallery', media: image };
    },
  },
};
