'use client'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Box, Flex, Heading } from '../../utility'
import { EventProps } from '../../../utils/types'
import { ImageObject } from '../ImageObject'
import { GalleryModal } from '../GalleryModal'
import { Button } from '../Button'
import { LinkObject } from '../LinkObject'
import { convertTime } from '../../../utils/convertTime'
import {
  createEscapeHandler,
  getEventTimeCopy,
  handlePosterToggle,
  isDateThisYear,
} from './logic'
import './styles.scss'

export const Event = ({
  className,
  componentId,
  date,
  doorsOpenTime,
  endTime,
  links,
  location,
  poster,
  boxRadius,
  startTime,
  testId,
  title,
}: EventProps) => {
  const [posterOpen, setPosterOpen] = useState(false)
  useEffect(() => {
    const closeOnEscape = createEscapeHandler(() => setPosterOpen(false))
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  const dateIsThisYear = isDateThisYear(date)
  const eventTime = getEventTimeCopy(startTime, endTime)

  return (
    <Box
      componentId={componentId}
      testId={testId}
      radius={boxRadius}
      className={`event${className ? ` ${className}` : ''}`}
    >
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
          <Box radius={boxRadius} className="date">
            <span>{dayjs(date).format('MMM')}</span>
            <Heading level={3} nonHeadingElement="p">
              {dayjs(date).format('DD')}
            </Heading>
            {!dateIsThisYear && <span>{dayjs(date).format('YYYY')}</span>}
          </Box>
          <Flex gap="xxs" alignItems="stretch" fill className="info">
            {poster && (
              <Box overflow className="poster" radius={boxRadius}>
                <Button
                  type="button"
                  unstyled
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  onClick={handlePosterToggle(posterOpen, setPosterOpen)}
                  ariaLabel={`See full image of poster for ${title}`}
                >
                  <span aria-hidden="true">See Full Image</span>
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
              </Box>
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
              <div className="times">
                <p>
                  <small>
                    <strong>{eventTime.label}</strong> {eventTime.time}
                  </small>
                </p>
                {doorsOpenTime && (
                  <p>
                    <small>
                      <strong>Doors open at </strong>
                      {convertTime(doorsOpenTime).toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </small>
                  </p>
                )}
              </div>
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
    </Box>
  )
}
