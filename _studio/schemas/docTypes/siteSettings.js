import FaCogs from '@meronex/icons/fa/FaCogs';

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish'],
  icon: FaCogs,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'mainLogo',
      title: 'Main Logo',
      type: 'image',
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    },
    {
      name: 'siteImage',
      title: 'Site Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Socials',
      name: 'socialList',
      type: 'array',
      of: [
        {
          title: 'Social Item',
          name: 'socialItem',
          type: 'socialItem',
        },
      ],
    },
    {
      title: 'Alert Bar',
      name: 'alertBar',
      type: 'simpleContent',
    },
    {
      title: 'Copyright',
      name: 'copyright',
      type: 'string',
    },
  ],
};
