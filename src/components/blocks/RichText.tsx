import { Container, Grid, Markdown, Portable } from '@components/utility'
import { ColumnSize, RichTextProps } from '@utils/types'

// TODO: Create RichText tests and stories

export const RichText = ({
  centered,
  className,
  column2Copy,
  column3Copy,
  column4Copy,
  componentId,
  container = 'normal',
  copy,
  gap = 'sm',
  markdown,
  testId,
}: RichTextProps) => {
  const columnCount = [copy, column2Copy, column3Copy, column4Copy].filter(
    (column) => column
  ).length as ColumnSize

  return (
    <section
      id={componentId}
      data-testid={testId}
      className={`richText${className ? ` ${className}` : ''}${
        centered ? ' centered' : ''
      }`}
    >
      <Container containerClass={container}>
        <Grid columns={columnCount} gap={gap}>
          {markdown ? (
            <>
              <Markdown>{copy as string}</Markdown>
              {column2Copy && <Markdown>{column2Copy as string}</Markdown>}
              {column3Copy && <Markdown>{column3Copy as string}</Markdown>}
              {column4Copy && <Markdown>{column4Copy as string}</Markdown>}
            </>
          ) : (
            <>
              <Portable content={copy as any[]} />
              {column2Copy && <Portable content={column2Copy as any[]} />}
              {column3Copy && <Portable content={column3Copy as any[]} />}
              {column4Copy && <Portable content={column4Copy as any[]} />}
            </>
          )}
        </Grid>
      </Container>
    </section>
  )
}
