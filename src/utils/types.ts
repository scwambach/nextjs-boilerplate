import * as Icon from '@phosphor-icons/react'
import { ReactNode, ChangeEvent, FormEvent, CSSProperties } from 'react'

//////////////////////////
//////////////////////////
///////// GLOBAL /////////
//////////////////////////
//////////////////////////

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
  container?: ContainerClasses
}

export interface FlexGridProps extends ComponentProps {
  children: ReactNode
  elementTag?: Elements
  style?: CSSProperties
  gap?: Gaps
}

export interface GlobalProps {
  favicon: string
  siteDescription: string
  siteTitle: string
  navigation: {
    label: string
    href?: string
    type?: ButtonTypes
    subnav?: {
      label: string
      href: string
    }[]
  }[]
}

export interface BlogRollProps {
  posts: CardProps[]
}

export interface PostDetailsProps {
  title: string
  slug: string
  publishedAt: string
  summary: string
  image: ImageObjectProps
  tags?: TagProps[]
  authors: PersonProps[]
  content: string
  related?: CardProps[]
}

///////////////////////////
///////////////////////////
///////// UTILITY /////////
///////////////////////////
///////////////////////////

export interface ContainerProps extends ComponentProps {
  containerClass?: ContainerClasses
  children: ReactNode
  padded?: boolean
}

export interface DrawerProps extends ComponentProps {
  triggerCopy: string
  direction?: 'left' | 'right' | 'top' | 'bottom'
  triggerUnstyled?: boolean
  triggerTheme?: Themes
  buttonTheme?: Themes
  children: ReactNode
  open?: boolean
}

export interface FlexProps extends FlexGridProps {
  center?: boolean
  breakpoint?: BreakNames
  columnBreak?: BreakNames
  noBreak?: boolean
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  fill?: boolean
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  customLayout?:
    | `one-third-two-thirds`
    | `two-thirds-one-third`
    | `one-quarter-three-quarters`
    | `three-quarters-one-quarter`
}

export interface GridProps extends FlexGridProps {
  columns?: ColumnSize
}

export interface HeadingProps {
  level: HeadingLevel
  children: ReactNode
  testId?: string
  className?: string
  nonHeadingElement?: 'p' | 'span'
}

export interface IconSelectorProps {
  icon: keyof typeof Icon
  alt?: string
  color?: string
  size?: string | number
  weight?: Icon.IconWeight
  mirrored?: boolean
  className?: string
}

export interface MarkdownProps {
  elementTag?: Elements
  elementId?: string
  children: string
  className?: string
}

export interface ModalProps extends ComponentProps {
  triggerCopy: string
  triggerUnstyled?: boolean
  triggerTheme?: Themes
  buttonTheme?: Themes
  buttons?: ButtonProps[]
  children: ReactNode
  open?: boolean
}

export interface SpacerProps extends ComponentProps {
  size: number
  divide?: boolean
}

export interface SpinnerProps extends ComponentProps {
  size?: number
}

export interface TooltipProps extends ComponentProps {
  children: ReactNode
  copy: string
}

///////////////////////////
///////////////////////////
///////// MODULES /////////
///////////////////////////
///////////////////////////

export interface AccordionProps extends ComponentProps {
  children: ReactNode
  heading: string
  theme?: Themes
}

export interface AvatarProps extends ComponentProps {
  image?: ImageObjectProps
  firstName: string
  lastName: string
  size?: number
  badge?: BadgeProps
}

export interface BadgeProps extends ComponentProps {
  number: number
  maxNumber?: number
  elementTag?: 'div' | 'span'
  color?: Colors
}

export interface BreadcrumbsProps extends ComponentProps {
  crumbs: {
    label: string
    href: string
  }[]
  current: string
}

export interface ButtonProps extends ComponentProps {
  type?: ButtonTypes
  theme?: Themes
  role?: string
  href?: string
  small?: boolean
  icon?: keyof typeof Icon
  suffixIcon?: keyof typeof Icon
  children?: ReactNode
  style?: CSSProperties
  disabled?: boolean
  label?: string
  unstyled?: boolean
  onMouseOver?: () => void
  onMouseOut?: () => void
  onFocus?: () => void
  onBlur?: () => void
  onClick?: () => void
  ariaExpanded?: boolean
  ariaControls?: string
  ariaLabel?: string
}

export interface CardProps extends ComponentProps {
  image?: ImageObjectProps
  title: string
  tags?: TagProps[]
  authors?: PersonProps[]
  date?: string
  description?: string
  theme?: Themes
  href?: string
  contentElement?: Elements
  headingLevel?: HeadingLevel
  links?: ButtonProps[]
}

