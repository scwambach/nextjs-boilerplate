import { MdSlideshow } from 'react-icons/lib/md';

export default {
  title: 'Feature Slider',
  name: 'featureSlider',
  type: 'object',
  icon: MdSlideshow,
  fields: [
    {
      title: 'Slides Visible',
      name: 'slidesVisible',
      type: 'number'
    },
    {
      title: 'Features',
      name: 'featureSlides',
      type: 'array',
      of: [
        {
          title: 'Feature',
          name: 'feature',
          type: 'feature'
        }
      ]
    },
    {
      title: 'No Margin',
      name: 'noMargin',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      slides: 'featureSlides'
    },
    prepare(selection) {
      const { slides } = selection;
      return Object.assign({}, selection, {
        title: 'Feature Slider',
        subtitle: `Slide count: ${slides.length}`
      });
    }
  }
};
