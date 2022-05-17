import { Container } from '@atoms/Container'
import type { ReactElement } from 'react'

import { ITEMS_PER_PAGE } from './CategoryListingTemplate.const'
import { useListing } from '@templates/RecipeListingTemplate/RecipeListingTemplate.hook'
import { StyledHeader } from './CategoryListingTemplate.styled'
import Listing from '@molecules/Listing'
import { CategoryListingTemplateProps } from '@templates/CategoryListingTemplate/CategoryListingTemplate.types'
import { mapCategoriesRelatedCard } from '@helpers/mappers/relatedCard'
import Breadcrumbs from '@atoms/Breadcrumbs'
import { ALL_RECIPES, HOMEPAGE } from '@atoms/Breadcrumbs/Breadcrumbs.const'
import SeoHead from '@atoms/SeoHead'
import { CategoryProps } from '@/types/category'

export const CategoryListingTemplateTest = ({
  categoryName,
  categoryListing,
  items,
}: CategoryListingTemplateProps): ReactElement => {
  const {
    filteredItems,
    changePage,
    currentPage,
    filteredItemsNumber,
  } = useListing(items, ITEMS_PER_PAGE)

  return (
    <>
      <Container>
        <StyledHeader>
          <h1>{categoryName}:</h1>
          {items.length < 1 ? (
            <span>Brak przepisow w tej kategorii</span>
          ) : (
            <span>Liczba podkategorii: {filteredItemsNumber}</span>
          )}
        </StyledHeader>
      </Container>
      <Container>
        <Listing
          allItemsNumber={filteredItemsNumber}
          filteredItems={filteredItems}
          categoryListing={categoryListing}
          changePage={changePage}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </Container>
    </>
  )
}

interface CategoryListingProps {
  categoryData: CategoryProps[]
  categoryTitle: string
}

export const CategoryListingTemplate = ({
  categoryData,
  categoryTitle,
}: CategoryListingProps): ReactElement => {
  const filteredSubCategories = categoryData.filter(
    (item) => item.title != categoryTitle,
  )

  const mappedCategoryCards = filteredSubCategories.map((item) =>
    mapCategoriesRelatedCard(item),
  )

  return (
    <>
      <Breadcrumbs
        lastItemValue={categoryTitle}
        pages={[HOMEPAGE, ALL_RECIPES]}
      />
      <SeoHead
        breadcrumbLabel={`Najlepsze przepisy na dania z kategorii ${categoryTitle}`}
        sitemapLabel={`Najlepsze przepisy na dania z z kategorii ${categoryTitle}`}
        seoTitle={`Najlepsze przepisy na dania z kategorii ${categoryTitle}`}
        seoDescription={`Zobacz zbiór najlepszych przepisów na dania z kategorii ${categoryTitle}. Zobacz moje propozycje i zainspiruj się!`}
        ogTitle={`Najlepsze przepisy na dania z kategorii ${categoryTitle}`}
        ogDescription={`Zobacz zbiór najlepszych przepisów na dania z kategorii ${categoryTitle}. Zobacz moje propozycje i zainspiruj się!`}
      ></SeoHead>
      <Container>
        <CategoryListingTemplateTest
          categoryListing={categoryTitle.toString()}
          categoryName={categoryTitle}
          items={mappedCategoryCards}
        />
      </Container>
    </>
  )
}
