import GrResources from '@meronex/icons/gr/GrResources';
import VscFilePdf from '@meronex/icons/vsc/VscFilePdf';
import BiLinkExternal from '@meronex/icons/bi/BiLinkExternal';
import FdPageMultiple from '@meronex/icons/fd/FdPageMultiple';
import AiFillStar from '@meronex/icons/ai/AiFillStar';

export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  icon: GrResources,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'minimalContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'resourceCategories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'resourceCategory' } }],
      icon: AiFillStar,
      validation: (Rule) => Rule.min(1),
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
    },
    {
      title: 'Internal Page',
      name: 'internalPage',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'post' }],
    },
    {
      name: 'pdf',
      title: 'PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      pdf: 'pdf',
      externalLink: 'externalLink',
      internalLink: 'internalLink',
    },
    prepare(selection) {
      const { title, pdf, externalLink } = selection;
      return {
        ...selection,
        title,
        media: externalLink
          ? BiLinkExternal
          : pdf
          ? VscFilePdf
          : FdPageMultiple,
      };
    },
  },
};
