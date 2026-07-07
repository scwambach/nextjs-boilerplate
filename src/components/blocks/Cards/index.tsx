'use client'
import { Button } from '@/components/modules'
import { Card } from '@/components/modules/Card'
import { SectionHeading } from '@/components/modules/SectionHeading'
import {
  Container,
  Flex,
  Grid,
  Heading,
  Spacer,
  Spinner,
} from '@/components/utility'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { CardsProps } from '@/utils/types'
import ReactPaginate from 'react-paginate'
import { BlockWrapper } from '@/components/utility'
import { useCardsPagination } from './logic'
import './styles.scss'

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
  const {
    activePage,
    currentItems,
    handlePageClick,
    handlePaginationClick,
    loading,
    pageCount,
  } = useCardsPagination(items, itemsPerPage, paginated)

  const renderedCards = (paginated ? currentItems : items).map(
    (item, index) => {
      return <Card key={index} {...item} boxRadius={boxRadius} />
    }
  )

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
              onClick={handlePaginationClick}
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
