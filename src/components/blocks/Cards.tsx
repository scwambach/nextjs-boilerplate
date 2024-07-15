'use client'
import { Button } from '../modules'
import { Card } from '../modules/Card'
import { SectionHeading } from '../modules/SectionHeading'
import { Container, Flex, Grid, Heading, Spacer, Spinner } from '../utility'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { CardsProps } from '../../utils/types'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { BlockWrapper } from '../utility'

export const Cards = ({
  boxRadius,
  button,
  className,
  columns,
  componentId,
  container,
  gap = 'xs',
  heading,
  headingLevel = 3,
  items,
  itemsPerPage = 6,
  paginated,
  subheading,
  testId,
  ...props
}: CardsProps) => {
  const [itemOffset, setItemOffset] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const [loading, setLoading] = useState(paginated ? true : false)

  const endOffset = itemOffset + itemsPerPage
  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  const renderedCards = (paginated ? currentItems : items).map(
    (item, index) => {
      return <Card key={index} {...item} boxRadius={boxRadius} />
    }
  )

  useEffect(() => {
    // remove role and aria-label from all ul elements
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

  return (
    <BlockWrapper
      componentId={componentId}
      testId={testId}
      className={`cards${className ? ` ${className}` : ''}`}
      {...props}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            headingLevel={headingLevel}
            subheading={
              paginated
                ? `${subheading ? `${subheading}\n\n` : ''}${loading ? '' : `Page ${activePage}`}`
                : subheading
            }
          />
        )}

        {paginated && loading ? (
          <Flex
            alignItems="center"
            justifyContent="center"
            style={{
              width: '100%',
              height: '30vh',
            }}
          >
            <Spinner size={100} />
          </Flex>
        ) : (
          <Grid gap={gap} columns={columns}>
            {renderedCards && renderedCards.length > 0 ? (
              renderedCards
            ) : (
              <Heading level={4}>
                There are no items for page {activePage}.
              </Heading>
            )}
          </Grid>
        )}

        {button && (
          <>
            <Spacer size={2} />
            <Flex justifyContent="center" alignItems="center">
              <Button {...button} />
            </Flex>
          </>
        )}
        {paginated && items && items.length > itemsPerPage && (
          <nav role="navigation" aria-label="Pagination">
            <ReactPaginate
              ariaLabelBuilder={(page) => `Go to page ${page}`}
              breakLabel="..."
              className="pagination align-center unstyled flex gap-xs justify-center"
              nextLabel={<CaretRight size={30} />}
              onPageChange={handlePageClick}
              forcePage={activePage - 1}
              onClick={(e) => {
                const newUrl = new URL(window.location.href)
                newUrl.searchParams.set(
                  'page',
                  `${e.nextSelectedPage ? e.nextSelectedPage + 1 : 1}`
                )
                setActivePage(e.nextSelectedPage ? e.nextSelectedPage + 1 : 1)
                window.history.pushState({}, '', newUrl.toString())
              }}
              pageCount={pageCount}
              previousLabel={<CaretLeft size={30} />}
              renderOnZeroPageCount={null}
            />
          </nav>
        )}
      </Container>
    </BlockWrapper>
  )
}
