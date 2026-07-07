import { Stat } from '@/components/modules'
import { SectionHeading } from '@/components/modules/SectionHeading'
import { BlockWrapper, Container, Grid } from '@/components/utility'
import { StatsProps } from '@/utils/types'
import { getStatsColumns } from './logic'
import './styles.scss'

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
  const columns = getStatsColumns(items)

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
        <Grid columns={columns} gap={gap}>
          {items?.map((item, index) => (
            <Stat key={index + item.value} {...item} boxRadius={boxRadius} />
          ))}
        </Grid>
      </Container>
    </BlockWrapper>
  )
}
