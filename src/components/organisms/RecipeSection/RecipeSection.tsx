import IngredientsSection from '@molecules/IngredientsSection'
import InstructionsSection from '@molecules/InstructionsSection'
import {
  IngredientsSectionWrapper,
  InstructionsSectionWrapper,
  RecipeSectionWrapper,
} from '@organisms/RecipeSection/RecipeSection.styled'
import type { ReactElement } from 'react'
import React from 'react'

import type { RecipeSectionProps } from './RecipeSection.types'

export const RecipeSection = ({
  ingredients,
  instructions,
}: RecipeSectionProps): ReactElement => (
  <RecipeSectionWrapper>
    <IngredientsSectionWrapper>
      <IngredientsSection ingredients={ingredients} />
    </IngredientsSectionWrapper>
    <InstructionsSectionWrapper>
      <InstructionsSection instructions={instructions} />
    </InstructionsSectionWrapper>
  </RecipeSectionWrapper>
)
