import { Container } from '@atoms/Container'
import SeoHead from '@atoms/SeoHead'
import RecipeListingTemplate from '@templates/RecipeListingTemplate'
import {
  ALL_RECIPES,
  DESSERTS,
  HOMEPAGE,
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
  subDessertSlug: string
  dessertsSlug: string
  categoryData: { entries: CategoryProps[] }
}

const Dessert = ({
  mappedRecipes,
  dessertsSlug,
  subDessertSlug,
  categoryData,
}: CategoryListingProps): ReactElement => {
  const filteredCategory = categoryData.entries.filter(
    (item) =>
      item.slug === subDessertSlug && item.parentSlug.display === dessertsSlug,
  )

  const categoryTitle = filteredCategory.map((item) => item.title)
  const parentPageSlug = filteredCategory.map((item) => item.parentSlug.display)

  const filtered = mappedRecipes.entries.filter(
    (item) =>
      item.ingredients_category &&
      item.ingredients_category.some((item) => item.display === subDessertSlug),
  )

  const mappedRelatedCards = filtered.map((item) => mapRelatedCard(item))

  return (
    <>
      <Breadcrumbs
        lastItemValue={String(categoryTitle)}
        pages={[
          HOMEPAGE,
          ALL_RECIPES,
          DESSERTS,
          {
            label: String(parentPageSlug),
            url: `${DESSERTS.url}/${parentPageSlug}`,
          },
        ]}
      />
      <SeoHead
        breadcrumbLabel={`Najlepsze przepisy na dania z kategorii ${categoryTitle}`}
        sitemapLabel={`Najlepsze przepisy na dania z z kategorii ${categoryTitle}`}
        seoTitle={`Najlepsze przepisy na dania z kategorii ${categoryTitle}`}
        seoDescription={`Zobacz zbi??r najlepszych przepis??w na dania z kategorii ${categoryTitle}. Zobacz moje propozycje i zainspiruj si??! Pyszne pomys??y na dania mi??sne i wegetaria??skie.`}
        ogTitle={`Najlepsze przepisy na dania z kategorii ${categoryTitle}`}
        ogDescription={`Zobacz zbi??r najlepszych przepis??w na dania z kategorii ${categoryTitle}. Zobacz moje propozycje i zainspiruj si??! Pyszne pomys??y na dania mi??sne i wegetaria??skie.`}
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
  const categoryResponse = await getCollection('dessertsCategory')
  const categoryData = await categoryResponse.json()

  const paths = categoryData.entries.map(({ parentSlug, slug }) => {
    return {
      params: {
        dessertsSlug: parentSlug.display,
        subDessertSlug: slug,
      },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps(context: {
  params: { subDessertSlug: string; dessertsSlug: string }
}): Promise<GetStaticPropsResult<CategoryListingProps>> {
  const {
    params: { subDessertSlug, dessertsSlug },
  } = context

  const recipesResponse = await getCollection('Recipe')
  const recipesData = await recipesResponse.json()

  const categoryResponse = await getCollection('dessertsCategory')
  const categoryData = await categoryResponse.json()

  const mappedRecipes = recipesData

  return {
    props: {
      mappedRecipes,
      subDessertSlug,
      dessertsSlug,
      categoryData,
    },
  }
}

export default Dessert
