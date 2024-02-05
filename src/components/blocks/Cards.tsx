import { Card, CardProps } from '@components/modules/Card'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Grid } from '@components/utility'
import { BlockProps, GridProps } from '@utils/types'

interface CardsProps extends BlockProps {
  items: CardProps[]
  gap?: number
  columns?: GridProps['columns']
}

export const Cards = ({
  items,
  className,
  gap,
  subheading,
  columns,
  heading,
  level = 3,
}: CardsProps) => {
  const renderedCards = items.map((item, index) => {
    return <Card key={index} {...item} />
  })

  return (
    <div className={`cards${className ? ` ${className}` : ''}`}>
      {heading && (
        <SectionHeading
          heading={heading}
          level={level}
          subheading={subheading}
        />
      )}
      <Grid gap={gap} columns={columns}>
        {renderedCards}
      </Grid>
    </div>
  )
}
