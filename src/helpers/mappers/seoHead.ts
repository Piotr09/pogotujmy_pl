import { MetaDataProps } from '@/types/article'
import { SeoHeadTypes } from '@atoms/SeoHead/SeoHead.types'

export const mapSeoHead = (seoHead: MetaDataProps): SeoHeadTypes => ({
  seoTitle: seoHead.seoTitle,
  seoDescription: seoHead.seoDescription,
  ogTitle: seoHead.seoTitle,
  ogDescription: seoHead.ogDescription,
  ogImage: seoHead.ogImage.path,
})
