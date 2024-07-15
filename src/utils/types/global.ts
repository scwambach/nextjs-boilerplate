import * as Icon from '@phosphor-icons/react'
import { CSSProperties, ReactNode } from 'react'
import {
  ButtonTypes,
  Colors,
  ContainerClasses,
  Elements,
  Gaps,
  HeadingLevel,
} from './types'
import { CardProps, ImageObjectProps, PersonProps, TagProps } from './modules'

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
  _type?: string
  _key?: string
  className?: string
  testId?: string
  componentId?: string
}

export interface BlockProps extends ComponentProps {
  heading?: string
  headingLevel?: HeadingLevel
  subheading?: string | any[]
  container?: ContainerClasses
  bgColor?: Colors
  backgroundImage?: ImageObjectProps
}

export interface FlexGridProps extends ComponentProps {
  children: ReactNode
  elementTag?: Elements
  role?: string
  ariaLabel?: string
  style?: CSSProperties
  gap?: Gaps
}

export interface AddressProps {
  street: string
  city: string
  state: string
  zip: string
}

export interface HoursProps {
  days: string
  hours: string
}

export interface SocialProps {
  icon: keyof typeof Icon
  screenReader: string
  href: string
}

export interface ContactInfoProps {
  phone?: string
  email?: string
  address?: AddressProps
  hours?: HoursProps[]
  socials?: SocialProps[]
}

export interface NavProps {
  label: string
  href?: string
  type?: ButtonTypes
  subNav?: {
    label: string
    href: string
  }[]
}

export interface GlobalProps {
  favicon: string
  siteDescription: string
  siteTitle: string
  siteImage?: ImageObjectProps
  logo?: ImageObjectProps
  footerCopy?: string
  navigation: NavProps[]
}

export interface BlogRollProps {
  posts: CardProps[]
}

export interface PostDetailsProps {
  title: string
  slug: string
  publishedAt: string
  ogImage?: ImageObjectProps
  summary: string
  image: ImageObjectProps
  tags?: TagProps[]
  authors: PersonProps[]
  content: any[]
  related?: CardProps[]
}

export interface PageProps {
  _createdAt?: string
  _rev?: string
  _id?: string
  _type?: string
  description?: string
  keywords?: string[]
  ogImage: ImageObjectProps
  pageComponents?: unknown[]
  slug: string
  title: string
}
