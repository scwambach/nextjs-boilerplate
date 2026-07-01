'use client'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import { Box } from '../../utility'
import { AccordionProps } from '../../../utils/types'
import { createResizeHandler, handleToggle, measureContentHeight } from './logic'
import './styles.scss'

export const Accordion = ({
  children,
  className,
  componentId,
  heading,
  testId,
  theme,
}: AccordionProps) => {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState<number | undefined>(0)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    setHeight(measureContentHeight(ref, open))

    const handleResize = createResizeHandler(open, setOpen, setHeight)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [open])

  return (
    <div
      id={componentId}
      data-testid={testId}
      ref={ref}
      className={`accordion${
        open ? ' open' : ''
      }${className ? ` ${className}` : ''}`}
    >
      <Button
        type="button"
        theme={theme}
        suffixIcon="CaretDown"
        onClick={handleToggle(open, setOpen)}
        ariaExpanded={open}
        ariaControls="accordion-content"
      >
        {heading}
      </Button>
      <Box
        shadow={2}
        overflow
        className="content"
        style={{
          height: `${height}px`,
          overflow: 'hidden',
        }}
      >
        <div id="accordion-content" className="inner">
          {children}
        </div>
      </Box>
    </div>
  )
}
