import { ComponentProps } from '@utils/types'
import { ReactNode } from 'react'

interface AccordionProps extends ComponentProps {
  children: ReactNode
  heading: string
}

export const Accordion = ({ heading, children }: AccordionProps) => {
  return (
    <details>
      <summary>{heading}</summary>
      {children}
    </details>
  )
}
