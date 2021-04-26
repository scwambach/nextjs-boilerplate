import HiOutlineUserGroup from '@meronex/icons/hi/HiOutlineUserGroup';
import { backgroundColor } from '../commonFields';

export default {
  name: 'membersList',
  title: 'Members List',
  type: 'object',
  icon: HiOutlineUserGroup,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    { ...backgroundColor },
  ],
};
