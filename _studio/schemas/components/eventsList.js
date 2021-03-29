import MdEventNote from '@meronex/icons/md/MdEventNote';

export default {
  name: 'eventsList',
  title: 'EventsList',
  type: 'object',
  icon: MdEventNote,
  fields: [
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'colorSelector',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
  ],
};
