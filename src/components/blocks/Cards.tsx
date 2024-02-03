import { Card, CardProps } from '@components/modules/Card'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Flex } from '@components/utility'
import { BlockProps } from '@utils/types'

interface CardsProps extends BlockProps {
  items: CardProps[]
  gap?: number
}

export const Cards = ({
  items,
  className,
  gap,
  subheading,
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
      <Flex
        gap={gap}
        columnBreak="sm"
        breakpoint="md"
        fill
        justifyContent="center"
      >
        {renderedCards}
      </Flex>
    </div>
  )
}
