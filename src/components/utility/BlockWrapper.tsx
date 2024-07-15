import { BlockProps, Elements } from '.././../utils/types'
import { Box } from './Box'
import { ReactNode } from 'react'
import { ImageObject } from '../modules'

interface BlockWrapperProps extends BlockProps {
  children?: ReactNode
  elementTag?: Elements
}

export const BlockWrapper = ({
  className,
  testId,
  componentId,
  children,
  bgColor,
  elementTag = 'section',
  backgroundImage,
}: BlockWrapperProps) => {
  return (
    <Box
      componentId={componentId}
      testId={testId}
      elementTag={elementTag}
      className={`blockWrapper${className ? ` ${className}` : ''}${
        bgColor ? ` ${bgColor}` : ''
      }${backgroundImage ? ` hasBgImage` : ''}${bgColor || backgroundImage ? ' padded' : ''}`}
    >
      {backgroundImage && <ImageObject {...backgroundImage} isBackground />}
      {children}
    </Box>
  )
}
