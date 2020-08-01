import { FaMapMarkedAlt } from 'react-icons/lib/fa';

export default {
  title: 'Locations',
  name: 'locationsList',
  type: 'object',
  icon: FaMapMarkedAlt,
  fields: [
    {
      title: 'Alternate Layout',
      name: 'alternateLayout',
      description: 'Since this content is dynamic and doesn\'t require any addtional content, flip one of the switches to on or off to add it to the page.',
      type: 'boolean',
    },
    {
      title: 'No Margin',
      name: 'noMargin',
      description: 'Since this content is dynamic and doesn\'t require any addtional content, flip one of the switches to on or off to add it to the page.',
      type: 'boolean',
    }
  ],
  preview: {
    select: {},
    prepare(selection) {
      return Object.assign({}, selection, {
        title: 'All Locations'
      });
    }
  }
};
