import { ImageObject, SectionHeading } from '../modules'
import { Box, Container, Flex, Markdown, Portable } from '../utility'
import { TimelineProps } from '../../utils/types'
import dayjs from 'dayjs'
import { Radius } from '../../utils/types/types'

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
  // const rounded = boxRadius === 4 ? boxRadius : boxRadius ? boxRadius - 4 : undefined
  const rounded =
    boxRadius === 4 ? boxRadius : boxRadius ? boxRadius - 4 : undefined
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
                    <Box overflow radius={rounded as Radius}>
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
