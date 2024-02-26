import { Button } from '@components/modules'
import { Card } from '@components/modules/Card'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Container, Flex, Grid, Spacer } from '@components/utility'
import { CardsProps } from '@utils/types'

export const Cards = ({
  items,
  className,
  gap = 'xs',
  subheading,
  columns,
  heading,
  container,
  level = 3,
  testId,
  button,
}: CardsProps) => {
  const renderedCards = items.map((item, index) => {
    return <Card key={index} {...item} />
  })

  return (
    <div
      data-testid={testId}
      className={`cards${className ? ` ${className}` : ''}`}
    >
      <Container containerClass={container}>
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
        {button && (
          <>
            <Spacer size={2} />
            <Flex justifyContent="center" alignItems="center">
              <Button {...button} />
            </Flex>
          </>
        )}
      </Container>
    </div>
  )
}
