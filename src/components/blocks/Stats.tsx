import { Stat } from '@components/modules'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Grid } from '@components/utility'
import { BlockProps, ColumnSize, Gaps, StatProps } from '@utils/types'

export interface StatsProps extends BlockProps {
  items: StatProps[]
  gap?: Gaps
}

export const Stats = ({
  heading,
  level,
  subheading,
  className,
  items,
  gap = 'xs',
}: StatsProps) => {
  const columns =
    items && items.length > 0 ? (items.length > 6 ? 6 : items.length) : 1

  return (
    <div className={`stats${className ? ` ${className}` : ''}`}>
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
    </div>
  )
}
