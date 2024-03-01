import { Button, SectionHeading } from '@components/modules'
import { VideoBlock } from '@components/modules/VideoBlock'
import { Container, Flex, Grid, Spacer } from '@components/utility'
import { VideosProps } from '@utils/types'

export const Videos = ({
  className,
  testId,
  heading,
  level,
  subheading,
  items,
  button,
  columns = 2,
  container,
  gap = 'md',
}: VideosProps) => {
  return (
    <section
      data-testid={testId}
      className={`videos${className ? ` ${className}` : ''}`}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            level={level}
            subheading={subheading}
          />
        )}

        <Grid gap={gap} columns={columns}>
          {items.map((item, index) => (
            <VideoBlock key={item.url + index} {...item} />
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
    </section>
  )
}
