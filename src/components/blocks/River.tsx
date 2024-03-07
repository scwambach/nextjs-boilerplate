import { Button, ImageObject } from '@components/modules'
import { Box, Container, Flex, Heading, Markdown } from '@components/utility'
import { RiverProps } from '@utils/types'

export const River = ({
  className,
  componentId,
  container = 'narrow',
  headingLevel = 3,
  items,
  reverse,
  testId,
  theme = 'primary',
}: RiverProps) => {
  return (
    <Flex
      componentId={componentId}
      direction="column"
      elementTag="section"
      gap="sm"
      testId={testId}
      className={`river${className ? ` ${className}` : ''}`}
    >
      <Container containerClass={container}>
        <Flex direction="column" gap="sm">
          {items.map((item, index: number) => {
            const isEven = reverse ? index % 2 !== 0 : index % 2 === 0
            return (
              <Flex
                fill
                gap="sm"
                testId={testId ? `item-${index}` : undefined}
                direction={isEven ? 'row' : 'row-reverse'}
                alignItems="stretch"
                key={index + (item.title || item.description)}
              >
                <Box overflow className="image">
                  <ImageObject {...item.image} isBackground />
                </Box>
                <div className="copy">
                  <Heading level={headingLevel}>{item.title}</Heading>
                  <Markdown>{item.description}</Markdown>
                  {item.links && item.links.length > 0 && (
                    <div className="links">
                      {item.links.map((link, index) => (
                        <Button
                          theme={theme}
                          key={'river' + link.label + index}
                          {...link}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </Flex>
            )
          })}
        </Flex>
      </Container>
    </Flex>
  )
}
