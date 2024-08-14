import { Button } from '../modules'
import { SectionHeading } from '../modules/SectionHeading'
import { BlockWrapper, Container } from '../utility'
import { FormProps } from '../../utils/types'

const Form = ({
  children,
  className,
  componentId,
  container,
  heading,
  headingLevel,
  onSubmit,
  subheading,
  submitCopy,
  testId,
  ...props
}: FormProps) => {
  return (
    <BlockWrapper
      componentId={componentId}
      className={`form${className ? ` ${className}` : ''}`}
      testId={testId}
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
        <form
          onSubmit={(e) => {
            e.preventDefault()
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onSubmit && onSubmit(e)
          }}
        >
          <fieldset>{children}</fieldset>
          <Button type="submit">{submitCopy || 'Submit'}</Button>
        </form>
      </Container>
    </BlockWrapper>
  )
}

export { Form }
