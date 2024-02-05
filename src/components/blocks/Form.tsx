'use client'
import { Button } from '@components/modules'
import { SectionHeading } from '@components/modules/SectionHeading'
import { FormProps } from '@utils/types'

const Form = ({
  children,
  className,
  submitCopy,
  onSubmit,
  heading,
  subheading,
  level,
  testId,
}: FormProps) => {
  return (
    <div
      className={`form${className ? ` ${className}` : ''}`}
      data-testid={testId}
    >
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
    </div>
  )
}

export { Form }
