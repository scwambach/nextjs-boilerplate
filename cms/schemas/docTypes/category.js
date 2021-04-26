import FiStar from '@meronex/icons/fi/FiStar';
import {
  objectTitle,
  pageDescription,
  slug,
  slugWarning,
} from '../commonFields';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: FiStar,
  fields: [
    { ...objectTitle },
    { ...slugWarning },
    { ...slug('category') },
    { ...pageDescription },
  ],
  preview: {
    select: {
      title: 'title',
      desc: 'description',
    },
    prepare(selection) {
      const { title, desc } = selection;
      return { ...selection, title, subtitle: desc };
    },
  },
};
