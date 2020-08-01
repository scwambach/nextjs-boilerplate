import { FaCalendar } from 'react-icons/lib/fa';

export default {
  title: 'Events',
  name: 'eventListing',
  type: 'object',
  icon: FaCalendar,
  fields: [
    {
      title: 'No Margin',
      name: 'noMargin',
      type: 'boolean',
      description: 'Since this content is dynamic and doesn\'t require any addtional content, flip this switch to on or off to add it to the page.',
      validation: Rule => Rule.required(),
    }
  ],
  preview: {
    select: {},
    prepare(selection) {
      return Object.assign({}, selection, {
        title: 'Events List'
      });
    }
  }
};
