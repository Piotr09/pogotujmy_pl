import { ArticleProps } from '@/types/article'
import { RelatedCardTypes } from '@molecules/RelatedCard/RelatedCard.types'
import { CategoryProps } from '@/types/category'
import { RelatedArticleProps } from '@/types/homepage'

export const mapRelatedCard = (articles: ArticleProps): RelatedCardTypes => ({
  title: articles?.title,
  description: articles?.excerpt,
  image: {
    path: articles?.image?.path,
    altText: articles?.image?.description,
  },
  slug: articles?.slug,
})

export const mapRelatedRecipesCard = (
  article: RelatedArticleProps,
): RelatedCardTypes => ({
  title: article?.value.title,
  description: article?.value.description,
  image: {
    path: article?.value?.image.path,
    altText: article?.value?.image.description,
  },
  slug: article?.value?.slug,
})

export const mapCategoriesRelatedCard = (
  category: CategoryProps,
): RelatedCardTypes => ({
  title: category?.title,
  image: {
    path: category?.image?.path,
    altText: category?.image?.description,
  },
  slug: category?.slug,
})
