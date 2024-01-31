import Link from 'next/link'

interface LinkObjectProps {
  children: React.ReactNode
  className?: string
  role?: string
  testId?: string
  href: string
  onClick?: () => void
}

export const LinkObject = ({
  children,
  className,
  href,
  testId,
  role,
  onClick,
}: LinkObjectProps) => {
  const isInternal = href.startsWith('/')
  return isInternal ? (
    <Link
      role={role}
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
