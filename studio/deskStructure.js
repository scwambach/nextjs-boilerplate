import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { TiHome } from 'react-icons/lib/ti';
import {
  MdLibraryBooks,
  MdBuild,
  MdCreate,
  MdSettings,
} from 'react-icons/lib/md';
import { FaStar, FaSort } from 'react-icons/lib/fa';
import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';
import { previewUrl } from './dashboardConfig';

const hiddenTypes = [
  'siteSettings',
  'category',
  'homePage',
  'aboutPage',
  'page',
  'post',
  'event',
  'menu',
];

const PreviewModule = ({ url }) => {
  return (
    <>
      <a
        style={{
          display: 'block',
          textDecoration: 'none',
          textAlign: 'right',
          fontSize: '12px',
          position: 'fixed',
          zIndex: '431',
          right: '20px',
          top: '107px',
          border: '1px solid',
          padding: '0 5px',
        }}
        href={url}
        target="_blank"
      >
        New tab
      </a>
      <div className="container" style={{ height: '100%' }}>
        <iframe
          src={url}
          frameBorder={0}
          style={{ width: '100%', height: '100%', overflow: 'hidden' }}
        />
      </div>
    </>
  );
};

const WebPreview = ({ document }) => {
  return (
    <PreviewModule
      document={document}
      url={previewUrl + `?docid=${document.displayed._id}&listing=0`}
    />
  );
};

const ListingPreview = ({ document }) => {
  return (
    <PreviewModule
      document={document}
      url={previewUrl + `?docid=${document.displayed._id}&listing=1`}
    />
  );
};

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form().icon(EditIcon),
      S.view.component(WebPreview).title('Web Preview').icon(EyeIcon),
      S.view.component(ListingPreview).title('Listing Preview').icon(EyeIcon),
    ]);
  } else if (schemaType !== 'event') {
    return S.document().views([
      S.view.form().icon(EditIcon),
      S.view.component(WebPreview).title('Web Preview').icon(EyeIcon),
    ]);
  }
};

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .child(
                  S.editor()
                    .title('Home Page')
                    .id('homePage')
                    .schemaType('homePage')
                    .documentId('homePage')
                    .views([
                      S.view.form().icon(EditIcon),
                      S.view
                        .component(WebPreview)
                        .title('Web Preview')
                        .icon(EyeIcon),
                    ])
                )
                .icon(TiHome),
              S.listItem()
                .title('About Page')
                .child(
                  S.editor()
                    .title('About Page')
                    .id('aboutPage')
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                    .views([
                      S.view.form().icon(EditIcon),
                      S.view
                        .component(WebPreview)
                        .title('Web Preview')
                        .icon(EyeIcon),
                    ])
                )
                .icon(MdLibraryBooks),
              S.listItem()
                .title('Page Builder')
                .schemaType('page')
                .child(S.documentTypeList('page'))
                .icon(MdBuild),
            ])
        )
        .icon(MdLibraryBooks),
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('All Posts')
                .schemaType('post')
                .child(S.documentTypeList('post')),
              S.listItem()
                .title('Sorted Posts')
                .schemaType('post')
                .child(
                  S.documentTypeList('post')
                    .filter('_type == "category"')
                    .child((id) =>
                      S.documentList()
                        .title('Posts by category')
                        .schemaType('post')
                        .filter('_type == "post" && $id in categories[]._ref')
                        .params({ id })
                    )
                )
                .icon(FaSort),
              S.listItem()
                .title('Categories')
                .schemaType('category')
                .child(S.documentTypeList('category'))
                .icon(FaStar),
            ])
        )
        .icon(MdCreate),
      S.listItem()
        .title('Events')
        .schemaType('event')
        .child(S.documentTypeList('event')),
      S.listItem()
        .title('Navigation')
        .schemaType('menu')
        .child(S.documentTypeList('menu')),
      S.listItem()
        .title('Global Settings')
        .child(
          S.editor()
            .title('Global Settings')
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      // S.listItem()
      //   .title('Assets')
      //   .child(
      //     S.list()
      //       .title('Assets')
      //       .items([
      //         S.listItem()
      //           .title('Image Library')
      //           .child(S.documentTypeList('sanity.imageAsset')),
      //         S.listItem()
      //           .title('File Library')
      //           .child(S.documentTypeList('sanity.fileAsset')),
      //       ])
      //   ),
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);