import { RelatedCardTypes } from '@molecules/RelatedCard/RelatedCard.types'
import { RecipeHeroProps } from '@organisms/RecipeHero/RecipeHero.types'
import { Description } from '@/types/article'

export interface RecipeTemplateProps {
  recipeHero: RecipeHeroProps
  recipeDescription: Description[]
  recipeId: string
  recipeTags: string[]
  newestArticles: RelatedCardTypes[]
}
