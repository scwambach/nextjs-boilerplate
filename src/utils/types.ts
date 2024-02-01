import { ReactNode } from 'react'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6

export type ColumnSizeObject = {
  xs?: ColumnSize
  sm?: ColumnSize
  md?: ColumnSize
  lg?: ColumnSize
  xl?: ColumnSize
  xxl?: ColumnSize
}

export type Themes = 'primary' | 'secondary' | 'tertiary'

export type Elements = 'div' | 'section' | 'article' | 'aside' | 'span'

export interface Breakpoints {
  [key: string]: number | undefined
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export interface ComponentProps {
  className?: string
  testId?: string
}

export interface ImageObjectProps {
  alt: string
  className?: string
  isBackground?: boolean
  testId?: string
  query?: string
  sizes?: string
  src?: string
  height?: number
  width?: number
  blurWidth?: number
  blurHeight?: number
  blurDataURL?: string
}

export interface ButtonProps extends ComponentProps {
  type?: 'button' | 'submit' | 'reset' | 'link'
  theme?: Themes
  href?: string
  children?: ReactNode
  label?: string
  unstyled?: boolean
  onClick?: () => void
}

export interface FlexGridProps extends ComponentProps {
  children: ReactNode
  parentTagName?: Elements
  gap?: number
}
