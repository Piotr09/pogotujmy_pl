import React, { ReactElement } from 'react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import { HomepageTemplate } from '@templates/HomepageTemplate/HomepageTemplate'
import { getCollection, getSingleton, getSlider } from '@adapters/cockpit'
import { ArticleProps, MetaDataProps } from '@/types/article'
import { RelatedArticleProps, SingleHomepageProps } from '@/types/homepage'
import {
  mapRelatedCard,
  mapRelatedRecipesCard,
} from '@helpers/mappers/relatedCard'
import { mapSlider } from '@helpers/mappers/slider'
import SeoHead from '@atoms/SeoHead'

interface HomepageProps {
  homepageData: SingleHomepageProps
  articleData: { entries: ArticleProps[] }
  slider: ArticleProps[]
  relatedArticles: RelatedArticleProps[]
  seoHead: Omit<MetaDataProps, 'ogImage'>
}

SwiperCore.use([Navigation, Autoplay])

export const Homepage = (props: Partial<HomepageProps>): ReactElement => {
  const { articleData, relatedArticles, seoHead, slider } = props

  const mappedNewestCards = articleData.entries.map((item) =>
    mapRelatedCard(item),
  )

  const mappedRelatedCards = relatedArticles.map((item) =>
    mapRelatedRecipesCard(item),
  )

  const mappedSlider = slider.map((item) => mapSlider(item))

  return (
    <>
      <SeoHead {...seoHead} />
      <HomepageTemplate
        slider={mappedSlider}
        newestArticles={mappedNewestCards}
        relatedArticles={mappedRelatedCards}
      />
    </>
  )
}

export async function getStaticProps(): Promise<{ props: HomepageProps }> {
  const homepageResponse = await getSingleton('Homepage')
  const homepageData = await homepageResponse.json()

  const relatedArticles = homepageData.related_articles
  const seoHead = homepageData.seoHead[0].settings

  const articleResponse = await getCollection('Recipe?sort[_created]=-1')
  const articleData = await articleResponse.json()

  const firstHeroSlider = `${homepageData.slider[0]._id}`
  const secondHeroSlider = `${homepageData.slider[1]._id}`
  const thirdHeroSlider = `${homepageData.slider[2]._id}`

  const sliderResponse = await getSlider(
    firstHeroSlider,
    secondHeroSlider,
    thirdHeroSlider,
  )

  const slider = await sliderResponse.json()

  return {
    props: {
      homepageData,
      articleData,
      relatedArticles,
      slider,
      seoHead,
    },
  }
}

export default Homepage
