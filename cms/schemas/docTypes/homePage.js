import BiHome from '@meronex/icons/bi/BiHome';
import { mainImage, pageContent, pageDescription } from '../commonFields';

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: BiHome,
  fields: [{ ...mainImage }, { ...pageContent }, { ...pageDescription }],
};
