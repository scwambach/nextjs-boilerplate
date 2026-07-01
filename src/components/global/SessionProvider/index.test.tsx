import React from 'react'
import { render, screen } from '@testing-library/react'
import SessionProvider from './index'

describe('SessionProvider', () => {
  it('renders children without crashing', () => {
    render(
      <SessionProvider session={null}>
        <p>Child content</p>
      </SessionProvider>
    )
    expect(screen.getByText('Child content')).toBeInTheDocument()
  })
})
