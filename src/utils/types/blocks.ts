import { CSSProperties, FormEvent, ReactNode } from 'react'
import { BlockProps, ComponentProps } from './global'
import * as Form from '../../forms'
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
  Elements,
  Gaps,
  HeadingLevel,
  Radius,
  Themes,
} from './types'

export interface AlertProps extends ComponentProps {
  message: string
  type: AlertTypes
}

export interface BannerProps extends BlockProps {
  authors?: PersonProps[]
  markdown?: boolean
  boxBgColor?: Colors
  contained?: boolean
  boxRadius?: Radius
  crumbs?: {
    current?: string
    items?: BreadcrumbsProps['crumbs']
  }
  date?: string
  foregroundMedia?: any
  links?: ButtonProps[]
  message?: string
  micro?: boolean
  overlap?: boolean
  style?: CSSProperties
  tags?: TagProps[]
}

export interface ButtonRowProps extends BlockProps {
  items: ButtonProps[]
}

export interface CardsProps extends BlockProps {
  items: CardProps[]
  gap?: Gaps
  columns?: ColumnSize
  boxRadius?: Radius
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
  boxRadius?: Radius
  subheading?: string
  tag?: string
  theme?: Themes
}

export interface EventsProps extends BlockProps {
  items: EventProps[]
  boxRadius?: Radius
}

export interface FormProps extends BlockProps {
  children?: ReactNode
  markdown?: boolean
  submitCopy?: string
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  onChange?: (e: FormEvent<HTMLFieldSetElement>) => void
}

export interface FormSelectorProps extends BlockProps {
  formName: keyof typeof Form
  markdown?: boolean
  submitCopy?: string
}

export interface GalleryProps extends BlockProps {
  items: ImageObjectProps[]
  gap?: Gaps
  boxRadius?: Radius
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
  mapStyle?: any
  googleMapsApiKey?: string
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
  boxRadius?: Radius
}

export interface QuoteProps extends ComponentProps {
  quote: string
  cite?: string
  person?: PersonProps
  bgColor?: Colors
  markdown?: boolean
}

export interface RichTextProps extends ComponentProps {
  centered?: boolean
  elementTag?: Elements
  column2Copy?: string | any[]
  column3Copy?: string | any[]
  column4Copy?: string | any[]
  componentId?: string
  container?: ContainerClasses
  copy: string | any[]
  gap?: Gaps
  markdown?: boolean
  bgColor?: Colors
}

export interface RiverProps extends ComponentProps {
  theme?: Themes
  bgColor?: Colors
  headingLevel?: HeadingLevel
  markdown?: boolean
  reverse?: boolean
  boxRadius?: Radius
  container?: ContainerClasses
  items: {
    _key: string
    title?: string
    video?: VideoBlockProps
    description: string | any[]
    image: ImageObjectProps
    links?: ButtonProps[]
  }[]
}

export interface StatsProps extends BlockProps {
  items: StatProps[]
  gap?: Gaps
  boxRadius?: Radius
}

export interface TabsProps extends BlockProps {
  boxRadius?: Radius
  items: {
    label: string
    content: React.ReactNode
  }[]
  theme?: Themes
}

export interface TimelineProps extends BlockProps {
  boxRadius?: Radius
  markdown?: boolean
  events: {
    date: string
    title: string
    description?: string | any[]
    image?: ImageObjectProps
  }[]
}

export interface VideosProps extends BlockProps {
  items: VideoBlockProps[]
  columns?: ColumnSize
  boxRadius?: Radius
  gap?: Gaps
  button?: ButtonProps
}
