import { ImageObject, SectionHeading } from '@components/modules'
import { Box, Container, Flex, Markdown, Portable } from '@components/utility'
import { headingFont } from '@utils/fonts'
import { TimelineProps } from '@utils/types'
import dayjs from 'dayjs'

export const Timeline = ({
  className,
  componentId,
  container,
  events,
  heading,
  headingLevel,
  subheading,
  testId,
  markdown,
}: TimelineProps) => {
  return (
    <section
      id={componentId}
      data-testid={testId}
      className={`timeline${className ? ` ${className}` : ''}`}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            headingLevel={headingLevel}
            subheading={subheading}
          />
        )}
        <div className="eventItems">
          {events.map((event) => (
            <div key={event.date} className="eventItem">
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
                      {markdown ? (
                        <Markdown>{event.description as string}</Markdown>
                      ) : (
                        <Portable content={event.description as any[]} />
                      )}
                    </div>
                  )}
                </div>
                {event.image && (
                  <Box overflow>
                    <ImageObject {...event.image} />
                  </Box>
                )}
              </Flex>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
