'use client'
import { AiFillInfoCircle, AiFillWarning } from '@meronex/icons/ai'
import { BisErrorAlt } from '@meronex/icons/bi'
import { FaThumbsUp } from '@meronex/icons/fa'
import { ReactNode, useState } from 'react'

interface AlertBarProps {
  style?: 'success' | 'error' | 'warning' | 'info'
  children: ReactNode
}

const AlertBar = ({ children, style = 'info' }: AlertBarProps) => {
  const [fade, setFade] = useState<boolean>(false)

  if (style === 'success') {
    setTimeout(() => {
      setFade(true)
    }, 1000)
  }

  return (
    <div className={`alertBar ${style}${fade ? ' fade' : ''}`}>
      {style === 'success' && <FaThumbsUp size={30} />}
      {style === 'error' && <BisErrorAlt size={30} />}
      {style === 'warning' && <AiFillWarning size={30} />}
      {style === 'info' && <AiFillInfoCircle size={30} />}
      <div className="text-sm">{children}</div>
      <button type="button" className="close" onClick={() => setFade(true)}>
        <span className="sr-only">Close</span>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export { AlertBar }
