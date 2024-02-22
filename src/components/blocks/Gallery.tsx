'use client'
import { Button, ImageObject } from '@components/modules'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Grid } from '@components/utility'
import { CaretLeft, CaretRight, X } from '@phosphor-icons/react'
import { colors } from '@utils/settings'
import { GalleryProps } from '@utils/types'
import { useEffect, useState } from 'react'

export const Gallery = ({
  className,
  heading,
  level,
  subheading,
  testId,
  columns = 4,
  gap,
  items,
}: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
  }, [activeIndex])

  return (
    <div
      data-testid={testId}
      className={`gallery${className ? ` ${className}` : ''}`}
    >
      {heading && (
        <SectionHeading
          heading={heading}
          level={level}
          subheading={subheading}
        />
      )}
      <Grid gap={gap} columns={columns}>
        {items.map((item, index) => (
          <Button
            testId={testId ? `${testId}-item-${index}` : undefined}
            className="galleryItem"
            key={item.query || item.src}
            type="button"
            unstyled
            onClick={() => {
              setIsModalOpen(true)
              setActiveIndex(items.indexOf(item))
            }}
          >
            <ImageObject {...item} isBackground width={200} height={200} />
          </Button>
        ))}
      </Grid>
      <div className={`galleryModal ${isModalOpen ? 'open' : 'closed'}`}>
        <Button
          className="close"
          type="button"
          ariaLabel="Close Modal"
          unstyled
          onClick={() => setIsModalOpen(false)}
        >
          <X color={colors.white} size={50} />
          <div className="srOnly">Close Modal</div>
        </Button>
        <Button
          className={`control prev${activeIndex === 0 ? ' disabled' : ''}`}
          type="button"
          disabled={activeIndex === 0}
          unstyled
          onClick={() => setActiveIndex(activeIndex - 1)}
        >
          <CaretLeft color={colors.white} size={50} />
          <div className="srOnly">Previous Image</div>
        </Button>

        <ImageObject {...items[activeIndex]} className="activeImage" />

        <Button
          className={`control next${
            activeIndex === items.length - 1 ? ' disabled' : ''
          }`}
          type="button"
          unstyled
          disabled={activeIndex === items.length - 1}
          onClick={() => setActiveIndex(activeIndex + 1)}
        >
          <CaretRight color={colors.white} size={50} />
          <div className="srOnly">Next Image</div>
        </Button>
      </div>
    </div>
  )
}
