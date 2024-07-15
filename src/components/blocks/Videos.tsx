import { Button, SectionHeading } from '../modules'
import { VideoBlock } from '../modules/VideoBlock'
import { BlockWrapper, Container, Flex, Grid, Spacer } from '../utility'
import { VideosProps } from '../../utils/types'

export const Videos = ({
  button,
  className,
  columns = 2,
  componentId,
  container,
  gap = 'md',
  heading,
  boxRadius,
  items,
  headingLevel,
  subheading,
  testId,
  ...props
}: VideosProps) => {
  return (
    <BlockWrapper
      componentId={componentId}
      testId={testId}
      className={`videos${className ? ` ${className}` : ''}`}
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

        <Grid gap={gap} columns={columns}>
          {items.map((item, index) => (
            <VideoBlock
              key={item.url + index}
              {...item}
              boxRadius={boxRadius}
            />
          ))}
        </Grid>
        {button && (
          <>
            <Spacer size={2} />
            <Flex justifyContent="center" alignItems="center">
              <Button {...button} />
            </Flex>
          </>
        )}
      </Container>
    </BlockWrapper>
  )
}
