import React from 'react';
import * as Icons from '@meronex/icons/ai';

const DynamicFaIcon = (name) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return <Icons.AiFillFire />;
  }

  return IconComponent;
};

export default {
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
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
