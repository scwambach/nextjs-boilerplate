import AiFillWarning from '@meronex/icons/ai/AiFillWarning';

export const slugify = (string) => {
  const a =
    'àáäâãåăæąçćčđďèéěėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
  const b =
    'aaaaaaaaacccddeeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(p, (c) => b.charAt(a.indexOf(c)))
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const objectTitle = {
  name: 'title',
  title: 'Title',
  type: 'string',
  validation: (Rule) => Rule.required(),
};

export const mainImage = {
  name: 'mainImage',
  title: 'Main image',
  type: 'image',
  options: {
    hotspot: true,
  },
};

export const pageContent = {
  name: 'pageContent',
  title: 'Page Content',
  type: 'array',
  of: [
    { type: 'eventsList' },
    { type: 'formCreator' },
    { type: 'heroBanner' },
    { type: 'imageFeatures' },
    { type: 'imageGallery' },
    { type: 'membersList' },
    { type: 'richText' },
    { type: 'tiledLinks' },
    { type: 'twoColCopy' },
  ],
};

export const pageDescription = {
  name: 'pageDescription',
  title: 'Page Description',
  validation: (Rule) => Rule.required(),
  description:
    'For optimal search and sharing, please provide a breif description of the page. Use the "Social & SEO" preview tab at the top to see changes.',
  type: 'text',
  rows: 4,
};

export const slugWarning = {
  name: 'gridNote2',
  type: 'note',
  options: {
    icon: AiFillWarning,
    headline: 'Hold up!',
    message:
      'Please do not type your own slug in the Slug field. Just click "Generate" button.',
    tone: 'caution',
  },
};

export const slug = (prefix) => ({
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  validation: (Rule) => Rule.required(),
  options: {
    source: 'title',
    maxLength: 96,
    slugify: (input) =>
      prefix ? `${prefix}/${slugify(input)}` : slugify(input),
  },
});

export const backgroundColor = {
  name: 'backgroundColor',
  title: 'Background Color',
  type: 'colorSelector',
};

export const orderNumber = {
  name: 'order',
  title: 'Order',
  type: 'number',
  hidden: true,
};
