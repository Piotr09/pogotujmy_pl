import type { ReactElement } from 'react'
import ReactPaginate from 'react-paginate'

import {
  StyledArrowLeft,
  StyledArrowRight,
  StyledPagination,
} from './Pagination.styled'
import type { PaginationProps } from './Pagination.types'

export const Pagination = ({
  current,
  maxPages,
  onPageChange,
}: PaginationProps): ReactElement => (
  <StyledPagination pageCount={maxPages}>
    <ReactPaginate
      breakLabel="..."
      previousLabel={<StyledArrowLeft />}
      previousAriaLabel="Zobacz poprzednią stronę"
      nextLabel={<StyledArrowRight />}
      nextAriaLabel="Zobacz następną stronę"
      forcePage={current}
      className={'pagination'}
      previousClassName={'prev'}
      nextClassName={'next'}
      marginPagesDisplayed={1}
      onPageChange={onPageChange}
      pageRangeDisplayed={2}
      pageCount={maxPages}
      ariaLabelBuilder={(currentPage) => `Strona ${currentPage}`}
      hrefBuilder={(pageIdx) => `?p=${pageIdx}`}
    />
  </StyledPagination>
)
