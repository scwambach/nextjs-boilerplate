import { TagProps } from '@utils/types'

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