export interface DotsProps extends ComponentProps {
  count: number
  activeIndex: number
  setActiveIndex: (index: number) => void
}

export interface DropdownProps extends ButtonProps {
  items?: LinkObjectProps[]
}

export interface EventProps extends ComponentProps {
  title: string
  date: string
  poster?: ImageObjectProps
  location?: {
    name: string
    address?: string
  }
  doorsOpenTime?: string
  startTime: string
  endTime?: string
  links?: ButtonProps[]
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

export interface LinkObjectProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  role?: string
  testId?: string
  copy?: string
  href: string
  ariaLabel?: string
  onMouseOver?: () => void
  onMouseOut?: () => void
  onFocus?: () => void
  onBlur?: () => void
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export interface PersonProps extends ComponentProps {
  firstName: string
  lastName: string
  title?: string
  href?: string
  image: ImageObjectProps
  company?: string
  socials?: {
    icon: keyof typeof Icon
    screenReader: string
    href: string
  }[]
}

export interface SectionHeadingProps extends ComponentProps {
  heading?: string
  level?: HeadingLevel
  subheading?: string
}

export interface ShareButtonsProps extends ComponentProps {
  title: string
  slug: string
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

export interface TableProps extends ComponentProps {
  headingRow?: string[]
  controlCell?: ReactNode
  rows: {
    cells: (string | number)[]
  }[]
}

export interface TagProps extends ComponentProps {
  label: string
  theme?: Themes
  href?: string
  elementTag?: 'div' | 'span' | 'li'
}

export interface VideoBlockProps extends ComponentProps {
  url: string
  title?: string
  copy?: string
  poster?: ImageObjectProps
}

//////////////////////////
//////////////////////////
///////// BLOCKS /////////
//////////////////////////
//////////////////////////

export interface AlertProps extends ComponentProps {
  alertId?: string
  message: string
  type: AlertTypes
}

export interface BannerProps extends ComponentProps {
  bgColor?: Colors
  crumbs?: {
    current: string
    items: BreadcrumbsProps['crumbs']
  }
  heading: string
  headingLevel?: HeadingLevel
  backgroundImage?: ImageObjectProps
  foregroundMedia?: ReactNode
  authors?: PersonProps[]
  date?: string
  links?: ButtonProps[]
  message?: string
  style?: CSSProperties
  tags?: TagProps[]
  subheading?: string
}

export interface CardsProps extends BlockProps {
  items: CardProps[]
  gap?: Gaps
  columns?: ColumnSize
  paginated?: boolean
  itemsPerPage?: number
  button?: ButtonProps
}

export interface CarouselProps extends ComponentProps {
  items: BannerProps[]
}

export interface EventsProps extends BlockProps {
  items: EventProps[]
}

export interface FormProps extends BlockProps {
  children?: ReactNode
  submitCopy?: string
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  onChange?: (e: FormEvent<HTMLFieldSetElement>) => void
}

export interface GalleryProps extends BlockProps {
  items: ImageObjectProps[]
  gap?: Gaps
  columns?: ColumnSize
}

export interface MapProps extends ComponentProps {
  style?: CSSProperties
  markers: {
    lat: number
    lng: number
  }[]
}

export interface PeopleProps extends BlockProps {
  items: PersonProps[]
  columns?: ColumnSize
  gap?: Gaps
}

export interface QuoteProps extends ComponentProps {
  quote: string
  cite?: string
  person?: PersonProps
  bgColor?: Colors
}

export interface RiverProps extends ComponentProps {
  theme?: Themes
  headingLevel?: HeadingLevel
  container?: ContainerClasses
  items: {
    title?: string
    description: string
    image: ImageObjectProps
    links?: ButtonProps[]
  }[]
}

export interface StatsProps extends BlockProps {
  items: StatProps[]
  gap?: Gaps
}

export interface TabsProps extends BlockProps {
  items: {
    label: string
    content: React.ReactNode
  }[]
  theme?: Themes
}

export interface TimelineProps extends BlockProps {
  events: {
    date: string
    title: string
    description?: string
    image?: ImageObjectProps
  }[]
}

export interface VideosProps extends BlockProps {
  items: VideoBlockProps[]
  columns?: ColumnSize
  gap?: Gaps
  button?: ButtonProps
}

//////////////////////////
//////////////////////////
///////// TYPES //////////
//////////////////////////
//////////////////////////

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

export type ContainerClasses = 'wider' | 'wide' | 'narrow' | 'narrower'

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
