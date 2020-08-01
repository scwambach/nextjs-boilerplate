import { MdLocationOn } from 'react-icons/lib/md';

export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  icon: MdLocationOn,
  fields: [
    {
      name: 'title',
      title: 'Title',
      validation: Rule => Rule.required(),
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Location',
      name: 'location',
      type: 'geopoint',
    },
    {
      title: 'Street',
      name: 'street',
      validation: Rule => Rule.required(),
      type: 'string',
    },
    {
      title: 'City, State, and Zip',
      name: 'cityStateZip',
      validation: Rule => Rule.required(),
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
      street: 'street',
      cityStateZip: 'cityStateZip',
    },
    prepare(selection) {
      const {
        title, street, cityStateZip,
      } = selection;
      return Object.assign({}, selection, {
        title,
        subtitle: `${street} ${cityStateZip}`,
      });
    },
  },
};
