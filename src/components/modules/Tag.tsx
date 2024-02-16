import { ComponentProps, Themes } from '@utils/types'

interface TagProps extends ComponentProps {
  label: string
  theme?: Themes
  elementTag?: 'div' | 'span' | 'li'
}

export const Tag = ({
  className,
  label,
  elementTag = 'span',
  theme = 'primary',
}: TagProps) => {
  const Element = elementTag as keyof JSX.IntrinsicElements
  return (
    <Element className={`tagItem ${theme}${className ? ` ${className}` : ''}`}>
      {label}
    </Element>
  )
}
