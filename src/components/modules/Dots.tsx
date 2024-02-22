import { DotsProps } from '@utils/types'
import { Button } from './Button'
import { IconSelector } from '@components/utility/IconSelector'
import { Flex } from '@components/utility'

export const Dots = ({
  className,
  count,
  activeIndex,
  setActiveIndex,
}: DotsProps) => {
  return (
    <div className={`dots${className ? ` ${className}` : ''}`}>
      <Flex gap="xxs" justifyContent="center" noBreak>
        {Array.from({ length: count }, (_, i) => (
          <Button unstyled key={i} onClick={() => setActiveIndex(i)}>
            <IconSelector
              icon={i === activeIndex ? 'DotOutline' : 'Dot'}
              size={40}
            />
          </Button>
        ))}
      </Flex>
    </div>
  )
}
