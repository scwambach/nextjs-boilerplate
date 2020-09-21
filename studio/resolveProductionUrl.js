import { previewUrl } from './dashboardConfig';

export default function resolveProductionUrl(document) {
  return `${previewUrl}?docid=${document._id}`;
}
