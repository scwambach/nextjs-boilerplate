import { Person } from '@components/modules'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Grid } from '@components/utility'
import { PeopleProps } from '@utils/types'

export const People = ({
  className,
  items,
  columns = 3,
  subheading,
  heading,
  testId,
  level = 3,
  gap = 'sm',
}: PeopleProps) => {
  const renderedPeople = items.map((item, index) => {
    return <Person key={index} {...item} />
  })

  return (
    <div
      data-testid={testId}
      className={`people${className ? ` ${className}` : ''}`}
    >
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
