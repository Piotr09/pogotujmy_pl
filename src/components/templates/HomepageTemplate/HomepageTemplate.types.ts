import { RecipeHeroProps } from '@organisms/RecipeHero/RecipeHero.types'
import { RelatedCardTypes } from '@molecules/RelatedCard/RelatedCard.types'

export interface HomepageTemplateProps {
  slider?: RecipeHeroProps[]
  relatedArticles?: RelatedCardTypes[]
  newestArticles?: RelatedCardTypes[]
}
