import { HeadingLevel } from '@utils/types'
import { ReactNode } from 'react'

interface HeadingProps {
  level: HeadingLevel
  children: ReactNode
  className?: string
}

export const Heading = ({ level, children, className }: HeadingProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <HeadingTag className={`heading-tag ${className ? ` ${className}` : ''}`}>
      {children}
    </HeadingTag>
  )
}
