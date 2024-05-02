import * as Icon from '@phosphor-icons/react'
import { CSSProperties, ReactNode } from 'react'
import { ComponentProps, FlexGridProps } from './global'
import {
  BreakNames,
  ColumnSize,
  ContainerClasses,
  Elements,
  HeadingLevel,
  Themes,
} from './types'
import { ButtonProps } from './modules'

export interface BoxProps extends ComponentProps {
  children: ReactNode
  elementTag?: keyof JSX.IntrinsicElements
  radius?: 4 | 8 | 12
  overflow?: boolean
  shadow?: 1 | 2 | 3 | 4
  style?: CSSProperties
}

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

export interface HeadingProps extends ComponentProps {
  level?: HeadingLevel
  children: ReactNode
  nonHeadingElement?: 'p' | 'span'
}

export interface IconSelectorProps extends ComponentProps {
  icon: keyof typeof Icon
  alt?: string
  color?: string
  size?: string | number
  weight?: Icon.IconWeight
  mirrored?: boolean
}

export interface MarkdownProps extends ComponentProps {
  elementTag?: Elements
  children: string
}

export interface PortableProps extends ComponentProps {
  content: any[]
  elementTag?: Elements
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
