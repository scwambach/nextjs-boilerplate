import { LinkObjectProps } from '@utils/types'
import Link from 'next/link'

export const LinkObject = ({
  children,
  className,
  href,
  testId,
  copy,
  style,
  role,
  onClick,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
}: LinkObjectProps) => {
  const isInternal = href.startsWith('/')
  return isInternal ? (
    <Link
      role={role}
      style={style}
      data-testid={testId}
      className={`linkObject${className ? ` ${className}` : ''}`}
      href={href}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
    >
      {children || copy}
    </Link>
  ) : (
    <a
      role={role}
      style={style}
      data-testid={testId}
      className={`linkObject${className ? ` ${className}` : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
    >
      {children || copy}
    </a>
  )
}
