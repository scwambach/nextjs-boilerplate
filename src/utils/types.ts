import * as Icon from '@phosphor-icons/react'
import { ReactNode, ChangeEvent, FormEvent, CSSProperties } from 'react'

export type BreakNames =
  | 'none'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'

export type Colors = 'red' | 'blue' | 'green' | 'orange'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6

export type Gaps = BreakNames | 'none' | 'micro' | 'mega'

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
  | 'search'
  | 'color'
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
  icon?: keyof typeof Icon
  suffixIcon?: keyof typeof Icon
  children?: ReactNode
  style?: CSSProperties
  label?: string
  unstyled?: boolean
  onMouseOver?: () => void
  onMouseOut?: () => void
  onFocus?: () => void
  onBlur?: () => void
  onClick?: () => void
}

export interface LinkObjectProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  role?: string
  testId?: string
  copy?: string
  href: string
  onMouseOver?: () => void
  onMouseOut?: () => void
  onFocus?: () => void
  onBlur?: () => void
  onClick?: () => void
}

export interface FlexGridProps extends ComponentProps {
  children: ReactNode
  elementTag?: Elements
  style?: CSSProperties
  gap?: Gaps
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
  columns?: ColumnSize
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
  choiceGridColumns?: ColumnSize
  type?: FieldTypes
}

export interface PersonProps extends ComponentProps {
  firstName: string
  lastName: string
  title?: string
  image: ImageObjectProps
  socials?: {
    icon: keyof typeof Icon
    screenReader: string
    href: string
  }[]
}

export interface BannerProps extends ComponentProps {
  img?: ImageObjectProps
  style?: CSSProperties
  headingLevel?: HeadingLevel
  heading: string
  subheading?: string
  message?: string
  bgColor?: Colors
  links?: ButtonProps[]
  crumbs?: {
    current: string
    items: BreadcrumbsProps['crumbs']
  }
}

export interface StatProps extends ComponentProps {
  title?: string
  value: number
  icon?: keyof typeof Icon
  type?: 'currency' | 'percentage' | 'number'
  numberPrefix?: string
  numberSuffix?: string
  subtitle?: string
  theme?: Themes
  maxValue?: number
  decimals?: boolean
  tags?: string[]
}
