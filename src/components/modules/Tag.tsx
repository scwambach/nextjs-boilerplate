import { TagProps } from '@utils/types'
import { LinkObject } from '@components/modules'

export const Tag = ({
  className,
  label,
  elementTag = 'span',
  href,
  theme = 'primary',
}: TagProps) => {
  const Element = elementTag as keyof JSX.IntrinsicElements
  return (
    <Element className={`tagItem ${theme}${className ? ` ${className}` : ''}`}>
      {href ? <LinkObject href={href}>{label}</LinkObject> : label}
    </Element>
  )
}
