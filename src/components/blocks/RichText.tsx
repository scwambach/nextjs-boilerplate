import { BlockWrapper, Container, Grid, Markdown } from '../utility'
import { ColumnSize, RichTextProps } from '../../utils/types'

// TODO: Create RichText tests and stories

export const RichText = ({
  centered,
  elementTag = 'section',
  className,
  column2Copy,
  column3Copy,
  column4Copy,
  componentId,
  container = 'normal',
  copy,
  gap = 'sm',
  testId,
  bgColor,
}: RichTextProps) => {
  const columnCount = [copy, column2Copy, column3Copy, column4Copy].filter(
    (column) => column
  ).length as ColumnSize

  return (
    <BlockWrapper
      componentId={componentId}
      testId={testId}
      elementTag={elementTag}
      className={`richText${className ? ` ${className}` : ''}${
        centered ? ' centered' : ''
      }`}
      bgColor={bgColor}
    >
      <Container containerClass={container}>
        <Grid columns={columnCount} gap={gap}>
          <>
            <Markdown>{copy as string}</Markdown>
            {column2Copy && <Markdown>{column2Copy as string}</Markdown>}
            {column3Copy && <Markdown>{column3Copy as string}</Markdown>}
            {column4Copy && <Markdown>{column4Copy as string}</Markdown>}
          </>
        </Grid>
      </Container>
    </BlockWrapper>
  )
}
