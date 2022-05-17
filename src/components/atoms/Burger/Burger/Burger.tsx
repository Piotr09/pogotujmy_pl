import React from 'react'

import { StyledBurgerWrapper } from './Burger.styled'
import { BurgerTypes } from './Burger.types'

export const Burger = ({
  isOpened,
  setOpen,
}: BurgerTypes): React.ReactElement => (
  <StyledBurgerWrapper isOpened={isOpened} onClick={() => setOpen(isOpened)} />
)
