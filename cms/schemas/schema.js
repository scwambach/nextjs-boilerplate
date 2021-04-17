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
import colorSelector from './modules/colorSelector';
import homePage from './docTypes/homePage';
import menu from './docTypes/menu';
import imageGallery from './components/imageGallery';
import twoColCopy from './components/twoColCopy';
import eventsList from './components/eventsList';
import formCreator from './components/formCreator';
import formField from './modules/formField';
import resource from './docTypes/resource';
import resourceCategory from './docTypes/resourceCategory';
import tiledLinks from './components/tiledLinks';
import tile from './modules/tile';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Doc Types
    siteSettings,
    menu,
    post,
    page,
    event,
    resource,
    homePage,

    // Taxonomies
    resourceCategory,
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
    formCreator,
    tiledLinks,

    // Reusable Objects
    link,
    tile,
    imageWText,
    menuItem,
    socialItem,
    colorSelector,
    formField,
  ]),
});
