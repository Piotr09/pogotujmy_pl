export interface PaginationProps {
  current: number
  maxPages: number
  onPageChange: ({ selected: number }) => void
}
