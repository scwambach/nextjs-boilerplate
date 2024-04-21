import { Button, FormField } from '@components/modules'

export const ContactForm = () => {
  return (
    <form>
      <FormField label="Name" type="text" id="name" />
      <Button type="submit">Submit</Button>
    </form>
  )
}
