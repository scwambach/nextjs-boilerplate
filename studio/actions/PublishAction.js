import {useDocumentOperation} from '@sanity/react-hooks'
import { useEffect, useState } from 'react';
import { MdSave } from 'react-icons/lib/md';

function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}

export function PublishAction(props) {
  const {publish} = useDocumentOperation(props.id, props.type)
  const [isPublishing, setIsPublishing] = useState(false)

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false)
    }
  }, [props.draft])
  return {
    icon: MdSave,
    disabled: publish.disabled,
    label: `Save ${toTitleCase(props.type)}`,
    onHandle: () => {
      publish.execute();
    }
  }
}
