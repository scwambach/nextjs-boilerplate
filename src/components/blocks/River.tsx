import { Button, ImageObject } from '@components/modules'
import { Container, Flex, Heading, Markdown } from '@components/utility'
import { RiverProps } from '@utils/types'

export const River = ({
  className,
  testId,
  container,
  items,
  headingLevel = 3,
  theme = 'primary',
}: RiverProps) => {
  return (
    <Flex
      direction="column"
      gap="sm"
      data-testid={testId}
      className={`river${className ? ` ${className}` : ''}`}
    >
      <Container containerClass={container}>
        {items.map((item, index: number) => {
          const isEven = index % 2 === 0
          return (
            <Flex
              fill
              gap="sm"
              testId={testId ? `item-${index}` : undefined}
              direction={isEven ? 'row' : 'row-reverse'}
              alignItems="stretch"
              key={index + (item.title || item.description)}
            >
              <div className="image">
                <ImageObject {...item.image} isBackground />
              </div>
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
      </Container>
    </Flex>
  )
}
