import HiOutlineUserGroup from '@meronex/icons/hi/HiOutlineUserGroup';

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
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'colorSelector',
    },
  ],
};
