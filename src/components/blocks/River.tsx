import { Button, ImageObject } from '@components/modules'
import { Flex } from '@components/utility'
import { Heading } from '@components/utility/Heading'
import { Markdown } from '@components/utility/Markdown'
import { RiverProps } from '@utils/types'

export const River = ({
  className,
  testId,
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
    </Flex>
  )
}
