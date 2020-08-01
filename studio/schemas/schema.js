/* eslint-disable import/no-unresolved, import/extensions */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import siteSettings from './docTypes/siteSettings';
import blockContent from './modules/blockContent';
import simpleContent from './modules/simpleContent';
import minimalContent from './modules/minimalContent';

import post from './docTypes/post';
import category from './docTypes/category';
import page from './docTypes/page';
import menu from './docTypes/menu';

import richText from './components/richText';
import imageFeatures from './components/imageFeatures';
import imageGallery from './components/imageGallery';
import sectionHeading from './components/sectionHeading';
import heroBanner from './components/heroBanner';

import link from './modules/link';
import imageWText from './modules/imageWText';
import menuItem from './modules/menuItem';
import socialItem from './modules/socialItem';
import iconSelector from './modules/iconSelector';
import colorList from './modules/colorList';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Settings
    siteSettings,

    // Post Types
    post,
    page,
    menu,

    // Taxonomies
    category,

    // Flexible Content
    richText,
    imageFeatures,
    imageGallery,
    sectionHeading,
    heroBanner,
    blockContent,
    simpleContent,
    minimalContent,

    // Reusable Objects
    link,
    imageWText,
    menuItem,
    socialItem,
    iconSelector,
    colorList,
  ]),
});
