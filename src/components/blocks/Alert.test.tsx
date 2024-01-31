import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Alert } from './Alert'
import '@testing-library/jest-dom'

describe('Alert component', () => {
  it('renders alert with correct message and type', () => {
    const alertId = 'testAlert'
    const message = 'Test message'
    const type = 'success'

    const { getByText } = render(
      <Alert alertId={alertId} message={message} type={type} />
    )

    const alertElement = getByText(message)
    expect(alertElement).toBeInTheDocument()
    expect(alertElement.parentElement?.parentElement).toHaveClass(
      `alert ${type}`
    )
  })

  it('hides alert on close button click', () => {
    const alertId = 'testAlert'
    const message = 'Test message'
    const type = 'success'

    const { getByTestId } = render(
      <Alert alertId={alertId} message={message} type={type} />
    )

    const closeButton = getByTestId('closeButton')
    fireEvent.click(closeButton)

    expect(sessionStorage.getItem(`alert_${alertId}`)).toBe('true')
  })

  it('hides alert if alertId is not provided', () => {
    const message = 'Test message'
    const type = 'success'

    const { getByText } = render(<Alert message={message} type={type} />)

    const alertElement = getByText(message)
    expect(alertElement).toBeInTheDocument()
    expect(alertElement.parentElement?.parentElement).toHaveClass(
      `alert ${type}`
    )
  })

  it('hides alert if sessionStorage contains alertId', () => {
    const alertId = 'testAlert'
    const message = 'Test message'
    const type = 'success'

    sessionStorage.setItem(`alert_${alertId}`, 'true')

    const { getByText } = render(
      <Alert alertId={alertId} message={message} type={type} />
    )

    const alertElement = getByText(message)
    expect(alertElement).toBeInTheDocument()
    expect(alertElement.parentElement?.parentElement).toHaveClass(
      `alert ${type}`
    )
  })
})
