import { LinkObject } from './LinkObject'
import { ResponsiveImage } from './ResponsiveImage'

interface MediaCardProps {
  image?: {
    url: string
    lqip?: string
  }
  title: string
  description?: string
  url?: string
}

const Content = ({ image, title, description }: MediaCardProps) => {
  return (
    <>
      {image && (
        <div className="image">
          <ResponsiveImage
            src={image.url}
            lqip={image.lqip}
            isBackground
            alt={`Image for "${title}"`}
          />
        </div>
      )}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      <span className="link">Read More</span>
    </>
  )
}

const MediaCard = ({ image, title, description, url }: MediaCardProps) => {
  const cardProps = {
    image,
    title,
    description,
  }
  return url ? (
    <LinkObject url={url} className="media-card">
      <Content {...cardProps} />
    </LinkObject>
  ) : (
    <div className="media-card">
      <Content {...cardProps} />
    </div>
  )
}

export { MediaCard }
