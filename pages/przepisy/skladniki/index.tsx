import type { CategoryProps } from '@/types/category'
import { getCollection } from '@adapters/cockpit'
import { GetStaticPropsResult } from 'next'
import { ReactElement } from 'react'
import CategoryListingTemplate from '@templates/CategoryListingTemplate'

interface CategoryListingProps {
  categoryData: { entries: CategoryProps[] }
}

const Ingredients = ({ categoryData }: CategoryListingProps): ReactElement => {
  const categoryTitle = 'Składniki'
  const filteredSubCategories = categoryData.entries.filter(
    (item) =>
      item.title !== categoryTitle && item.parentSlug.display === 'skladniki',
  )

  return (
    <CategoryListingTemplate
      categoryTitle={String(categoryTitle)}
      categoryData={filteredSubCategories}
    />
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<CategoryListingProps>
> {
  const categoryResponse = await getCollection(
    'ingredientsCategory?sort[_created]=-1',
  )
  const categoryData = await categoryResponse.json()

  return {
    props: { categoryData },
  }
}

export default Ingredients
