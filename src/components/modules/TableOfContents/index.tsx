'use client'
import { useEffect, useState } from 'react'
import { HeadingItem, TableOfContentsProps } from '../../../utils/types'
import { LinkObject } from '../LinkObject'
import { Flex, Heading, Spinner } from '../../utility'
import { collectHeadings, handleClickedLink } from './logic'
import './styles.scss'

export const TableOfContents = ({
  className,
  componentId,
  targetId,
  testId,
}: TableOfContentsProps) => {
  const [headingsArray, setHeadingsArray] = useState<HeadingItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setHeadingsArray(collectHeadings(targetId))
    setLoading(false)
  }, [targetId])

  return (
    headingsArray.length > 0 && (
      <nav
        id={componentId}
        data-testid={testId}
        aria-label="Table of contents"
        className={`tableOfContents${className ? ` ${className}` : ''}`}
      >
        <Heading level={2} nonHeadingElement="p">
          Table of Contents
        </Heading>
        {loading ? (
          <Flex
            justifyContent="center"
            alignItems="center"
            style={{
              paddingRight: '5rem',
            }}
          >
            <Spinner size={50} />
          </Flex>
        ) : (
          <ul>
            {headingsArray.map((item) => (
              <li key={item.id + item.index}>
                <LinkObject href={`#${item.id}`} onClick={handleClickedLink}>
                  {item.text}
                </LinkObject>
              </li>
            ))}
          </ul>
        )}
      </nav>
    )
  )
}
