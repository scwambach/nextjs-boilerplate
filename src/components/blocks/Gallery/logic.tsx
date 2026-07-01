import { useEffect, useState } from 'react'
import { GalleryProps } from '@utils/types'

/**
 * Manages the Gallery's lightbox modal state: which image is active and
 * whether the modal is open, plus an Escape-key handler to close it.
 */
export const useGalleryModal = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [activeIndex])

  const openItem = (items: GalleryProps['items'], item: GalleryProps['items'][number]) => {
    setIsModalOpen(true)
    setActiveIndex(items.indexOf(item))
  }

  return { activeIndex, isModalOpen, setActiveIndex, setIsModalOpen, openItem }
}
