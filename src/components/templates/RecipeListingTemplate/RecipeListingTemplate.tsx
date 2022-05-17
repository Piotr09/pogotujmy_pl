import { Container } from '@atoms/Container'
import type { ReactElement } from 'react'

import { ITEMS_PER_PAGE } from './RecipeListingTemplate.const'
import { useListing } from './RecipeListingTemplate.hook'
import {
  StyledHeader,
  SubCategoriesWrapper,
} from './RecipeListingTemplate.styled'
import type { RecipeListingTemplateProps } from './RecipeListingTemplate.types'
import Listing from '@molecules/Listing'
import latinize from 'latinize'

import Tag from '@atoms/Tag'

export const RecipeListingTemplate = ({
  categoryName,
  items,
  categories,
}: RecipeListingTemplateProps): ReactElement => {
  const {
    filteredItems,
    changePage,
    currentPage,
    filteredItemsNumber,
  } = useListing(items, ITEMS_PER_PAGE)

  const categoryParentPage = categories?.map((item) => item.parentSlug.display)
  const categoriesSlug = categories?.map((item) => item.slug)

  return (
    <>
      <Container>
        <StyledHeader>
          <h1>{categoryName}:</h1>
          {items.length < 1 ? (
            <span>Brak przepisow w tej kategorii</span>
          ) : (
            <span>Liczba przepisów w tej kategorii: {filteredItemsNumber}</span>
          )}
        </StyledHeader>
        <SubCategoriesWrapper>
          {categories &&
            categories.map((item) =>
              item.subCategories.map((subCategory) => (
                <Tag
                  link={`/przepisy/${categoryParentPage}/${categoriesSlug}/${latinize(
                    subCategory.display
                      .trim()
                      .toLowerCase()
                      .replace(/\s+/g, '-')
                      .replace(/\-\-+/g, '-')
                      .replace(/^-+/, '')
                      .replace(/-+$/, '')
                      .replace(/,/g, ''),
                  )}`}
                  key={subCategory._id}
                  tag={subCategory.display}
                />
              )),
            )}
        </SubCategoriesWrapper>
      </Container>
      <Container>
        <Listing
          allItemsNumber={filteredItemsNumber}
          filteredItems={filteredItems}
          changePage={changePage}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </Container>
    </>
  )
}
