import { RelatedCardTypes } from '@molecules/RelatedCard/RelatedCard.types'

export interface ListingProps {
  filteredItems: RelatedCardTypes[]
  changePage?: (pageNumber: number) => void
  currentPage?: number
  allItemsNumber: number
  itemsPerPage?: number
  categoryListing?: string
}
