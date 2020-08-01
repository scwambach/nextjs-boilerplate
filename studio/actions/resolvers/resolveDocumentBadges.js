import defaultResolve from 'part:@sanity/base/document-badges'
import {NetlifyStatusBadge} from '../NetlifyStatusBadge'

export default function resolveDocumentBadges(props) {
  return [...defaultResolve(props), NetlifyStatusBadge];
}
