import { CSSProperties, FormEvent, ReactNode } from 'react'
import { BlockProps, ComponentProps } from './global'
import {
  BreadcrumbsProps,
  ButtonProps,
  CardProps,
  EventProps,
  ImageObjectProps,
  PersonProps,
  StatProps,
  TagProps,
  VideoBlockProps,
} from './modules'
import {
  AlertTypes,
  Colors,
  ColumnSize,
  ContainerClasses,
  Gaps,
  HeadingLevel,
  Themes,
} from './types'

export interface AlertProps extends ComponentProps {
  message: string
  type: AlertTypes
}

export interface BannerProps extends ComponentProps {
  authors?: PersonProps[]
  backgroundImage?: ImageObjectProps
  bgColor?: Colors
  boxBgColor?: Colors
  contained?: boolean
  containedWidth?: ContainerClasses
  crumbs?: {
    current?: string
    items?: BreadcrumbsProps['crumbs']
  }
  date?: string
  foregroundMedia?: any
  heading: string
  headingLevel?: HeadingLevel
  links?: ButtonProps[]
  message?: string
  micro?: boolean
  overlap?: boolean
  style?: CSSProperties
  subheading?: string
  tags?: TagProps[]
}

export interface ButtonRowProps extends BlockProps {
  items: ButtonProps[]
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

export interface CompareTableProps extends ComponentProps {
  eyebrow?: string
  heading: string
  highlight?: boolean
  items: string[]
  link?: ButtonProps
  subheading?: string
  tag?: string
  theme?: Themes
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

export interface LogoBannerProps extends ComponentProps {
  backgroundImage?: ImageObjectProps
  copy: string
  logo?: ImageObjectProps
}

export interface LogoRowProps extends ComponentProps {
  items: {
    title: string
    image: ImageObjectProps
  }[]
}

export interface MapProps extends ComponentProps {
  style?: CSSProperties
  markers: MapMarker[]
}

export interface MapMarker {
  lat: number
  lng: number
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

export interface RichTextProps extends ComponentProps {
  centered?: boolean
  column2Copy?: string
  column3Copy?: string
  column4Copy?: string
  componentId?: string
  container?: ContainerClasses
  copy: string
  gap?: Gaps
}

export interface RiverProps extends ComponentProps {
  theme?: Themes
  headingLevel?: HeadingLevel
  reverse?: boolean
  container?: ContainerClasses
  items: {
    title?: string
    video?: VideoBlockProps
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
