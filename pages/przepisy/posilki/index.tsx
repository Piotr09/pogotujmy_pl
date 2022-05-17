import type { CategoryProps } from '@/types/category'
import { getCollection } from '@adapters/cockpit'
import { GetStaticPropsResult } from 'next'
import { ReactElement } from 'react'
import CategoryListingTemplate from '@templates/CategoryListingTemplate'

interface CategoryListingProps {
  categoryData: { entries: CategoryProps[] }
}

const Dishes = ({ categoryData }: CategoryListingProps): ReactElement => {
  const categoryTitle = 'Posiłki'
  const filteredSubCategories = categoryData.entries.filter(
    (item) => item.title !== categoryTitle,
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
    'dishesCategory?sort[_created]=-1',
  )
  const categoryData = await categoryResponse.json()

  return {
    props: { categoryData },
  }
}

export default Dishes
