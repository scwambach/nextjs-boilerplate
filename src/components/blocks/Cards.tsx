'use client'
import { Button } from '@components/modules'
import { Card } from '@components/modules/Card'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Container, Flex, Grid, Spacer } from '@components/utility'
import { CardsProps } from '@utils/types'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

const itemsPerPage = 6

export const Cards = ({
  items,
  className,
  gap = 'xs',
  subheading,
  paginated,
  columns,
  heading,
  container,
  level = 3,
  testId,
  button,
}: CardsProps) => {
  const [itemOffset, setItemOffset] = useState(0)

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
      return <Card key={index} {...item} />
    }
  )

  return (
    <div
      data-testid={testId}
      className={`cards${className ? ` ${className}` : ''}`}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            level={level}
            subheading={subheading}
          />
        )}
        <Grid gap={gap} columns={columns}>
          {renderedCards}
        </Grid>
        {button && (
          <>
            <Spacer size={2} />
            <Flex justifyContent="center" alignItems="center">
              <Button {...button} />
            </Flex>
          </>
        )}
        {paginated && items && items.length > itemsPerPage && (
          <ReactPaginate
            breakLabel="..."
            className="pagination unstyled flex gap-xs justify-center"
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        )}
      </Container>
    </div>
  )
}
