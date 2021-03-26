import MdcFormatColumns from '@meronex/icons/mdc/MdcFormatColumns';

export default {
  title: 'Two Column Copy',
  name: 'twoColCopy',
  type: 'object',
  icon: MdcFormatColumns,
  fields: [
    {
      title: 'Column 1 Copy',
      name: 'columnOneCopy',
      validation: (Rule) => Rule.required(),
      type: 'blockContent',
    },
    {
      title: 'Column 2 Copy',
      name: 'columnTwoCopy',
      validation: (Rule) => Rule.required(),
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'columnOneCopy.[0].children[0].text',
    },
    prepare(selection) {
      const { title } = selection;
      return { ...selection, title: 'Two Column Copy', subtitle: title };
    },
  },
};
