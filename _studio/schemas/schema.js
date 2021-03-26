/* eslint-disable import/no-unresolved, import/extensions */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './modules/blockContent';
import simpleContent from './modules/simpleContent';
import minimalContent from './modules/minimalContent';

import siteSettings from './docTypes/siteSettings';
import post from './docTypes/post';
import category from './docTypes/category';
import page from './docTypes/page';
import event from './docTypes/event';

import richText from './components/richText';
import imageFeatures from './components/imageFeatures';
import heroBanner from './components/heroBanner';

import link from './modules/link';
import imageWText from './modules/imageWText';
import menuItem from './modules/menuItem';
import socialItem from './modules/socialItem';
import iconSelector from './modules/iconSelector';
import homePage from './docTypes/homePage';
import menu from './docTypes/menu';
import imageGallery from './components/imageGallery';
import twoColCopy from './components/twoColCopy';
import eventsList from './components/eventsList';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Doc Types
    siteSettings,
    menu,
    post,
    page,
    event,
    homePage,

    // Taxonomies
    category,

    // Page Components
    richText,
    twoColCopy,
    imageFeatures,
    heroBanner,
    imageGallery,
    eventsList,
    blockContent,
    simpleContent,
    minimalContent,

    // Reusable Objects
    link,
    imageWText,
    menuItem,
    socialItem,
    iconSelector,
  ]),
});
