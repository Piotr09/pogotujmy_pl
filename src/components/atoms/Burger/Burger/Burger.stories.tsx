import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { Burger as BurgerComponent } from './Burger'
import { BurgerTypes } from './Burger.types'

export default {
  title: 'Components/Atoms/MobileSearchIcon',
}

const StyledComponentWrapper = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.palette.primary};
`

export const Burger: FC<BurgerTypes> = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  return (
    <StyledComponentWrapper>
      <BurgerComponent
        isOpened={isOpened}
        setOpen={() => setIsOpened((prevState) => !prevState)}
      />
    </StyledComponentWrapper>
  )
}
