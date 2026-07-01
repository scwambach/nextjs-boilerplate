'use client'
import { Button } from '@components/modules'
import { Box, IconSelector } from '@components/utility'
import { AlertProps } from '@utils/types'
import * as Icon from '@phosphor-icons/react'
import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'
import { getAlertIcon, useAlertVisibility } from './logic'
import './styles.scss'

export const Alert = ({
  type,
  testId,
  className,
  componentId,
  message,
}: AlertProps) => {
  const { loading, remove, dismiss } = useAlertVisibility(componentId)

  return (
    <Box
      testId={testId}
      componentId={componentId}
      className={`alert ${type}${className ? ` ${className}` : ''}${
        loading || remove ? ' hide' : ''
      }`}
    >
      <IconSelector
        icon={getAlertIcon(type) as keyof typeof Icon}
        weight="fill"
        size={30}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: parseMarkdownToHTML(message),
        }}
      />
      {componentId && (
        <Button
          type="button"
          unstyled
          testId="closeButton"
          ariaLabel="Dismiss alert"
          onClick={dismiss}
        >
          <IconSelector icon="X" size={18} />
        </Button>
      )}
    </Box>
  )
}
