import { ComponentProps } from '@utils/types'

interface AccordionProps extends ComponentProps {
  heading: string
}

export const Accordion = (props: AccordionProps) => {
  return (
    <details>
      <summary>{props.heading}</summary>
      {props.children}
    </details>
  )
}
