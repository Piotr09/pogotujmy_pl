// import fetch from 'isomorphic-unfetch'
// import type { Urls } from '@config'
// import { PicutreTypes } from '@atoms/Picture/Picture.types'
// import SeoHead from '@atoms/SeoHead'
// import { Container } from '@atoms/Container'
// import Breadcrumbs from '@atoms/Breadcrumbs'
// import React from 'react'
// import { ALL_RECIPES, HOMEPAGE } from '@atoms/Breadcrumbs/Breadcrumbs.const'
// import { CategoryListingTemplate } from '@templates/CategoryListingTemplate/CategoryListingTemplate'
//
// interface categoryProps {
//   urls: Urls
//   categoryData: {
//     entries: [
//       {
//         title: string
//         image: PicutreTypes
//         slug: string
//         parentSlug: {
//           display: string
//         }
//       },
//     ]
//   }
// }
//
// const token = process.env.COCKPIT_TOKEN
//
// export async function getStaticProps(): Promise<{ props: categoryProps }> {
//   const { urls } = await import('@config')
//   const articlesUrl = `${urls.collectionsUrl}/get/dessertsCategory?sort[_created]=-1`
//
//   const categoryResponse = await fetch(articlesUrl, {
//     method: 'post',
//     headers: {
//       'Cockpit-Token': token,
//       body: JSON.stringify({
//         limit: 10,
//         populate: -1,
//       }),
//     },
//   })
//
//   const categoryData = await categoryResponse.json()
//
//   return {
//     props: { categoryData, urls },
//   }
// }
//
// const Occasions = (props: categoryProps) => {
//   const filteredSubCategories = props.categoryData.entries.filter(
//     (item) =>
//       item.title != 'Wypieki i desery' &&
//       item.parentSlug.display === 'wypieki-i-desery',
//   )
//   return (
//     <>
//       <Breadcrumbs
//         lastItemValue="Wypieki i desery"
//         pages={[HOMEPAGE, ALL_RECIPES]}
//       />
//       <SeoHead
//         breadcrumbLabel={'Wszystkie najnowsze przepisy'}
//         sitemapLabel={'Wszystkie najnowsze przepisy'}
//         seoTitle={'Wszystkie przepisy'}
//         seoDescription={
//           'Zobacz wszystkie najnowsze przpisy na blogu. Pyszne pomysły na obiady, ciasta, desery, dania sezonowe, mięsne i wegetariańskie.'
//         }
//         ogTitle={'Wszystkie najnowsze przepisy'}
//         ogDescription={
//           'Zobacz wszystkie najnowsze przpisy na blogu. Pyszne pomysły na obiady, ciasta, desery, dania sezonowe, mięsne i wegetariańskie.'
//         }
//       ></SeoHead>
//       <Container>
//         <CategoryListingTemplate
//           categoryListing="wypieki-i-desery"
//           categoryName="Wypieki i desery"
//           items={filteredSubCategories}
//         />
//       </Container>
//     </>
//   )
// }
//
// export default Occasions

import type { CategoryProps } from '@/types/category'
import { getCollection } from '@adapters/cockpit'
import { GetStaticPropsResult } from 'next'
import { ReactElement } from 'react'
import CategoryListingTemplate from '@templates/CategoryListingTemplate'

interface CategoryListingProps {
  categoryData: { entries: CategoryProps[] }
}

const Desserts = ({ categoryData }: CategoryListingProps): ReactElement => {
  const categoryTitle = 'Wypieki i desery'
  const filteredSubCategories = categoryData.entries.filter(
    (item) =>
      item.title !== categoryTitle &&
      item.parentSlug.display === 'wypieki-i-desery',
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
    'dessertsCategory?sort[_created]=-1',
  )
  const categoryData = await categoryResponse.json()

  return {
    props: { categoryData },
  }
}

export default Desserts
