export type BreakNames =
  | 'none'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'

export type Colors = 'red' | 'blue' | 'green' | 'orange' | 'black' | 'white'

export type AlertTypes = 'success' | 'warning' | 'error' | 'info'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6

export type Gaps = BreakNames | 'none' | 'micro' | 'mega'

export type ButtonTypes = 'button' | 'submit' | 'reset' | 'link'

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

export type ContainerClasses =
  | 'wider'
  | 'wide'
  | 'normal'
  | 'narrow'
  | 'narrower'
  | 'full'

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
  | 'cite'
  | 'figure'
  | 'figcaption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
