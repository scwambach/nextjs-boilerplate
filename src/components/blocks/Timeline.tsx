import { ImageObject } from '@components/modules'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Flex } from '@components/utility'
import { Markdown } from '@components/utility/Markdown'
import { headingFont } from '@utils/fonts'
import { BlockProps, ImageObjectProps } from '@utils/types'
import dayjs from 'dayjs'

export interface TimelineProps extends BlockProps {
  events: {
    date: string
    title: string
    description?: string
    image?: ImageObjectProps
  }[]
}

export const Timeline = ({
  heading,
  level,
  events,
  subheading,
  className,
}: TimelineProps) => {
  return (
    <div className={`timeline${className ? ` ${className}` : ''}`}>
      {heading && (
        <SectionHeading
          heading={heading}
          level={level}
          subheading={subheading}
        />
      )}
      <div className="events">
        {events.map((event) => (
          <div key={event.date} className="event">
            <Flex className="inner" direction="column" gap="xxs">
              <div className="info">
                <p className="year">{dayjs(event.date).format('YYYY')}</p>
                <p className="date">
                  <span>{dayjs(event.date).format('MMM DD, YYYY')}</span>
                </p>
                <p className={`title ${headingFont.className}`}>
                  {event.title}
                </p>
                {event.description && (
                  <div className="description">
                    <Markdown>{event.description}</Markdown>
                  </div>
                )}
              </div>
              {event.image && <ImageObject {...event.image} />}
            </Flex>
          </div>
        ))}
      </div>
    </div>
  )
}
