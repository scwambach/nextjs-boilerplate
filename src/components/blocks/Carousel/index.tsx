'use client'
import { CarouselProps } from '@utils/types'
import { Banner } from '@components/blocks/Banner'
import { Dots } from '@components/modules/Dots'
import { Box, Flex } from '@components/utility'
import { useCarouselAutoAdvance } from './logic'
import './styles.scss'

export const Carousel = ({
  className,
  componentId,
  items,
  testId,
}: CarouselProps) => {
  const { activeIndex, setActiveIndex } = useCarouselAutoAdvance(items.length)
  const renderedItems = items.map((item, index) => (
    <Banner key={index} {...item} />
  ))

  return (
    <Box
      componentId={componentId}
      testId={testId}
      className={`carousel${className ? ` ${className}` : ''}`}
    >
      <Flex
        className="slider"
        style={{
          width: `${100 * items.length}%`,
          transform: `translateX(-${activeIndex * (100 / items.length)}%)`,
        }}
        gap="none"
        fill
        noBreak
      >
        {renderedItems}
      </Flex>
      <Dots
        count={items.length}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </Box>
  )
}
