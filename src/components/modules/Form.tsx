// import { Field } from './Field'

import { Field } from './Field'

const Form = () => {
  return (
    <form>
      <div className="grid">
        <Field
          type="text"
          fieldId="firstname"
          fieldName="firstname"
          label="First name"
          placeholder="First name"
          required
        />
        <Field
          type="text"
          fieldId="lastname"
          fieldName="lastname"
          label="Last name"
          placeholder="Last name"
          required
        />
      </div>
      <Field
        type="email"
        fieldId="email"
        fieldName="email"
        label="Email address"
        placeholder="Email address"
        required
      />

      <Field
        type="textarea"
        fieldId="message"
        fieldName="message"
        label="Message"
        placeholder="Message"
        required
      />

      <p>We&apos;ll never share your email with anyone else.</p>

      <button type="submit">Submit</button>
    </form>
  )
}

export { Form }
