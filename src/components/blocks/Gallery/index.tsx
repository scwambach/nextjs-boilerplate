'use client'
import { Button, ImageObject, GalleryModal } from '@/components/modules'
import { SectionHeading } from '@/components/modules/SectionHeading'
import { BlockWrapper, Box, Container, Grid } from '@/components/utility'
import { GalleryProps } from '@/utils/types'
import { useGalleryModal } from './logic'
import './styles.scss'

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
  const { activeIndex, isModalOpen, setActiveIndex, setIsModalOpen, openItem } =
    useGalleryModal()

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
              ariaLabel={item.alt || `Open image ${index + 1} of gallery`}
              onClick={() => openItem(items, item)}
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
