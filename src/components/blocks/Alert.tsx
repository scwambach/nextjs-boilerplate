'use client'
import { Button } from '@components/modules'
import { IconSelector } from '@components/utility/IconSelector'
import { ComponentProps } from '@utils/types'
import { useEffect, useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'

interface AlertProps extends ComponentProps {
  type: 'success' | 'warning' | 'error' | 'info'
  alertId?: string
  message: string
}

export const Alert = ({ type, className, alertId, message }: AlertProps) => {
  const [remove, setRemove] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!alertId) {
      setLoading(false)
      return
    }

    if (sessionStorage.getItem(`alert_${alertId}`)) {
      setRemove(true)
    }

    if (remove) {
      sessionStorage.setItem(`alert_${alertId}`, 'true')
    }

    setLoading(false)
  }, [remove])

  const iconMap = {
    success: 'Confetti',
    warning: 'Warning',
    error: 'XCircle',
    info: 'Info',
  }

  return (
    <div
      id={alertId}
      className={`alert ${type}${className ? ` ${className}` : ''}${
        loading || remove ? ' hide' : ''
      }`}
    >
      <IconSelector
        icon={iconMap[type] as keyof typeof Icon}
        weight="fill"
        size={30}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: parseMarkdownToHTML(message),
        }}
      />
      {alertId && (
        <Button
          type="button"
          unstyled
          testId="closeButton"
          onClick={() => {
            sessionStorage.setItem(`alert_${alertId}`, 'true')
            setRemove(true)
          }}
        >
          <IconSelector icon="X" size={18} />
        </Button>
      )}
    </div>
  )
}
