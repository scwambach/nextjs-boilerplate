import { LinkObjectProps } from '@utils/types'
import Link from 'next/link'

export const LinkObject = ({
  children,
  className,
  href,
  testId,
  style,
  role,
  onClick,
}: LinkObjectProps) => {
  const isInternal = href.startsWith('/')
  return isInternal ? (
    <Link
      role={role}
      style={style}
      data-testid={testId}
      className={`linkObject${className ? ` ${className}` : ''}`}
      href={href}
      onClick={onClick}
    >
      {children}
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
      onClick={onClick}
    >
      {children}
    </a>
  )
}
