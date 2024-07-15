'use client'
import { LinkObject, SectionHeading } from '../modules'
import { Box, Container, Flex, Heading } from '../utility'
import { ContactBlockProps } from '../../utils/types'
import { Map } from './Map'

// TODO: Create ContactBlock tests and stories

export const ContactBlock = (props: ContactBlockProps) => {
  const {
    className,
    testId,
    componentId,
    heading,
    subheading,
    googleMapsApiKey,
    marker,
    headingLevel,
    information,
    boxRadius,
    container,
    mapStyle,
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
            <Box>
              <SectionHeading
                heading={heading}
                subheading={subheading}
                headingLevel={headingLevel}
              />
              <Flex className="infoBox" direction="column" gap="sm">
                {information.address && (
                  <Box>
                    <Heading nonHeadingElement="p">Get Directions:</Heading>
                    <LinkObject
                      href={`https://www.google.com/maps/place/${information.address?.street}+${information.address?.city}+${information.address?.state}+${information.address?.zip}/`}
                    >
                      {`${information.address?.street}, ${information.address?.city}, ${information.address?.state} ${information.address?.zip}`}
                    </LinkObject>
                  </Box>
                )}
                {information.phone && (
                  <Box>
                    <Heading nonHeadingElement="p">Phone:</Heading>
                    <LinkObject href={`tel:${information.phone}`}>
                      {information.phone}
                    </LinkObject>
                  </Box>
                )}
                {information.email && (
                  <Box>
                    <Heading nonHeadingElement="p">Email:</Heading>
                    <LinkObject href={`mailto:${information.email}`}>
                      {information.email}
                    </LinkObject>
                  </Box>
                )}
                {information.hours && (
                  <Box>
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
                  </Box>
                )}
              </Flex>
            </Box>
          )}
          {marker && (
            <Box overflow radius={boxRadius}>
              <Map
                markers={[marker]}
                mapStyle={mapStyle}
                googleMapsApiKey={googleMapsApiKey}
              />
            </Box>
          )}
        </Flex>
      </Container>
    </section>
  )
}
