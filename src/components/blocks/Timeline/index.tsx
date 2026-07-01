import { ImageObject, SectionHeading } from '@components/modules'
import { Box, Container, Flex, Markdown, Portable } from '@components/utility'
import { TimelineProps } from '@utils/types'
import dayjs from 'dayjs'
import { getInnerRadius } from './logic'
import './styles.scss'

export const Timeline = ({
  boxRadius,
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
  const rounded = getInnerRadius(boxRadius)
  return (
    <Box
      elementTag="section"
      componentId={componentId}
      testId={testId}
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
        <Box className="eventItems">
          {events.map((event) => (
            <Box key={event.date} className="eventItem">
              <Box radius={boxRadius} className="inner">
                <Flex direction="column" gap="xxs">
                  <Box className="info">
                    <p className="year">{dayjs(event.date).format('YYYY')}</p>
                    <p className="date">
                      <span>{dayjs(event.date).format('MMM DD, YYYY')}</span>
                    </p>
                    <p className={`title `}>{event.title}</p>
                    {event.description && (
                      <Box className="description">
                        {markdown ? (
                          <Markdown>{event.description as string}</Markdown>
                        ) : (
                          <Portable content={event.description as any[]} />
                        )}
                      </Box>
                    )}
                  </Box>
                  {event.image && (
                    <Box overflow radius={rounded}>
                      <ImageObject {...event.image} />
                    </Box>
                  )}
                </Flex>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
