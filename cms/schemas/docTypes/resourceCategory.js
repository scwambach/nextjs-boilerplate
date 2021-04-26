import AiFillStar from '@meronex/icons/ai/AiFillStar';
import {
  objectTitle,
  pageDescription,
  slug,
  slugWarning,
} from '../commonFields';

export default {
  name: 'resourceCategory',
  title: 'Resource Category',
  type: 'document',
  icon: AiFillStar,
  fields: [
    { ...objectTitle },
    { ...slugWarning },
    { ...slug('resource/category') },
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
