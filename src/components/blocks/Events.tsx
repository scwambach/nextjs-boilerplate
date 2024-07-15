import { Event } from '../modules/Event'
import { SectionHeading } from '../modules/SectionHeading'
import { BlockWrapper, Container, Flex } from '../utility'
import { Spacer } from '../utility'
import { EventsProps } from '../../utils/types'
import { Fragment } from 'react'

export const Events = ({
  className,
  componentId,
  container = 'narrower',
  heading,
  items,
  headingLevel,
  subheading,
  testId,
  boxRadius,
  ...props
}: EventsProps) => {
  return (
    <BlockWrapper
      componentId={componentId}
      testId={testId}
      className={`events${className ? ` ${className}` : ''}`}
      {...props}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            headingLevel={headingLevel}
            subheading={subheading}
          />
        )}
        <Flex direction="column" fill gap="none" className="events-list">
          {items.map((item, index) => (
            <Fragment key={item.title + index}>
              {index > 0 && <Spacer size={1} divide />}
              <Event
                className="event"
                key={item.date + item.title}
                {...item}
                boxRadius={boxRadius}
              />
            </Fragment>
          ))}
        </Flex>
      </Container>
    </BlockWrapper>
  )
}
