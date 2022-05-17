import { RelatedCardTypes } from '@molecules/RelatedCard/RelatedCard.types'
import { CategoryProps } from '@/types/category'

export interface RecipeListingTemplateProps {
  categoryName: string
  items: RelatedCardTypes[]
  categories?: Pick<CategoryProps, 'subCategories' | 'parentSlug' | 'slug'>[]
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
