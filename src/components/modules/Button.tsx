import { ComponentProps } from '@utils/types'
import { LinkObject } from './LinkObject'

interface ButtonProps extends ComponentProps {
  type?: 'button' | 'submit' | 'reset' | 'link'
  href?: string
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  return (
    <>
      {props.type === 'link' && (
        <LinkObject
          href={props.href || '/'}
          role="button"
          className={`button${props.className ? ` ${props.className}` : ''}`}
          onClick={props.onClick}
        >
          {props.children}
        </LinkObject>
      )}
      {props.type !== 'link' && (
        <button
          type={props.type}
          className={`button${props.className ? ` ${props.className}` : ''}`}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      )}
    </>
  )
}
