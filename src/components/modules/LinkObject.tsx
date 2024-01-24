import Link from 'next/link'

interface LinkObjectProps {
  children: React.ReactNode
  className?: string
  role?: string
  href: string
  onClick?: () => void
}

export const LinkObject = ({
  children,
  className,
  href,
  role,
  onClick,
}: LinkObjectProps) => {
  const isInternal = href.startsWith('/')
  return isInternal ? (
    <Link
      role={role}
      className={`linkObject${className ? ` ${className}` : ''}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <a
      role={role}
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
