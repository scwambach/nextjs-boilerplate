import { useEffect, useState } from 'react'
import { CardsProps } from '@/utils/types'

/**
 * Manages Cards pagination state: current page, item slicing/offset, and
 * loading state driven by the `?page=` query param when paginated.
 */
export const useCardsPagination = (
  items: CardsProps['items'],
  itemsPerPage: number,
  paginated?: boolean
) => {
  const [itemOffset, setItemOffset] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const [loading, setLoading] = useState(paginated ? true : false)

  const endOffset = itemOffset + itemsPerPage
  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  const handlePaginationClick = (e: { nextSelectedPage?: number }) => {
    const newUrl = new URL(window.location.href)
    const nextPage = e.nextSelectedPage ? e.nextSelectedPage + 1 : 1
    newUrl.searchParams.set('page', `${nextPage}`)
    setActivePage(nextPage)
    window.history.pushState({}, '', newUrl.toString())
  }

  useEffect(() => {
    // remove role and aria-label from all ul elements rendered by ReactPaginate
    const uls = document.querySelectorAll('ul')
    uls.forEach((ul) => {
      ul.removeAttribute('role')
      ul.removeAttribute('aria-label')
    })
  }, [])

  useEffect(() => {
    if (paginated) {
      const url = new URL(window.location.href)
      const page = url.searchParams.get('page')
      if (page) {
        setActivePage(parseInt(page))
        setItemOffset((parseInt(page) - 1) * itemsPerPage)
      }
      setLoading(false)
    }
  }, [itemOffset])

  return {
    activePage,
    currentItems,
    handlePageClick,
    handlePaginationClick,
    loading,
    pageCount,
  }
}
