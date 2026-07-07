import { Button, SectionHeading } from '@/components/modules'
import { BlockWrapper, Container, Flex } from '@/components/utility'
import { ButtonRowProps } from '@/utils/types'
import './styles.scss'

export const ButtonRow = ({
  className,
  componentId,
  heading,
  items,
  headingLevel,
  subheading,
  testId,
  ...props
}: ButtonRowProps) => {
  return (
    <BlockWrapper
      componentId={componentId}
      testId={testId}
      className={`buttonRow${className ? ` ${className}` : ''}`}
      {...props}
    >
      <Container>
        {heading && (
          <SectionHeading
            heading={heading}
            headingLevel={headingLevel}
            subheading={subheading}
          />
        )}
        <Flex gap="xs" justifyContent="center" alignItems="center">
          {items.map((item) => (
            <Button key={item._key} {...item} />
          ))}
        </Flex>
      </Container>
    </BlockWrapper>
  )
}
