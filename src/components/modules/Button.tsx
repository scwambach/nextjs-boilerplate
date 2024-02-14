import { ButtonProps } from '@utils/types'
import { LinkObject } from './LinkObject'
import { headingFont } from '@utils/fonts'

export const Button = ({
  type = 'button',
  href,
  unstyled,
  className,
  children,
  onClick,
  label,
  theme,
  testId,
}: ButtonProps) => {
  return (
    <>
      {type === 'link' && (
        <LinkObject
          href={href || '/'}
          role="button"
          testId={testId}
          className={`button ${
            headingFont.className
          }${theme && !unstyled ? ` ${theme}` : ''}${className ? ` ${className}` : ''}${unstyled ? ' unstyled' : ''}`}
          onClick={onClick}
        >
          {label || children}
        </LinkObject>
      )}
      {type !== 'link' && (
        <button
          type={type}
          data-testid={testId}
          className={`button ${
            headingFont.className
          }${theme && !unstyled ? ` ${theme}` : ''}${className ? ` ${className}` : ''}${unstyled ? ' unstyled' : ''}`}
          onClick={onClick}
        >
          {label || children}
        </button>
      )}
    </>
  )
}
