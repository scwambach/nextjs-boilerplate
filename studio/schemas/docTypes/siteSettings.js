import { MdSettings } from 'react-icons/lib/md';

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish'],
  icon: MdSettings,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'mainLogo',
      title: 'Main Logo',
      type: 'image'
    },
    {
      title: 'Socials',
      name: 'socialList',
      type: 'array',
      of: [
        {
          title: 'Social Item',
          name: 'socialItem',
          type: 'socialItem'
        }
      ]
    },
    {
      title: 'Alert Bar',
      name: 'alertBar',
      type: 'simpleContent'
    },
    {
      title: 'Copyright',
      name: 'copyright',
      type: 'string'
    },
    {
      title: 'Main Email',
      name: 'mainEmail',
      type: 'string'
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string'
    },
    {
      title: 'Street',
      name: 'street',
      type: 'string'
    },
    {
      title: 'City State Zip',
      name: 'cityStateZip',
      type: 'string',
      description: 'City, ST 12345'
    }
  ]
};
