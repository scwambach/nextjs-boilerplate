import { Container, Grid, Markdown } from '@components/utility'
import {
  ColumnSize,
  ComponentProps,
  ContainerClasses,
  Gaps,
} from '@utils/types'

// TODO: Create RichText tests and stories

interface RichTextProps extends ComponentProps {
  centered?: boolean
  column2Copy?: string
  column3Copy?: string
  column4Copy?: string
  componentId?: string
  container?: ContainerClasses
  copy: string
  gap?: Gaps
}

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
  testId,
}: RichTextProps) => {
  const columnCount = [copy, column2Copy, column3Copy, column4Copy].filter(
    (column) => column
  ).length

  return (
    <section
      id={componentId}
      data-testid={testId}
      className={`richText${className ? ` ${className}` : ''}${
        centered ? ' centered' : ''
      }`}
    >
      <Container containerClass={container}>
        <Grid columns={columnCount as ColumnSize} gap={gap}>
          <Markdown>{copy}</Markdown>
          {column2Copy && <Markdown>{column2Copy}</Markdown>}
          {column3Copy && <Markdown>{column3Copy}</Markdown>}
          {column4Copy && <Markdown>{column4Copy}</Markdown>}
        </Grid>
      </Container>
    </section>
  )
}
