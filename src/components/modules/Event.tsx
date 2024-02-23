'use client'
import { Flex } from '@components/utility'
import { Heading } from '@components/utility/Heading'
import { EventProps } from '@utils/types'
import { LinkObject } from './LinkObject'
import { Button } from './Button'
import dayjs from 'dayjs'
import { ImageObject } from './ImageObject'
import { GalleryModal } from './GalleryModal'
import { useEffect, useState } from 'react'
import { headingFont } from '@utils/fonts'

// TODO: Create tests and stories

export const Event = ({
  className,
  location,
  title,
  links,
  poster,
  date,
}: EventProps) => {
  const [posterOpen, setPosterOpen] = useState(false)
  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPosterOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
  }, [])

  const isDateThisYear = dayjs(date).isSame(new Date(), 'year')

  return (
    <div className={`event${className ? ` ${className}` : ''}`}>
      <Flex
        alignItems="flex-start"
        gap={poster ? 'xxs' : 'sm'}
        justifyContent="space-between"
      >
        <Flex
          alignItems="flex-start"
          gap={poster ? 'xxs' : 'sm'}
          className="details"
        >
          <div className="date">
            <span>{dayjs(date).format('MMM')}</span>
            <Heading level={3} nonHeadingElement="p">
              {dayjs(date).format('DD')}
            </Heading>
            {!isDateThisYear && <span>{dayjs(date).format('YYYY')}</span>}
          </div>
          <Flex gap="xxs" alignItems="stretch" fill className="info">
            {poster && (
              <div className="poster">
                <Button
                  unstyled
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  onClick={() => {
                    setPosterOpen(!posterOpen)
                  }}
                >
                  <span className={headingFont.className}>See Full Image</span>
                  <ImageObject
                    isBackground
                    {...poster}
                    width={undefined}
                    height={undefined}
                    alt={`Poster for ${title}`}
                  />
                </Button>
                <GalleryModal
                  items={[poster]}
                  setActiveIndex={() => {}}
                  isModalOpen={posterOpen}
                  setIsModalOpen={setPosterOpen}
                  activeIndex={0}
                  controls={false}
                />
              </div>
            )}
            <div>
              <Heading level={4} nonHeadingElement="p">
                {title}
              </Heading>
              {location && (
                <>
                  <p>{location.name}</p>
                  {location.address && (
                    <LinkObject
                      href={`https://www.google.com/maps/place/${location.address}`}
                    >
                      <small>{location.address}</small>
                    </LinkObject>
                  )}
                </>
              )}
            </div>
          </Flex>
        </Flex>
        {links && links.length > 0 && (
          <Flex
            className="links"
            gap="xs"
            columnBreak="xxs"
            justifyContent="flex-end"
          >
            {links.map((link) => (
              <Button
                type="link"
                small
                key={link.label}
                href={link.href}
                label={link.label}
              />
            ))}
          </Flex>
        )}
      </Flex>
    </div>
  )
}
