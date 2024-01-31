import { ButtonProps } from '@utils/types'
import { LinkObject } from './LinkObject'

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
          testId={testId}
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
