import { Button } from '@components/modules'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Container } from '@components/utility'
import { FormProps } from '@utils/types'

const Form = ({
  children,
  className,
  submitCopy,
  onSubmit,
  heading,
  subheading,
  level,
  container,
  testId,
}: FormProps) => {
  return (
    <div
      className={`form${className ? ` ${className}` : ''}`}
      data-testid={testId}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            level={level}
            subheading={subheading}
          />
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit && onSubmit(e)
          }}
        >
          <fieldset>{children}</fieldset>
          <Button type="submit">{submitCopy || 'Submit'}</Button>
        </form>
      </Container>
    </div>
  )
}

export { Form }
