import React from 'react'

import { StyledButton, StyledButtonWrapper } from './Button.styled'
import { ButtonTypes } from './Button.types'
export const Button = ({
  aria,
  label,
  onClick,
}: ButtonTypes): React.ReactElement => (
  <StyledButtonWrapper>
    <StyledButton aria-label={aria} onClick={onClick}>
      <span>{label}</span>
    </StyledButton>
  </StyledButtonWrapper>
)
