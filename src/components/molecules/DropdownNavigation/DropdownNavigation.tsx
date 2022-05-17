import SecondaryNavigationList from '@atoms/SecondaryNavigationList'
import { StyledSecondaryNavWrapper } from '@atoms/SecondaryNavigationList/SecondaryNavigationList.styled'
import React, { useState, MouseEvent } from 'react'

import { useDropdownNavigation } from './DropdownNavigation.hook'
import {
  StyledArrow,
  StyledArrowDown,
  StyledButtonNavigation,
  StyledIconWrapper,
} from './DropdownNavigation.styled'
import { DropdownNavigationTypes } from './DropdownNavigation.types'

export const DropdownNavigation = ({
  title,
  ariaLabel,
  links,
}: DropdownNavigationTypes): React.ReactElement => {
  const { isOpened, setIsOpened, subNavRef } = useDropdownNavigation()

  const [dropdownPositionX, setDropdownPositionX] = useState<number>()

  return (
    <>
      <StyledButtonNavigation
        dropdownPositionX={dropdownPositionX}
        onClick={(e: MouseEvent<HTMLButtonElement>): void => {
          setIsOpened((prevState) => !prevState)
          setDropdownPositionX(
            (e.target as HTMLButtonElement).getBoundingClientRect().left,
          )
        }}
        aria-label={ariaLabel}
      >
        {title} <StyledArrow isOpened={isOpened} />
        <StyledIconWrapper isOpened={isOpened}>
          <StyledArrowDown />
        </StyledIconWrapper>
      </StyledButtonNavigation>
      {isOpened && (
        <StyledSecondaryNavWrapper ref={subNavRef}>
          <SecondaryNavigationList links={links} />
        </StyledSecondaryNavWrapper>
      )}
    </>
  )
}
