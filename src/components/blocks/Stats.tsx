import { Stat } from '../modules'
import { SectionHeading } from '../modules/SectionHeading'
import { BlockWrapper, Container, Grid } from '../utility'
import { ColumnSize, StatsProps } from '../../utils/types'

export const Stats = ({
  boxRadius,
  className,
  componentId,
  container,
  gap = 'xs',
  heading,
  headingLevel,
  items,
  subheading,
  testId,
  ...props
}: StatsProps) => {
  const columns =
    items && items.length > 0 ? (items.length > 6 ? 6 : items.length) : 1

  return (
    <BlockWrapper
      componentId={componentId}
      testId={testId}
      className={`stats${className ? ` ${className}` : ''}`}
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
        <Grid columns={columns as ColumnSize} gap={gap}>
          {items?.map((item, index) => (
            <Stat key={index + item.value} {...item} boxRadius={boxRadius} />
          ))}
        </Grid>
      </Container>
    </BlockWrapper>
  )
}
