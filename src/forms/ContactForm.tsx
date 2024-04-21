'use client'
import { Form } from '@components/blocks'
import { FormField } from '@components/modules'
import { FormProps } from '@utils/types'

export const ContactForm = (props: FormProps) => {
  return (
    <Form componentId="contactForm" {...props}>
      <FormField label="Name" type="text" id="name" />
    </Form>
  )
}
