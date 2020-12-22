import { previewUrl } from './dashboardConfig';

export default function resolveProductionUrl(document) {
  const previewUrl =
    process.env.NODE_ENV === 'production'
      ? `../../${document?.slug?.current}?preview`
      : `http://localhost:3000/${document?.slug?.current}?preview`;
  return previewUrl;
}
