import React, { ReactElement } from 'react'

import { PeopleFill } from '@styled-icons/bootstrap/PeopleFill'
import { Time } from '@styled-icons/boxicons-regular/Time'
import { Podium } from '@styled-icons/ionicons-solid/Podium'
import { RecipeInfoProps } from '@molecules/RecipeInfo/RecipeInfo.types'
import {
  RecipeInfo,
  RecipeInfoColumn,
  RecipeInfoWrapper,
} from '@molecules/RecipeInfo/RecipeInfo.styled'

export const RecipeInfoComponent = ({
  servingsNumber,
  prepTime,
  difficultyLevel,
}: RecipeInfoProps): ReactElement => (
  <RecipeInfoWrapper>
    <RecipeInfoColumn>
      <RecipeInfo>
        <PeopleFill />
      </RecipeInfo>
      <span>{servingsNumber}</span>
    </RecipeInfoColumn>
    <RecipeInfoColumn>
      <RecipeInfo>
        <Time />
      </RecipeInfo>
      <span>{prepTime}</span>
    </RecipeInfoColumn>
    <RecipeInfoColumn>
      <RecipeInfo>
        <Podium />
      </RecipeInfo>
      <span>{difficultyLevel}</span>
    </RecipeInfoColumn>
  </RecipeInfoWrapper>
)
