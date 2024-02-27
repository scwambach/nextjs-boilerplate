'use client'
import { ComponentProps } from '@utils/types'
import { useEffect, useState } from 'react'
import { LinkObject } from './LinkObject'
import { Heading } from '@components/utility'

// TODO: Create TableOfContents tests and stories

interface TableOfContentsProps extends ComponentProps {
  targetId: string
}

interface HeadingItem {
  id: string
  text: string
  index: number
}

export const TableOfContents = ({
  className,
  testId,
  targetId,
}: TableOfContentsProps) => {
  const [headingsArray, setHeadingsArray] = useState<HeadingItem[]>([])
  useEffect(() => {
    const target = document.getElementById(targetId)
    const headings = target?.querySelectorAll('h1, h2, h3, h4, h5, h6')

    const headingsObject: HeadingItem[] = []
    headings?.forEach((heading, index) => {
      const id = heading.id
      const text = `${heading.textContent}`
      headingsObject.push({ id, text, index })
    })
    setHeadingsArray(headingsObject)
  }, [targetId])

  const handleClickedLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.getElementById(
      `${e.currentTarget.getAttribute('href')?.replace('#', '')}`
    )
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      data-testid={testId}
      className={`tableOfContents${className ? ` ${className}` : ''}`}
    >
      <Heading level={2} nonHeadingElement="p">
        Table of Contents
      </Heading>
      <ul>
        {headingsArray.map((item) => (
          <li key={item.id + item.index}>
            <LinkObject href={`#${item.id}`} onClick={handleClickedLink}>
              {item.text}
            </LinkObject>
          </li>
        ))}
      </ul>
    </div>
  )
}
