'use client'
import { ComponentProps, ImageObjectProps } from '@utils/types'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Play } from '@phosphor-icons/react/dist/ssr'
import { Flex, Heading, Markdown } from '@components/utility'
import { colors } from '@utils/settings'

// TODO: Create VideoBlock component

interface VideoBlockProps extends ComponentProps {
  url: string
  title?: string
  copy?: string
  poster?: ImageObjectProps
}

export const VideoBlock = ({
  url,
  className,
  testId,
  title,
  copy,
  poster,
}: VideoBlockProps) => {
  const [hasWindow, setHasWindow] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  return (
    <Flex
      direction="column"
      gap="xxs"
      alignItems="stretch"
      className={`videoBlock${className ? ` ${className}` : ''}`}
      data-testid={testId}
    >
      <div className="frame">
        {hasWindow && (
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            playIcon={<Play size={80} color={colors.white} weight="fill" />}
            light={poster?.src}
            controls
            onClickPreview={() => {
              setIsPlaying(true)
            }}
            playing={isPlaying}
          />
        )}
      </div>
      <Flex direction="column" gap="micro" className="info">
        <Heading level={2} nonHeadingElement="p">
          {title}
        </Heading>
        {copy && <Markdown>{copy}</Markdown>}
      </Flex>
    </Flex>
  )
}
