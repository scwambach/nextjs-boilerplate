'use client'
import * as Form from '@forms/index'
import { FormSelectorProps } from '@utils/types/blocks'

export const FormSelector = (props: FormSelectorProps) => {
  const FormComponent = Form[props.formName as keyof typeof Form]

  return <FormComponent {...props} />
}
