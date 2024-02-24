import { Button, SectionHeading } from '@components/modules'
import { VideoBlock } from '@components/modules/VideoBlock'
import { Flex, Grid, Spacer } from '@components/utility'
import {
  BlockProps,
  ButtonProps,
  ColumnSize,
  Gaps,
  VideoBlockProps,
} from '@utils/types'

// TODO: Create Videos stories and tests

interface VideosProps extends BlockProps {
  items: VideoBlockProps[]
  columns?: ColumnSize
  gap?: Gaps
  button?: ButtonProps
}

export const Videos = ({
  className,
  testId,
  heading,
  level,
  subheading,
  items,
  button,
  columns = 2,
  gap = 'md',
}: VideosProps) => {
  return (
    <div
      data-testid={testId}
      className={`videos${className ? ` ${className}` : ''}`}
    >
      <div className="container">
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
      </div>
    </div>
  )
}
