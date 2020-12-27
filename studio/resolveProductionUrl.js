import { appUrl } from './dashboardConfig';

export default function resolveProductionUrl(document) {
  const previewUrl =
    process.env.NODE_ENV === 'production'
      ? `${appUrl}/${document.displayed?.slug?.current}?preview`
      : `${appUrl}/${
          document.displayed._type === 'aboutPage'
            ? 'about'
            : document.displayed._type === 'homePage'
            ? ''
            : document.displayed?.slug?.current
        }?preview`;
  return previewUrl;
}
