import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { SkipToMain } from './index'

describe('SkipToMain Component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <>
        <SkipToMain />
        <div id="bodyContent" tabIndex={-1} />
      </>
    )
    expect(container).toBeInTheDocument()
  })

  it('renders the "Skip to main content" button', () => {
    const { getByText } = render(
      <>
        <SkipToMain />
        <div id="bodyContent" tabIndex={-1} />
      </>
    )
    expect(getByText('Skip to main content')).toBeInTheDocument()
  })

  it('is keyboard accessible and moves focus to main content when activated (accessibility)', () => {
    const { getByText } = render(
      <>
        <SkipToMain />
        <div id="bodyContent" tabIndex={-1} />
      </>
    )
    const button = getByText('Skip to main content')
    const main = document.getElementById('bodyContent')
    fireEvent.click(button)

    expect(main).toHaveFocus()
  })
})
