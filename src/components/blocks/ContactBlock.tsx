'use client'
import { LinkObject, SectionHeading } from '@components/modules'
import { Container, Flex, Heading } from '@components/utility'
import { ContactBlockProps } from '@utils/types'
import { Map } from './Map'

// TODO: Create ContactBlock tests and stories

export const ContactBlock = (props: ContactBlockProps) => {
  const {
    className,
    testId,
    componentId,
    heading,
    subheading,
    marker,
    level,
    information,
    container,
  } = props
  return (
    <section
      id={componentId}
      data-testid={testId}
      className={`contactBlock${className ? ` ${className}` : ''}`}
    >
      <Container containerClass={container}>
        <Flex fill gap="md" alignItems="center" justifyContent="center">
          {(heading || subheading) && (
            <div>
              <SectionHeading
                heading={heading}
                subheading={subheading}
                level={level}
              />
              <Flex className="infoBox" direction="column" gap="sm">
                {information.address && (
                  <div>
                    <Heading nonHeadingElement="p">Get Directions:</Heading>
                    <LinkObject
                      href={`https://www.google.com/maps/place/${information.address?.street}+${information.address?.city}+${information.address?.state}+${information.address?.zip}/`}
                    >
                      {`${information.address?.street}, ${information.address?.city}, ${information.address?.state} ${information.address?.zip}`}
                    </LinkObject>
                  </div>
                )}
                {information.phone && (
                  <div>
                    <Heading nonHeadingElement="p">Phone:</Heading>
                    <LinkObject href={`tel:${information.phone}`}>
                      {information.phone}
                    </LinkObject>
                  </div>
                )}
                {information.email && (
                  <div>
                    <Heading nonHeadingElement="p">Email:</Heading>
                    <LinkObject href={`mailto:${information.email}`}>
                      {information.email}
                    </LinkObject>
                  </div>
                )}
                {information.hours && (
                  <div>
                    <Heading nonHeadingElement="p">Hours:</Heading>

                    <Flex
                      direction="column"
                      gap="micro"
                      className="unstyled"
                      elementTag="ul"
                    >
                      {information.hours.map((hour, index) => (
                        <li key={index}>
                          <strong>{hour.days}:</strong> {hour.hours}
                        </li>
                      ))}
                    </Flex>
                  </div>
                )}
              </Flex>
            </div>
          )}
          {marker && <Map markers={[marker]} />}
        </Flex>
      </Container>
    </section>
  )
}
