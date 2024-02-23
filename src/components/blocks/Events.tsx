import { Event } from '@components/modules/Event'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Flex } from '@components/utility'
import { Spacer } from '@components/utility'
import { EventsProps } from '@utils/types'
import { Fragment } from 'react'

export const Events = ({
  className,
  heading,
  subheading,
  level,
  items,
}: EventsProps) => {
  return (
    <div className={`events${className ? ` ${className}` : ''}`}>
      <div className="container narrower">
        {heading && (
          <SectionHeading
            heading={heading}
            level={level}
            subheading={subheading}
          />
        )}
        <Flex direction="column" fill gap="none" className="events-list">
          {items.map((item, index) => (
            <Fragment key={item.title + index}>
              {index > 0 && <Spacer size={1} divide />}
              <Event className="event" key={item.date + item.title} {...item} />
            </Fragment>
          ))}
        </Flex>
      </div>
    </div>
  )
}
