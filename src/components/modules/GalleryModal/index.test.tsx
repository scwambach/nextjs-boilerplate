import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { GalleryModal } from './index'

describe('GalleryModal', () => {
  const items = [
    { query: 'one', alt: 'Image One', width: 600, height: 400 },
    { query: 'two', alt: 'Image Two', width: 600, height: 400 },
  ]

  it('renders without crashing with required props', () => {
    const { container } = render(
      <GalleryModal
        items={items}
        setActiveIndex={jest.fn()}
        setIsModalOpen={jest.fn()}
      />
    )
    expect(container.querySelector('.galleryModal')).toBeInTheDocument()
  })

  it('reflects the isModalOpen prop via the open/closed class and aria-hidden', () => {
    const { container, rerender } = render(
      <GalleryModal
        items={items}
        setActiveIndex={jest.fn()}
        setIsModalOpen={jest.fn()}
        isModalOpen={false}
      />
    )
    expect(container.querySelector('.galleryModal')).toHaveClass('closed')
    expect(container.querySelector('.galleryModal')).toHaveAttribute(
      'aria-hidden',
      'true'
    )

    rerender(
      <GalleryModal
        items={items}
        setActiveIndex={jest.fn()}
        setIsModalOpen={jest.fn()}
        isModalOpen={true}
      />
    )
    expect(container.querySelector('.galleryModal')).toHaveClass('open')
    expect(container.querySelector('.galleryModal')).toHaveAttribute(
      'aria-hidden',
      'false'
    )
  })

  it('calls setIsModalOpen(false) when the close button is clicked', () => {
    const setIsModalOpen = jest.fn()
    const { getByText } = render(
      <GalleryModal
        items={items}
        setActiveIndex={jest.fn()}
        setIsModalOpen={setIsModalOpen}
        isModalOpen
      />
    )
    fireEvent.click(getByText('Close Modal'))
    expect(setIsModalOpen).toHaveBeenCalledWith(false)
  })

  it('exposes the modal via role="dialog" and aria-modal for assistive technology', () => {
    const { container } = render(
      <GalleryModal
        items={items}
        setActiveIndex={jest.fn()}
        setIsModalOpen={jest.fn()}
        isModalOpen
      />
    )
    const dialog = container.querySelector('.galleryModal')
    expect(dialog).toHaveAttribute('role', 'dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })
})
