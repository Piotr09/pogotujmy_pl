import { ArticleProps } from '@/types/article'
import { RecipeHeroProps } from '@organisms/RecipeHero/RecipeHero.types'

export const mapSlider = (slide: ArticleProps): RecipeHeroProps => ({
  image: {
    path: slide?.image?.path,
    altText: slide?.image?.description,
  },
  title: slide?.title,
  excerpt: slide?.excerpt,
  slug: slide?.slug,
})
