import { headingFont } from '@utils/fonts'
import { HeadingLevel } from '@utils/types'
import { ReactNode } from 'react'

interface HeadingProps {
  level: HeadingLevel
  children: ReactNode
  testId?: string
  className?: string
  nonHeadingElement?: 'p' | 'span'
}

export const Heading = ({
  level,
  children,
  className,
  nonHeadingElement,
  testId,
}: HeadingProps) => {
  const HeadingTag =
    nonHeadingElement || (`h${level}` as keyof JSX.IntrinsicElements)

  return (
    <HeadingTag
      data-testid={testId}
      className={`heading ${
        headingFont.className
      }${className ? ` ${className}` : ''}`}
    >
      {children}
    </HeadingTag>
  )
}
