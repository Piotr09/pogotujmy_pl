import type { ReactElement } from 'react'

import {
  StyledIngredientSectionWrapper,
  StyledTitle,
  StyledUl,
} from './IngredientsSection.styled'
import type { IngredientsSectionProps } from './IngredientsSection.types'
import React from 'react'

export const IngredientsSection = ({
  ingredients,
}: IngredientsSectionProps): ReactElement => (
  <StyledIngredientSectionWrapper>
    <StyledTitle>Składniki:</StyledTitle>
    <StyledUl>
      {ingredients.map((ingredient) => (
        <li key={ingredient.value}>{ingredient.value}</li>
      ))}
    </StyledUl>
  </StyledIngredientSectionWrapper>
)
