import GiTeacher from '@meronex/icons/gi/GiTeacher';

export default {
  name: 'member',
  title: 'Member',
  type: 'document',
  icon: GiTeacher,
  fields: [
    {
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      name: 'headshot',
      title: 'Head Shot',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'headshot',
      cred: 'crendentials',
    },
    prepare(selection) {
      const { title, cred } = selection;
      return { ...selection, title, subtitle: `${cred[0]}` };
    },
  },
};
