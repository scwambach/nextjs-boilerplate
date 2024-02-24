import { Stat } from '@components/modules'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Container, Grid } from '@components/utility'
import { ColumnSize, StatsProps } from '@utils/types'

export const Stats = ({
  heading,
  level,
  subheading,
  className,
  container,
  items,
  testId,
  gap = 'xs',
}: StatsProps) => {
  const columns =
    items && items.length > 0 ? (items.length > 6 ? 6 : items.length) : 1

  return (
    <div
      data-testid={testId}
      className={`stats${className ? ` ${className}` : ''}`}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            level={level}
            subheading={subheading}
          />
        )}
        <Grid columns={columns as ColumnSize} gap={gap}>
          {items?.map((item, index) => (
            <Stat key={index + item.value} {...item} />
          ))}
        </Grid>
      </Container>
    </div>
  )
}
