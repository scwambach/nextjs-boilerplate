import { Button, ImageObject, VideoBlock } from '../modules'
import {
  BlockWrapper,
  Box,
  Container,
  Flex,
  Heading,
  Markdown,
  Portable,
} from '../utility'
import { RiverProps } from '../../utils/types'

export const River = ({
  className,
  componentId,
  container = 'narrow',
  headingLevel = 3,
  items,
  reverse,
  testId,
  boxRadius,
  markdown,
  bgColor,
  theme = 'primary',
}: RiverProps) => {
  return (
    <BlockWrapper
      componentId={componentId}
      testId={testId}
      className={`river${className ? ` ${className}` : ''}`}
      bgColor={bgColor}
    >
      <Flex direction="column" gap="sm">
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
                  alignItems={item.video ? 'center' : 'stretch'}
                  key={item._key}
                >
                  <Box
                    overflow
                    className={item.video ? 'video' : 'image'}
                    radius={boxRadius}
                  >
                    {item.video ? (
                      <VideoBlock url={item.video.url} poster={item.image} />
                    ) : (
                      <ImageObject {...item.image} isBackground />
                    )}
                  </Box>
                  <Flex
                    direction="column"
                    justifyContent="center"
                    className="copy"
                    gap="none"
                  >
                    <Heading level={headingLevel}>{item.title}</Heading>
                    {markdown ? (
                      <Markdown>{item.description as string}</Markdown>
                    ) : (
                      <Portable content={item.description as any[]} />
                    )}
                    {item.links && item.links.length > 0 && (
                      <Box className="links">
                        {item.links.map((link, index) => (
                          <Button
                            theme={theme}
                            key={'river' + link.label + index}
                            {...link}
                          />
                        ))}
                      </Box>
                    )}
                  </Flex>
                </Flex>
              )
            })}
          </Flex>
        </Container>
      </Flex>
    </BlockWrapper>
  )
}
