import { Colors, ComponentProps, ImageObjectProps } from '@utils/types'
import { ImageObject } from '../ImageObject'
import './styles.scss'

export interface VideoBackgroundProps extends ComponentProps {
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
      aria-hidden="true"
      className={`videoBackground${className ? ` ${className}` : ''}`}
    >
      {bgColor && <div className={`overlay ${bgColor}`} />}
      <video autoPlay loop muted playsInline className="video">
        <source src={video} type="video/mp4" />
      </video>
      {image && (
        <ImageObject {...image} isBackground className="fallbackImage" />
      )}
    </div>
  )
}
