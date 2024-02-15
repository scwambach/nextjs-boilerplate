import { ButtonProps } from '@utils/types'
import { LinkObject } from './LinkObject'
import { headingFont } from '@utils/fonts'
import { IconSelector } from '@components/utility/IconSelector'

export const Button = ({
  type = 'button',
  href,
  unstyled,
  icon,
  suffixIcon,
  className,
  children,
  onClick,
  onMouseOver,
  onMouseOut,
  onBlur,
  onFocus,
  label,
  theme,
  style,
  testId,
}: ButtonProps) => {
  return (
    <>
      {type === 'link' && (
        <LinkObject
          href={href || '/'}
          style={style}
          role="button"
          testId={testId}
          className={`button ${
            headingFont.className
          }${theme && !unstyled ? ` ${theme}` : ''}${className ? ` ${className}` : ''}${unstyled ? ' unstyled' : ''}`}
          onClick={onClick}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {icon && (
            <IconSelector
              className="prefix"
              icon={icon}
              weight={unstyled ? 'regular' : 'bold'}
            />
          )}
          {label || children}
          {suffixIcon && (
            <IconSelector
              className="suffix"
              icon={suffixIcon}
              weight={unstyled ? 'regular' : 'bold'}
            />
          )}
        </LinkObject>
      )}
      {type !== 'link' && (
        <button
          type={type}
          data-testid={testId}
          style={style}
          className={`button ${
            headingFont.className
          }${theme && !unstyled ? ` ${theme}` : ''}${className ? ` ${className}` : ''}${unstyled ? ' unstyled' : ''}`}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {icon && (
            <IconSelector
              className="prefix"
              icon={icon}
              weight={unstyled ? 'regular' : 'bold'}
            />
          )}
          {label || children}
          {suffixIcon && (
            <IconSelector
              className="suffix"
              icon={suffixIcon}
              weight={unstyled ? 'regular' : 'bold'}
            />
          )}
        </button>
      )}
    </>
  )
}
