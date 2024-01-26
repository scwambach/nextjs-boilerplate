import { ComponentProps } from '@utils/types'
import { LinkObject } from './LinkObject'

interface ButtonProps extends ComponentProps {
  type?: 'button' | 'submit' | 'reset' | 'link'
  href?: string
  unstyled?: boolean
  onClick?: () => void
}

export const Button = ({
  type = 'button',
  href,
  unstyled,
  className,
  children,
  onClick,
  testId,
}: ButtonProps) => {
  return (
    <>
      {type === 'link' && (
        <LinkObject
          href={href || '/'}
          role="button"
          data-testid={testId}
          className={`button${className ? ` ${className}` : ''}${
            unstyled ? ' unstyled' : ''
          }`}
          onClick={onClick}
        >
          {children}
        </LinkObject>
      )}
      {type !== 'link' && (
        <button
          type={type}
          data-testid={testId}
          className={`button${className ? ` ${className}` : ''}${
            unstyled ? ' unstyled' : ''
          }`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  )
}
