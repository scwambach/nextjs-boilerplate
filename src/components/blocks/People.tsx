import { Person } from '@components/modules'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Grid } from '@components/utility'
import { ColumnSize, BlockProps, Gaps, PersonProps } from '@utils/types'

export interface PeopleProps extends BlockProps {
  items: PersonProps[]
  columns?: ColumnSize
  gap?: Gaps
}

export const People = ({
  className,
  items,
  columns = 3,
  subheading,
  heading,
  level = 3,
  gap = 'sm',
}: PeopleProps) => {
  const renderedPeople = items.map((item, index) => {
    return <Person key={index} {...item} />
  })

  return (
    <div className={`people${className ? ` ${className}` : ''}`}>
      {heading && (
        <SectionHeading
          heading={heading}
          level={level}
          subheading={subheading}
        />
      )}
      <Grid columns={columns} gap={gap}>
        {renderedPeople}
      </Grid>
    </div>
  )
}
