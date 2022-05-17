import { getCollection } from '@adapters/cockpit'
import { GetStaticPropsResult } from 'next'
import { ReactElement } from 'react'
import { ArticleProps } from '@/types/article'
import Breadcrumbs from '@atoms/Breadcrumbs'
import SeoHead from '@atoms/SeoHead'
import RecipeListingTemplate from '@templates/RecipeListingTemplate'
import { mapRelatedCard } from '@helpers/mappers/relatedCard'

interface NewestArticlesListingProps {
  articlesData: { entries: ArticleProps[] }
}

const Recipes = ({
  articlesData,
}: NewestArticlesListingProps): ReactElement => {
  const categoryTitle = 'Przepisy'

  const mappedRelatedCards = articlesData.entries.map((item) =>
    mapRelatedCard(item),
  )

  return (
    <>
      <Breadcrumbs
        lastItemValue={categoryTitle}
        pages={[{ label: 'Strona główna', url: '/' }]}
      />
      <SeoHead
        breadcrumbLabel={'Wszystkie najnowsze przepisy'}
        sitemapLabel={'Wszystkie najnowsze przepisy'}
        seoTitle={'Wszystkie przepisy'}
        seoDescription={
          'Zobacz wszystkie najnowsze przepisy na blogu. Pyszne pomysły na obiady, ciasta, desery, dania sezonowe, mięsne i wegetariańskie.'
        }
        ogTitle={'Wszystkie najnowsze przepisy'}
        ogDescription={
          'Zobacz wszystkie najnowsze przepisy na blogu. Pyszne pomysły na obiady, ciasta, desery, dania sezonowe, mięsne i wegetariańskie.'
        }
      />
      <RecipeListingTemplate
        categoryName={'Wszystkie przepisy'}
        items={mappedRelatedCards}
      />
    </>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<NewestArticlesListingProps>
> {
  const articlesResponse = await getCollection('Recipe?sort[_created]=-1')
  const articlesData = await articlesResponse.json()

  return {
    props: { articlesData },
  }
}

export default Recipes
