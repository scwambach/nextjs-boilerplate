import { CompareTable, SectionHeading } from '../modules'
import { BlockWrapper, Container, Flex } from '../utility'
import { CompareTablesProps } from '../../utils/types'

// TODO: Create CompareTables tests and stories

export const CompareTables = ({
  boxRadius,
  className,
  componentId,
  heading,
  headingLevel,
  items,
  overallTheme,
  subheading,
  testId,
  ...props
}: CompareTablesProps) => {
  return (
    <BlockWrapper
      componentId={componentId}
      testId={testId}
      className={`compareTables${className ? ` ${className}` : ''}`}
      {...props}
    >
      <Container containerClass="narrow">
        {heading && (
          <SectionHeading
            heading={heading}
            headingLevel={headingLevel}
            subheading={subheading}
          />
        )}
        <Flex
          gap="sm"
          alignItems="center"
          columnBreak="lg"
          justifyContent="center"
          fill
        >
          {items.map((item) => (
            <CompareTable
              {...item}
              boxRadius={boxRadius}
              key={item._key}
              theme={overallTheme || item.theme}
            />
          ))}
        </Flex>
      </Container>
    </BlockWrapper>
  )
}
