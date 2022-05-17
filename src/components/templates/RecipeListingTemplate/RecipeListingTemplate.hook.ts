import { stringify } from 'query-string'
import { useEffect, useState } from 'react'

import type {
  UpdateQueryString,
  UseListingTypes,
} from './RecipeListingTemplate.types'
import { RelatedCardTypes } from '@molecules/RelatedCard/RelatedCard.types'
import { useRouter } from 'next/router'

export const updateQueryString = ({ page }: UpdateQueryString): void => {
  const basePath = window?.location?.href?.split('?')?.[0]
  const newQuery = stringify({
    ['p']: page + 1,
  })

  const newUrl = basePath + (newQuery && '?' + newQuery)
  window.history.pushState({ path: newUrl }, '', newUrl)
}

export const useListing = (
  items: RelatedCardTypes[],
  itemsPerPage: number,
): UseListingTypes => {
  const { query } = useRouter()
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [filteredItemsNumber, setFilteredItemsNumber] = useState<number>(0)
  const [filteredItems, setFilteredItems] = useState<RelatedCardTypes[]>(items)

  const changePage = (page: number) => {
    setCurrentPage(page)
    updateQueryString({ page })
  }

  useEffect(() => {
    const filteredRecipes = items
    setFilteredItemsNumber(filteredRecipes?.length)
    setFilteredItems(
      [...filteredRecipes].splice(currentPage * itemsPerPage, itemsPerPage),
    )
  }, [currentPage])

  useEffect(() => {
    const { ['p']: initialPage } = query
    if (!initialPage) return

    if (initialPage) {
      setCurrentPage(parseInt(initialPage as string, 10) - 1)
    }
  }, [query])

  return {
    currentPage,
    changePage,
    filteredItems,
    filteredItemsNumber,
  }
}
