'use client'
import { Button } from '@components/modules'
import { ComponentProps, Themes } from '@utils/types'
import { ReactNode, useEffect, useRef, useState } from 'react'

interface AccordionProps extends ComponentProps {
  children: ReactNode
  heading: string
  theme?: Themes
}

export const Accordion = ({
  heading,
  theme,
  children,
  className,
}: AccordionProps) => {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState<number | undefined>(0)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const content = ref.current.querySelector('.content') as HTMLElement
    if (content) {
      if (open) {
        setHeight(content.scrollHeight)
      } else {
        setHeight(0)
      }

      const handleResize = () => {
        if (open) {
          setHeight(0)
          setOpen(false)
        }
      }

      window.addEventListener('resize', handleResize)
    }

    // if open and on window resize, reset height to auto
  }, [open])

  return (
    <div
      ref={ref}
      className={`accordion${
        open ? ' open' : ''
      }${className ? ` ${className}` : ''}`}
    >
      <Button
        theme={theme}
        suffixIcon="CaretDown"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="accordion-content"
      >
        {heading}
      </Button>
      <div
        className="content"
        style={{
          height: `${height}px`,
          overflow: 'hidden',
        }}
      >
        <div className="inner">{children}</div>
      </div>
    </div>
  )
}
