/* eslint-disable import/no-unresolved, import/extensions */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import siteSettings from './docTypes/siteSettings';
import blockContent from './modules/blockContent';
import simpleContent from './modules/simpleContent';
import minimalContent from './modules/minimalContent';

import post from './docTypes/post';
import category from './docTypes/category';
import user from './docTypes/user';
import page from './docTypes/page';
import meta from './modules/meta';
import location from './docTypes/location';
import event from './docTypes/event';
import menu from './docTypes/menu';
import product from './docTypes/product';
import productCategory from './docTypes/productCategory';

import callToActionBanner from './components/callToActionBanner';
import imageBlock from './components/imageBlock';
import richText from './components/richText';
import imageFeatures from './components/imageFeatures';
import imageGallery from './components/imageGallery';
import dataTable from './components/dataTable';
import locationsList from './components/locationsList';
import codeBlock from './components/codeBlock';
import featureSlider from './components/featureSlider';
import curratedContent from './components/curratedContent';
import eventListing from './components/eventListing';
import sectionHeading from './components/sectionHeading';
import heroBanner from './components/heroBanner';
import carousel from './components/carousel';
import tiledLinks from './components/tiledLinks';
import logoGrid from './components/logoGrid';

import link from './modules/link';
import imageWText from './modules/imageWText';
import menuItem from './modules/menuItem';
import headingContent from './modules/headingContent';
import socialItem from './modules/socialItem';
import field from './modules/field';
import textarea from './modules/textarea';
import fields from './modules/fields';
import feature from './modules/feature';
import slide from './modules/slide';
import iconSelector from './modules/iconSelector';
import colorList from './modules/colorList';
import tile from './modules/tile';

import customFields from './components/product/customFields';
import customField from './components/product/customField';
import option from './components/product/option';
import logoGridItem from './modules/logoGridItem';
import row from './pageBuilder/row';
import rowHalves from './pageBuilder/rowHalves';
import columnContent from './pageBuilder/columnContent';
import colorPoint from './pageBuilder/colorPoint';
import gradientBuilder from './pageBuilder/gradientBuilder';
import spacing from './pageBuilder/spacing';
import background from './pageBuilder/background';
import rowThirds from './pageBuilder/rowThirds';
import rowFourths from './pageBuilder/rowFourths';
import rowTwoThirds from './pageBuilder/rowTwoThirds';
import rowThreeFourths from './pageBuilder/rowThreeFourths';
import rowSpacing from './pageBuilder/rowSpacing';
import columnObject from './pageBuilder/columnObject';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Settings
    siteSettings,
    meta,

    // Post Types
    post,
    page,
    user,
    menu,
    location,
    event,
    product,
    productCategory,

    // Taxonomies
    category,

    // Flexible Content
    callToActionBanner,
    imageBlock,
    richText,
    blockContent,
    imageFeatures,
    imageGallery,
    dataTable,
    locationsList,
    featureSlider,
    codeBlock,
    curratedContent,
    eventListing,
    simpleContent,
    minimalContent,
    tiledLinks,
    logoGrid,

    // Banners
    carousel,
    heroBanner,

    // Reusable Objects
    link,
    imageWText,
    menuItem,
    headingContent,
    socialItem,
    field,
    textarea,
    sectionHeading,
    fields,
    feature,
    slide,
    iconSelector,
    colorList,
    tile,
    logoGridItem,

    // Product Attributes
    customFields,
    customField,
    option,

    // Page Builder
    columnObject,
    rowSpacing,
    spacing,
    background,
    columnContent,
    gradientBuilder,
    colorPoint,
    row,
    rowHalves,
    rowThirds,
    rowFourths,
    rowTwoThirds,
    rowThreeFourths,
  ]),
});
