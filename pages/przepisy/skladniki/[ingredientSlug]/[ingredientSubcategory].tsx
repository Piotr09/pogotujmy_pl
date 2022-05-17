import { Container } from '@atoms/Container'
import SeoHead from '@atoms/SeoHead'
import RecipeListingTemplate from '@templates/RecipeListingTemplate'
import {
  ALL_RECIPES,
  HOMEPAGE,
  INGREDIENTS,
} from '@atoms/Breadcrumbs/Breadcrumbs.const'
import Breadcrumbs from '@atoms/Breadcrumbs'
import type { ArticleProps } from '@/types/article'
import type { CategoryProps } from '@/types/category'
import { getCollection } from '@adapters/cockpit'
import { mapRelatedCard } from '@helpers/mappers/relatedCard'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import { ReactElement } from 'react'

interface CategoryListingProps {
  mappedRecipes: { entries: ArticleProps[] }
  ingredientSubcategory: string
  ingredientSlug: string
  categoryData: { entries: CategoryProps[] }
}

const SubIngredient = ({
  mappedRecipes,
  ingredientSlug,
  ingredientSubcategory,
  categoryData,
}: CategoryListingProps): ReactElement => {
  const filteredCategory = categoryData.entries.filter(
    (item) =>
      item.slug === ingredientSubcategory &&
      item.parentSlug.display === ingredientSlug,
  )

  const categoryTitle = filteredCategory.map((item) => item.title)
  const parentPageSlug = filteredCategory.map((item) => item.parentSlug.display)

  const filtered = mappedRecipes.entries.filter(
    (item) =>
      item.ingredients_category &&
      item.ingredients_category.some(
        (item) => item.display === ingredientSubcategory,
      ),
  )

  const mappedRelatedCards = filtered.map((item) => mapRelatedCard(item))

  return (
    <>
      <Breadcrumbs
        lastItemValue={String(categoryTitle)}
        pages={[
          HOMEPAGE,
          ALL_RECIPES,
          INGREDIENTS,
          {
            label: String(parentPageSlug),
            url: `${INGREDIENTS.url}/${parentPageSlug}`,
          },
        ]}
      />
      <SeoHead
        breadcrumbLabel={`Najlepsze przepisy na dania z kategorii ${categoryTitle}`}
        sitemapLabel={`Najlepsze przepisy na dania z z kategorii ${categoryTitle}`}
        seoTitle={`Najlepsze przepisy na dania z kategorii ${categoryTitle}`}
        seoDescription={`Zobacz zbiór najlepszych przepisów na dania z kategorii ${categoryTitle}. Zobacz moje propozycje i zainspiruj się! Pyszne pomysły na dania mięsne i wegetariańskie.`}
        ogTitle={`Najlepsze przepisy na dania z kategorii ${categoryTitle}`}
        ogDescription={`Zobacz zbiór najlepszych przepisów na dania z kategorii ${categoryTitle}. Zobacz moje propozycje i zainspiruj się! Pyszne pomysły na dania mięsne i wegetariańskie.`}
      ></SeoHead>
      <Container>
        <RecipeListingTemplate
          categoryName={String(categoryTitle)}
          items={mappedRelatedCards}
        />
      </Container>
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const categoryResponse = await getCollection('ingredientsCategory')
  const categoryData = await categoryResponse.json()

  const paths = categoryData.entries.map(({ parentSlug, slug }) => {
    return {
      params: {
        ingredientSlug: parentSlug.display,
        ingredientSubcategory: slug,
      },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps(context: {
  params: { ingredientSubcategory: string; ingredientSlug: string }
}): Promise<GetStaticPropsResult<CategoryListingProps>> {
  const {
    params: { ingredientSubcategory, ingredientSlug },
  } = context

  const recipesResponse = await getCollection('Recipe')
  const recipesData = await recipesResponse.json()

  const categoryResponse = await getCollection('ingredientsCategory')
  const categoryData = await categoryResponse.json()

  const mappedRecipes = recipesData

  return {
    props: {
      mappedRecipes,
      ingredientSubcategory,
      ingredientSlug,
      categoryData,
    },
  }
}

export default SubIngredient
