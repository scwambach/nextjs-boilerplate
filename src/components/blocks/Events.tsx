import { Event } from '@components/modules/Event'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Flex } from '@components/utility'
import { EventsProps } from '@utils/types'

// TODO: Create Events tests and stories

export const Events = ({
  className,
  heading,
  subheading,
  level,
  items,
}: EventsProps) => {
  return (
    <div className={`events${className ? ` ${className}` : ''}`}>
      {heading && (
        <SectionHeading
          heading={heading}
          level={level}
          subheading={subheading}
        />
      )}
      <Flex direction="column" gap="md" fill className="events-list">
        {items.map((item) => (
          <Event className="event" key={item.date + item.title} {...item} />
        ))}
      </Flex>
    </div>
  )
}
