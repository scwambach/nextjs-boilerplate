import { Colors, ComponentProps, ImageObjectProps } from '@utils/types'
import { ImageObject } from './ImageObject'

// TODO: Create VideoBackground tests and stories

interface VideoBackgroundProps extends ComponentProps {
  video: string
  image?: ImageObjectProps
  bgColor?: Colors
}

export const VideoBackground = ({
  className,
  bgColor,
  testId,
  componentId,
  video,
  image,
}: VideoBackgroundProps) => {
  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`videoBackground${className ? ` ${className}` : ''}`}
    >
      {bgColor && <div className={`overlay ${bgColor}`} />}
      <video autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        {image && <ImageObject {...image} />}
      </video>
    </div>
  )
}
