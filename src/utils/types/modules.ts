import * as Icon from '@phosphor-icons/react'
import { CSSProperties, ChangeEvent, ReactNode } from 'react'
import { BlockProps, ComponentProps, ContactInfoProps } from './global'
import {
  ButtonTypes,
  Colors,
  ColumnSize,
  ContainerClasses,
  Elements,
  FieldTypes,
  HeadingLevel,
  Radius,
  Themes,
} from './types'
import { CompareTableProps, MapMarker } from './blocks'

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
  crumbs?: {
    label: string
    href: string
  }[]
  current?: string
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
  icon?: keyof typeof Icon
  date?: string
  boxRadius?: Radius
  description?: string
  markdown?: boolean
  theme?: Themes
  href?: string
  contentElement?: Elements
  links?: ButtonProps[]
}

export interface CompareTablesProps extends BlockProps {
  items: CompareTableProps[]
  overallTheme?: Themes
  boxRadius?: Radius
}

export interface ContactBlockProps extends BlockProps {
  marker?: MapMarker
  mapStyle?: any
  boxRadius?: Radius
  information: ContactInfoProps
  googleMapsApiKey: string
  container?: ContainerClasses
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
  boxRadius?: Radius
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

export interface FieldProps extends Omit<ComponentProps, 'componentId'> {
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

export interface HeadingItem {
  id: string
  text: string
  index: number
}

export interface ImageObjectProps extends ComponentProps {
  alt: string
  isBackground?: boolean
  query?: string
  sizes?: string
  src?: string
  height?: number
  width?: number
  blurWidth?: number
  blurHeight?: number
  blurDataURL?: string
}

export interface LinkObjectProps extends ComponentProps {
  children?: ReactNode
  style?: CSSProperties
  role?: string
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
  boxRadius?: Radius
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
  headingLevel?: HeadingLevel
  markdown?: boolean
  subheading?: string | any[]
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
  boxRadius?: Radius
  numberSuffix?: string
  subtitle?: string
  theme?: Themes
  maxValue?: number
  decimals?: boolean
  tags?: string[]
}

export interface TableOfContentsProps extends ComponentProps {
  targetId: string
}

export interface TableProps extends ComponentProps {
  headingRow?: string[]
  controlCell?: ReactNode
  rows: {
    cells: (string | number)[]
  }[]
}

export interface TagProps extends ComponentProps {
  elementTag?: 'div' | 'span' | 'li'
  href?: string
  label: string
  theme?: Themes
}

export interface VideoBlockProps extends ComponentProps {
  copy?: string | any[]
  markdown?: boolean
  poster?: ImageObjectProps
  boxRadius?: Radius
  title?: string
  url: string
}
