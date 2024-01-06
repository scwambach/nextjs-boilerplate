import { highlighter } from '@utils/highlighter'
import { LinkObject } from './LinkObject'
import { ResponsiveImage } from './ResponsiveImage'

interface MediaCardProps {
  description?: string
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6
  image?: {
    height?: number
    lqip?: string
    query?: string
    url?: string
    width?: number
  }
  index?: number
  title: string
  url?: string
}

const Content = ({
  image,
  headingLevel = 3,
  title,
  index,
  description,
}: MediaCardProps) => {
  const Heading = `h${headingLevel}` as keyof JSX.IntrinsicElements
  return (
    <>
      {image && (
        <div className="image">
          <ResponsiveImage
            src={image.url}
            query={image.query ? `${image.query} ${index}` : undefined}
            lqip={image.lqip}
            width={image.width}
            height={image.height}
            isBackground
            alt={`Image for "${title}"`}
          />
        </div>
      )}
      {title && (
        <Heading
          dangerouslySetInnerHTML={{
            __html: highlighter(title),
          }}
        />
      )}
      {description && (
        <p
          dangerouslySetInnerHTML={{
            __html: highlighter(description),
          }}
        />
      )}
      <span className="link">Read More</span>
    </>
  )
}

export const MediaCard = ({
  description,
  image,
  index,
  title,
  url,
}: MediaCardProps) => {
  const cardProps = {
    description,
    image,
    index,
    title,
  }
  return url ? (
    <article>
      <LinkObject url={url} className="media-card">
        <Content {...cardProps} />
      </LinkObject>
    </article>
  ) : (
    <article className="media-card">
      <Content {...cardProps} />
    </article>
  )
}
