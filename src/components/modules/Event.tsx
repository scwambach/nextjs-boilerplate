import { Flex } from '@components/utility'
import { Heading } from '@components/utility/Heading'
import { EventProps } from '@utils/types'
import { LinkObject } from './LinkObject'
import { Button } from './Button'

// TODO: Create Event component

export const Event = ({
  className,
  location,
  title,
  links,
  date,
}: EventProps) => {
  return (
    <div className={`event${className ? ` ${className}` : ''}`}>
      <Flex alignItems="flex-start" fill>
        <Flex alignItems="flex-start" className="details">
          <div className="date">{date}</div>
          <div className="info">
            <Heading level={4} nonHeadingElement="p">
              {title}
            </Heading>
            {location && (
              <>
                <p>{location.name}</p>
                {location.address && (
                  <LinkObject
                    href={`https://www.google.com/maps/place/${location.address}`}
                  >
                    <small>{location.address}</small>
                  </LinkObject>
                )}
              </>
            )}
          </div>
        </Flex>
        {links && links.length > 0 && (
          <Flex className="links" justifyContent="flex-end">
            {links.map((link) => (
              <Button
                type="link"
                key={link.label}
                href={link.href}
                label={link.label}
              />
            ))}
          </Flex>
        )}
      </Flex>
    </div>
  )
}
