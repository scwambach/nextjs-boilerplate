'use client'
import { Button, ImageObject, GalleryModal } from '../modules'
import { SectionHeading } from '../modules/SectionHeading'
import { BlockWrapper, Box, Container, Grid } from '../utility'
import { GalleryProps } from '../../utils/types'
import { useEffect, useState } from 'react'

export const Gallery = ({
  boxRadius,
  className,
  columns = 4,
  componentId,
  container,
  gap,
  heading,
  headingLevel,
  items,
  subheading,
  testId,
  ...props
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
    <BlockWrapper
      componentId={componentId}
      testId={testId}
      className={`gallery${className ? ` ${className}` : ''}`}
      {...props}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            headingLevel={headingLevel}
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
              <Box overflow radius={boxRadius}>
                <ImageObject {...item} isBackground width={400} height={400} />
              </Box>
            </Button>
          ))}
        </Grid>
        <GalleryModal
          items={items}
          activeIndex={activeIndex}
          isModalOpen={isModalOpen}
          setActiveIndex={setActiveIndex}
          setIsModalOpen={setIsModalOpen}
          controls
        />
      </Container>
    </BlockWrapper>
  )
}
