import FdPageMultiple from '@meronex/icons/fd/FdPageMultiple';
import {
  mainImage,
  objectTitle,
  pageContent,
  pageDescription,
  slug,
  slugWarning,
} from '../commonFields';

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: FdPageMultiple,
  fields: [
    { ...objectTitle },
    { ...slugWarning },
    { ...slug() },
    { ...mainImage },
    { ...pageContent },
    { ...pageDescription },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      slugObj: 'slug.current',
    },
    prepare(selection) {
      const { title, slugObj } = selection;
      return { ...selection, title, subtitle: `${slugObj}` };
    },
  },
};
