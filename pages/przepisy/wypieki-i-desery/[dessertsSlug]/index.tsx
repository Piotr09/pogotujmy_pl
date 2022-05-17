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
  dessertsSlug: string
  categoryData: { entries: CategoryProps[] }
}

const SubDesserts = ({
  mappedRecipes,
  dessertsSlug,
  categoryData,
}: CategoryListingProps): ReactElement => {
  const filteredItems = categoryData.entries.filter(
    (item) => item.slug === dessertsSlug,
  )

  const categoryTitle = filteredItems.map((item) => item.title)
  const filtered = mappedRecipes.entries.filter((item) =>
    item?.desserts_category?.some((item) => item.display === dessertsSlug),
  )

  const hasSubcategories = categoryData.entries.filter(
    (category) => category.subCategories && category.slug === dessertsSlug,
  )

  const mappedRelatedCards = filtered.map((item) => mapRelatedCard(item))

  return (
    <>
      <Breadcrumbs
        lastItemValue={String(categoryTitle)}
        pages={[HOMEPAGE, ALL_RECIPES, INGREDIENTS]}
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
          categories={hasSubcategories}
        />
      </Container>
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const categoryResponse = await getCollection('dessertsCategory')
  const categoryData = await categoryResponse.json()

  const paths = categoryData.entries.map((category) => {
    return {
      params: {
        dessertsSlug: category.slug,
      },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps(context: {
  params: { dessertsSlug: string }
}): Promise<GetStaticPropsResult<CategoryListingProps>> {
  const {
    params: { dessertsSlug },
  } = context

  const recipesResponse = await getCollection('Recipe')
  const recipesData = await recipesResponse.json()

  const categoryResponse = await getCollection('dessertsCategory')
  const categoryData = await categoryResponse.json()

  const mappedRecipes = recipesData

  return {
    props: { mappedRecipes, dessertsSlug, categoryData },
  }
}

export default SubDesserts
