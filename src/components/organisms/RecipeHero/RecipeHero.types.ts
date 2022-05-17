import type { PicutreTypes } from '@atoms/Picture/Picture.types'
import type { RecipeInfoProps } from '@molecules/RecipeInfo/RecipeInfo.types'

export interface RecipeHeroProps {
  image: PicutreTypes
  title: string
  excerpt: string
  slug?: string
  recipeInfo?: RecipeInfoProps
  isHomepage?: boolean
}
