import Picture from '@atoms/Picture'
import { RecipeInfoComponent } from '@molecules/RecipeInfo/RecipeInfo'
import {
  DescriptionWrapper,
  ImageWrapper,
  RecipeHeroWrapper,
} from '@organisms/RecipeHero/RecipeHero.styled'
import type { RecipeHeroProps } from '@organisms/RecipeHero/RecipeHero.types'
import type { ReactElement } from 'react'

export const RecipeHero = ({
  image,
  title,
  excerpt,
  recipeInfo,
  slug,
  isHomepage,
}: RecipeHeroProps): ReactElement => (
  <RecipeHeroWrapper
    isHomepage={isHomepage}
    onClick={() => (window.location.href = `/przepisy/${slug}`)}
  >
    <ImageWrapper slug={slug}>
      <Picture {...image} />
    </ImageWrapper>
    <DescriptionWrapper isHomepage={isHomepage} slug={slug}>
      {slug ? (
        <a href={`/przepisy/${slug}`}>
          <h1>{title}</h1>
          <p>{excerpt}</p>
        </a>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{excerpt}</p>
        </>
      )}
      {recipeInfo && <RecipeInfoComponent {...recipeInfo} />}
    </DescriptionWrapper>
  </RecipeHeroWrapper>
)
