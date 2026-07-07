// Mock for react-player package
import React from 'react'

const ReactPlayer = React.forwardRef((props, ref) => {
  return React.createElement('div', {
    'data-testid': 'react-player',
    ref,
    ...props,
  })
})

ReactPlayer.displayName = 'ReactPlayer'

export default ReactPlayer
