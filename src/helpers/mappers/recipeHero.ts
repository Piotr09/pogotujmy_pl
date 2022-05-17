import { RecipeHero } from '@/types/article'
import { RecipeHeroProps } from '@organisms/RecipeHero/RecipeHero.types'

export const mapRecipeHero = (recipeHero: RecipeHero): RecipeHeroProps => ({
  image: {
    path: recipeHero?.settings?.image?.path,
    altText: recipeHero?.settings?.image?.description,
  },
  title: recipeHero?.settings?.title,
  excerpt: recipeHero?.settings?.excerpt,
  recipeInfo: {
    servingsNumber: recipeHero?.settings?.servingsNumber,
    prepTime: recipeHero?.settings?.prepTime,
    difficultyLevel: recipeHero?.settings?.difficultyLevel,
  },
})
