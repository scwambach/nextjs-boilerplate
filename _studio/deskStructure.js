import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import FaCogs from '@meronex/icons/fa/FaCogs';
import SuCreate from '@meronex/icons/su/SuCreate';
import FiStar from '@meronex/icons/fi/FiStar';
import BiSort from '@meronex/icons/bi/BiSort';
import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';
import RiPagesLine from '@meronex/icons/ri/RiPagesLine';
import FdPageMultiple from '@meronex/icons/fd/FdPageMultiple';
import BiHome from '@meronex/icons/bi/BiHome';
import AiOutlineBuild from '@meronex/icons/ai/AiOutlineBuild';

const remoteURL = 'https://sandbachs.vercel.app';
const localURL = 'http://localhost:3000';

const appUrl = window.location.hostname === 'localhost' ? localURL : remoteURL;

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

const PreviewModule = ({ url }) => (
  <div className="container" style={{ height: '100%' }}>
    <iframe
      title="Preview"
      src={url}
      frameBorder={0}
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}
    />
  </div>
);

const WebPreview = ({ document }) => {
  const previewUrl = `${appUrl}/${document.displayed?.slug?.current}?preview`;
  return <PreviewModule document={document} url={previewUrl} />;
};

const HomePreview = () => {
  const previewUrl = `${appUrl}/?preview`;

  return <PreviewModule document={document} url={previewUrl} />;
};
const AboutPreview = () => {
  const previewUrl = `${appUrl}/about?preview`;

  return <PreviewModule document={document} url={previewUrl} />;
};

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (
    schemaType !== 'event' &&
    schemaType !== 'category' &&
    schemaType !== 'menu'
  ) {
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
            .title('Page Types')
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
                        .component(HomePreview)
                        .title('Web Preview')
                        .icon(EyeIcon),
                    ])
                )
                .icon(BiHome),
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
                        .component(AboutPreview)
                        .title('Web Preview')
                        .icon(EyeIcon),
                    ])
                )
                .icon(RiPagesLine),
              S.listItem()
                .title('Page Builder')
                .schemaType('page')
                .child(S.documentTypeList('page').title('Pages'))
                .icon(AiOutlineBuild),
            ])
        )
        .icon(FdPageMultiple),
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
                .icon(BiSort),
              S.listItem()
                .title('Categories')
                .schemaType('category')
                .child(S.documentTypeList('category'))
                .icon(FiStar),
            ])
        )
        .icon(SuCreate),
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
        .icon(FaCogs),
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
