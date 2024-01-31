export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface ComponentProps {
  children?: React.ReactNode
  className?: string
  testId?: string
}

export interface ImageProps {
  alt: string
  className?: string
  height?: number
  isBackground?: boolean
  lqip?: string
  query?: string
  sizes?: string
  src?: string
  width?: number
}

export interface ButtonProps extends ComponentProps {
  type?: 'button' | 'submit' | 'reset' | 'link'
  href?: string
  unstyled?: boolean
  onClick?: () => void
}
