'use client'
import { Button } from '@components/modules'
import { IconSelector } from '@components/utility/IconSelector'
import { ComponentProps } from '@utils/types'
import { useEffect, useState } from 'react'
import * as Icon from '@phosphor-icons/react'

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
      <div>{message}</div>
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
