'use client'
import { Form, FormField } from '@wambach-dev/react-library'
import { FormProps } from '@wambach-dev/react-library/src/utils/types'

export const ContactForm = (props: FormProps) => {
  return (
    <Form componentId="contactForm" {...props}>
      <FormField label="Name" type="text" id="name" />
    </Form>
  )
}
