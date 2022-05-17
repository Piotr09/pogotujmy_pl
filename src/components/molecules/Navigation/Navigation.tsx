import Link from '@atoms/Link'
import DropdownNavigation from '@molecules/DropdownNavigation'
import React from 'react'

import { StyledNav, StyledNavigationWrapper } from './Navigation.styled'
import { NavigationTypes } from './Navigation.types'
import {
  desserts,
  occasions,
  dishes,
  ingredients,
  cuisines,
} from '@molecules/DropdownNavigation/DropdownNavogation.const'

export const Navigation = ({
  isOpened,
}: NavigationTypes): React.ReactElement => {
  return (
    <StyledNav isOpened={isOpened}>
      <StyledNavigationWrapper>
        <li>
          <Link url={'/przepisy'} label={'Przepisy'} />
        </li>
        <li>
          <DropdownNavigation
            title={'Posiłki'}
            ariaLabel={'Zobacz przepisy z kategorii "posiłki"'}
            links={dishes.sort()}
          />
        </li>
        <li>
          <DropdownNavigation
            title={'Okazje'}
            ariaLabel={'Zobacz przepisy z kategorii "okazje"'}
            links={occasions.sort()}
          />
        </li>
        <li>
          <DropdownNavigation
            title={'Składniki'}
            ariaLabel={'Zobacz przepisy z kategorii "składniki"'}
            links={ingredients.sort()}
          />
        </li>
        <li>
          <DropdownNavigation
            title={'Kuchnie'}
            ariaLabel={'Zobacz przepisy z kategorii "kuchnie"'}
            links={cuisines}
          />
        </li>
        <li>
          <DropdownNavigation
            title={'Wypieki i desery'}
            ariaLabel={'Zobacz przepisy z kategorii "wypieki"'}
            links={desserts}
          />
        </li>
        <li>
          <Link url={'/kontakt'} label={'Kontakt'} />
        </li>
      </StyledNavigationWrapper>
    </StyledNav>
  )
}
