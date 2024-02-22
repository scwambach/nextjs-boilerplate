import { addCommas } from '@utils/addCommas'
import { maxPlus } from '@utils/maxPlus'
import { BadgeProps } from '@utils/types'

export const Badge = ({
  className,
  testId,
  number,
  maxNumber,
  color = 'red',
  elementTag = 'span',
}: BadgeProps) => {
  const Element = elementTag as keyof JSX.IntrinsicElements

  return (
    <Element
      data-testid={testId}
      className={`badge ${color}${className ? ` ${className}` : ''}`}
    >
      {maxNumber ? maxPlus(number, maxNumber) : addCommas(number)}
    </Element>
  )
}
