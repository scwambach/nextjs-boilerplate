'use client'
import * as Form from '@forms/index'
import { FormSelectorProps } from '@utils/types/blocks'

export const FormSelector = ({
  className,
  componentId,
  container,
  heading,
  headingLevel,
  markdown,
  formName,
  subheading,
  submitCopy,
  testId,
}: FormSelectorProps) => {
  const FormComponent = Form[formName as keyof typeof Form]

  const formProps = {
    className,
    componentId,
    container,
    heading,
    headingLevel,
    markdown,
    subheading,
    submitCopy,
    testId,
  }

  return <FormComponent {...formProps} />
}
