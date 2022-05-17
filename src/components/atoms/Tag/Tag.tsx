import React from 'react'

import { TagProps } from '@atoms/Tag/Tag.types'
import { StyledRecipeTag } from '@atoms/Tag/Tag.styled'

export const Tag = ({ tag, link }: TagProps): React.ReactElement => (
  <>
    {link ? (
      <a href={link}>
        <StyledRecipeTag>{tag}</StyledRecipeTag>
      </a>
    ) : (
      <StyledRecipeTag>{tag}</StyledRecipeTag>
    )}
  </>
)
