import { MdLibraryBooks } from 'react-icons/lib/md';
import slugify from '../../../web/js/slugify';

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: MdLibraryBooks,
  fields: [
    {
      name: 'title',
      title: 'Title',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => `/${slugify(input)}`,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'transparentHeader',
      title: 'Transparent Header',
      type: 'boolean',
    },
    {
      name: 'pageContent',
      title: 'Page Content',
      type: 'array',
      validation: (Rule) => Rule.min(1),
      of: [
        { type: 'row' },
        { type: 'rowHalves' },
        { type: 'rowThirds' },
        { type: 'rowFourths' },
        { type: 'rowTwoThirds' },
        { type: 'rowThreeFourths' },
        { type: 'heroBanner' },
        { type: 'carousel' },
        { type: 'callToActionBanner' },
        { type: 'imageBlock' },
        { type: 'richText' },
        { type: 'imageFeatures' },
        { type: 'imageGallery' },
        { type: 'dataTable' },
        { type: 'sectionHeading' },
        { type: 'featureSlider' },
        { type: 'locationsList' },
        { type: 'codeBlock' },
        { type: 'curratedContent' },
        { type: 'eventListing' },
        { type: 'tiledLinks' },
        { type: 'logoGrid' },
      ],
    },
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      validation: (Rule) => Rule.max(80),
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      description: 'Keep it short and sweet!',
      validation: (Rule) => Rule.max(150).required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      slug: 'slug.current',
    },
    prepare(selection) {
      const { title, slug } = selection;
      return Object.assign({}, selection, {
        title,
        subtitle: `${slug}`,
      });
    },
  },
};
