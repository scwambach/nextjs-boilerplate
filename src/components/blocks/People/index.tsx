import { Person } from '@/components/modules'
import { SectionHeading } from '@/components/modules/SectionHeading'
import { BlockWrapper, Container, Grid } from '@/components/utility'
import { PeopleProps } from '@/utils/types'
import './styles.scss'

export const People = ({
  boxRadius,
  className,
  columns = 3,
  componentId,
  container,
  gap = 'sm',
  heading,
  items,
  headingLevel = 3,
  subheading,
  testId,
  ...props
}: PeopleProps) => {
  const renderedPeople = items.map((item, index) => {
    return <Person key={index} {...item} boxRadius={boxRadius} />
  })

  return (
    <BlockWrapper
      componentId={componentId}
      testId={testId}
      className={`people${className ? ` ${className}` : ''}`}
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
        <Grid columns={columns} gap={gap}>
          {renderedPeople}
        </Grid>
      </Container>
    </BlockWrapper>
  )
}
