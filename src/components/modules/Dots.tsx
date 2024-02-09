import { ComponentProps } from '@utils/types'
import { Button } from './Button'
import { IconSelector } from '@components/utility/IconSelector'
import { Flex } from '@components/utility'

interface DotsProps extends ComponentProps {
  count: number
  activeIndex: number
  setActiveIndex: (index: number) => void
}

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
