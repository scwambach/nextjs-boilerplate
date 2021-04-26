import MdEventNote from '@meronex/icons/md/MdEventNote';
import { backgroundColor } from '../commonFields';

export default {
  name: 'eventsList',
  title: 'EventsList',
  type: 'object',
  icon: MdEventNote,
  fields: [
    { ...backgroundColor },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
  ],
};
