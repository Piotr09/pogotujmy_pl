import { RelatedCardTypes } from '@molecules/RelatedCard/RelatedCard.types'

export interface CategoryListingTemplateProps {
  categoryName: string
  categoryListing: string
  items: RelatedCardTypes[]
}

export interface UseListingTypes {
  currentPage: number
  changePage: (newPage: number) => void
  filteredItems: RelatedCardTypes[]
  filteredItemsNumber: number
}

export interface UpdateQueryString {
  page: number
}
