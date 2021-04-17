import MdEventNote from '@meronex/icons/md/MdEventNote';
import MdEventAvailable from '@meronex/icons/md/MdEventAvailable';

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: MdEventNote,
  fields: [
    {
      name: 'title',
      title: 'Title',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'LL',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Reoccuring Dates',
      name: 'reoccuringDates',
      type: 'array',
      icon: MdEventAvailable,
      of: [
        {
          title: 'Date',
          name: 'date',
          type: 'date',
          validation: (Rule) => Rule.required(),
          options: {
            dateFormat: 'LL',
            calendarTodayLabel: 'Today',
          },
        },
      ],
    },
    {
      title: 'Time',
      name: 'time',
      type: 'string',
    },
    {
      title: 'Location Name',
      name: 'locationName',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      title: 'Street',
      name: 'street',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      title: 'City, State, and Zip',
      name: 'cityStateZip',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Keep it short and sweet!',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Link',
      name: 'link',
      validation: (Rule) => Rule.required(),
      type: 'url',
    },
  ],

  preview: {
    select: {
      title: 'title',
      link: 'link',
    },
    prepare(selection) {
      const { title, link } = selection;
      return { ...selection, title, subtitle: `${link}` };
    },
  },
};
