import { DotsProps } from '../../../utils/types'
import { Button } from '../Button'
import { Flex, IconSelector } from '../../utility'
import './styles.scss'

export const Dots = ({
  activeIndex,
  className,
  componentId,
  count,
  setActiveIndex,
}: DotsProps) => {
  return (
    <div id={componentId} className={`dots${className ? ` ${className}` : ''}`}>
      <Flex gap="xxs" justifyContent="center" noBreak>
        {Array.from({ length: count }, (_, i) => (
          <Button
            type="button"
            unstyled
            key={i}
            onClick={() => setActiveIndex(i)}
            ariaLabel={`Go to slide ${i + 1} of ${count}`}
          >
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
