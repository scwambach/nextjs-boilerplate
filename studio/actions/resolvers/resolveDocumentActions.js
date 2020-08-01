import defaultResolve from 'part:@sanity/base/document-actions'
import {PublishAction} from '../PublishAction'
import {DeployAction} from '../DeployAction'

export default function resolveDocumentActions(props) {
  const customResolvers = [PublishAction, DeployAction, ...defaultResolve(props)];
  const defaultResolvers = [...defaultResolve(props), DeployAction];

  return window.location.hostname === 'localhost' ? defaultResolvers : customResolvers
}
