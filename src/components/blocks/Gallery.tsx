'use client'
import { Button, ImageObject } from '@components/modules'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Grid } from '@components/utility'
import { CaretLeft, CaretRight, X } from '@phosphor-icons/react'
import { colors } from '@utils/settings'
import { BlockProps, ColumnSize, Gaps, ImageObjectProps } from '@utils/types'
import { useEffect, useState } from 'react'

interface GalleryProps extends BlockProps {
  items: ImageObjectProps[]
  gap?: Gaps
  columns?: ColumnSize
}

export const Gallery = ({
  className,
  heading,
  level,
  subheading,
  gap,
  items,
}: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  useEffect(() => {
    // escape key closes modal as well as clicking outside of .activeImage
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null)
    }
    document.addEventListener('keydown', closeOnEscape)

    // if (activeIndex) {
    //   const closeOnOutsideClick = (e: MouseEvent) => {
    //     if (e.target === document.querySelector('.galleryModal'))
    //       setActiveIndex(null)
    //   }
    //   document.addEventListener('click', closeOnOutsideClick)
    // }
  }, [activeIndex])

  return (
    <div className={`gallery${className ? ` ${className}` : ''}`}>
      {heading && (
        <SectionHeading
          heading={heading}
          level={level}
          subheading={subheading}
        />
      )}
      <Grid gap={gap} columns={4}>
        {items.map((item) => (
          <Button
            className="galleryItem"
            key={item.query || item.src}
            type="button"
            unstyled
            onClick={() => setActiveIndex(items.indexOf(item))}
          >
            <ImageObject {...item} isBackground width={200} height={200} />
          </Button>
        ))}
      </Grid>
      {activeIndex !== null && (
        <div className="galleryModal">
          <Button
            className="close"
            type="button"
            unstyled
            onClick={() => setActiveIndex(null)}
          >
            <X color={colors.white} size={50} />
          </Button>
          <Button
            className={`control prev${activeIndex === 0 ? ' disabled' : ''}`}
            type="button"
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
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            <CaretRight color={colors.white} size={50} />
            <div className="srOnly">Next Image</div>
          </Button>
        </div>
      )}
    </div>
  )
}
