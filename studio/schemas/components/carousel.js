import { MdSlideshow } from 'react-icons/lib/md';

export default {
  title: 'Carousel',
  name: 'carousel',
  type: 'object',
  icon: MdSlideshow,
  fields: [
    {
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [
        {
          title: 'Slide',
          name: 'slide',
          type: 'slide',
        },
      ],
    },
    {
      title: 'No Margin',
      name: 'noMargin',
      type: 'boolean'
    },
  ],
  preview: {
    select: {
      slides: 'slides',
    },
    prepare(selection) {
      const {
        slides,
      } = selection;
      return Object.assign({}, selection, {
        title: 'Carousel',
        subtitle: `Slide count: ${slides.length}`,
      });
    },
  },
};
