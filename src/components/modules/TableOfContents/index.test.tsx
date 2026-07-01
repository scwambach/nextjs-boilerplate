import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { TableOfContents } from './index'

describe('TableOfContents', () => {
  const setupTarget = () => {
    const target = document.createElement('div')
    target.id = 'article'
    target.innerHTML = `
      <h2 id="intro">Introduction</h2>
      <h2 id="details">Details</h2>
    `
    document.body.appendChild(target)
    return target
  }

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('renders nothing when the target has no headings', () => {
    document.body.innerHTML = '<div id="empty"></div>'
    const { container } = render(<TableOfContents targetId="empty" />)
    expect(container.firstChild).toBeNull()
  })

  it('reflects the targetId prop by listing the headings found within it', async () => {
    setupTarget()
    const { container } = render(<TableOfContents targetId="article" />)
    await waitFor(() => {
      const nav = container.querySelector('nav') as HTMLElement
      expect(nav).toHaveTextContent('Introduction')
      expect(nav).toHaveTextContent('Details')
    })
  })

  it('smooth-scrolls to the target heading when a link is clicked instead of navigating', async () => {
    const target = setupTarget()
    const heading = target.querySelector('#intro') as HTMLElement
    heading.scrollIntoView = jest.fn()

    const { container } = render(<TableOfContents targetId="article" />)
    await waitFor(() =>
      expect(container.querySelector('nav a[href="#intro"]')).toBeInTheDocument()
    )

    const link = container.querySelector('nav a[href="#intro"]') as HTMLElement
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))

    expect(heading.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('exposes the component as a labeled navigation landmark for assistive technology', async () => {
    setupTarget()
    const { getByLabelText } = render(<TableOfContents targetId="article" />)
    await waitFor(() => {
      expect(getByLabelText('Table of contents').tagName).toBe('NAV')
    })
  })
})
