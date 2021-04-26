import * as Icons from '@meronex/icons/ai';

const DynamicFaIcon = (name) => {
  const IconComponent = Icons[name];

  return IconComponent;
};

export default {
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'string',
      options: {
        list: [
          { title: 'facebook', value: 'AiFillFacebook' },
          { title: 'twitter', value: 'AiOutlineTwitter' },
          { title: 'youtube', value: 'AiFillYoutube' },
          { title: 'instagram', value: 'AiOutlineInstagram' },
        ],
      },
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'link',
      icon: 'icon',
    },
    prepare(selection) {
      const { title, icon } = selection;
      return {
        title,
        media: DynamicFaIcon(icon),
      };
    },
  },
};
