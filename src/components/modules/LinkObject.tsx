import Link from 'next/link'

interface LinkObjectProps {
  children: React.ReactNode
  className?: string
  url: string
}

export const LinkObject = ({ children, className, url }: LinkObjectProps) => {
  const isInternal = url.startsWith('/')
  return isInternal ? (
    <Link
      className={`linkObject${className ? ` ${className}` : ''}`}
      href={url}
    >
      {children}
    </Link>
  ) : (
    <a
      className={`linkObject${className ? ` ${className}` : ''}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
