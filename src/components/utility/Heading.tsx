import { alfaSlabOne } from '@utils/headingFont'
import { HeadingLevel } from '@utils/types'
import { ReactNode } from 'react'

interface HeadingProps {
  level: HeadingLevel
  children: ReactNode
  testId?: string
  className?: string
}

export const Heading = ({
  level,
  children,
  className,
  testId,
}: HeadingProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <HeadingTag
      data-testid={testId}
      className={`heading ${
        alfaSlabOne.className
      }${className ? ` ${className}` : ''}`}
    >
      {children}
    </HeadingTag>
  )
}
