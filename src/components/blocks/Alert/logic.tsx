import { useEffect, useState } from 'react'
import { AlertProps } from '@utils/types'

const iconMap = {
  success: 'Confetti',
  warning: 'Warning',
  error: 'XCircle',
  info: 'Info',
} as const

/**
 * Maps an alert type to its corresponding Phosphor icon name.
 */
export const getAlertIcon = (type: AlertProps['type']) => iconMap[type]

/**
 * Manages an alert's dismissed/visible state using sessionStorage so a
 * dismissed alert (keyed by componentId) stays dismissed for the session.
 */
export const useAlertVisibility = (componentId?: string) => {
  const [remove, setRemove] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!componentId) {
      setLoading(false)
      return
    }

    if (sessionStorage.getItem(`alert_${componentId}`)) {
      setRemove(true)
    }

    if (remove) {
      sessionStorage.setItem(`alert_${componentId}`, 'true')
    }

    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remove])

  const dismiss = () => {
    if (componentId) {
      sessionStorage.setItem(`alert_${componentId}`, 'true')
    }
    setRemove(true)
  }

  return { loading, remove, dismiss }
}
