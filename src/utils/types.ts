import { ReactNode, ChangeEvent, FormEvent } from 'react'

export type BreakNames = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type Colors = 'red' | 'blue' | 'green' | 'orange'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6

export type FieldTypes =
  | 'checkbox'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'hidden'
  | 'month'
  | 'multiselect'
  | 'number'
  | 'password'
  | 'radio'
  | 'select'
  | 'tel'
  | 'text'
  | 'textarea'
  | 'time'
  | 'url'
  | 'week'
  | string

export interface FormDataProps {
  [key: string]: string | string[]
}

export interface SetFormDataProps {
  (formData: FormDataProps): void
}

export type ColumnSizeObject = {
  xxs?: ColumnSize
  xs?: ColumnSize
  sm?: ColumnSize
  md?: ColumnSize
  lg?: ColumnSize
  xl?: ColumnSize
  xxl?: ColumnSize
}

export type Themes = 'primary' | 'secondary' | 'tertiary'

export type Elements =
  | 'div'
  | 'section'
  | 'article'
  | 'aside'
  | 'span'
  | 'header'
  | 'footer'
  | 'nav'
  | 'main'
  | 'li'
  | 'ul'
  | 'ol'
  | 'p'
  | 'a'
  | 'button'
  | 'form'
  | 'input'
  | 'label'
  | 'select'
  | 'textarea'
  | 'img'
  | 'picture'
  | 'figure'
  | 'figcaption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

export interface Breakpoints {
  [key: string]: number | undefined
  xxs: number
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export interface ComponentProps {
  className?: string
  testId?: string
}

export interface BlockProps extends ComponentProps {
  heading?: string
  level?: HeadingLevel
  subheading?: string
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
  elementTag?: Elements
  gap?: number
}

export interface BreadcrumbsProps extends ComponentProps {
  crumbs: {
    label: string
    href: string
  }[]
  current: string
}

export interface BadgeProps extends ComponentProps {
  number: number
  maxNumber?: number
  elementTag?: 'div' | 'span'
  color?: 'red' | 'blue' | 'green' | 'orange'
}

export interface GridProps extends FlexGridProps {
  columns?: ColumnSize | ColumnSizeObject
}

export interface FormProps extends BlockProps {
  children?: ReactNode
  submitCopy?: string
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  onChange?: (e: FormEvent<HTMLFieldSetElement>) => void
}

export interface FieldProps extends ComponentProps {
  choices?: {
    id: string
    copy: string
    disabled?: boolean
    value?: string
  }[]
  multiChoices?: {
    label: string
    value?: string
  }[]
  description?: string
  className?: string
  defaultValue?: string
  value?: string
  disabled?: boolean
  id: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeArea?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onChangeSelect?: (e: ChangeEvent<HTMLSelectElement>) => void
  label: string
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  choiceGridColumns?: ColumnSize | ColumnSizeObject
  type?: FieldTypes
}
