import Burger from '@atoms/Burger'
import Navigation from '@molecules/Navigation'
import React, { useState } from 'react'
import { logo } from './Header.consts'
import {
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledLogo,
  StyledNav,
} from './Header.styled'
// import CustomSearch from '@atoms/CustomSearch/CustomSearch'
// import CustomHits from '@atoms/CustomSearch/CustomHits'
// import algoliasearch from 'algoliasearch/lite'
// import { InstantSearch } from 'react-instantsearch-dom'

export const Header = (): React.ReactElement => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  // const searchClient = algoliasearch(
  //   'TXB7RHYPX3',
  //   '5cb4ee3ccad60c7b0a77dbf918822f28',
  // )
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer>
        <StyledNav>
          <Burger
            isOpened={isOpened}
            setOpen={() => setIsOpened((prevState) => !prevState)}
          />
          <StyledLogo isOpened={isOpened} href={`/`}>
            <picture>
              <source media="(min-width: 1140px)" srcSet={logo.srcDesktop} />
              <img src={logo.srcMobile} alt={logo.alt} loading="lazy" />
            </picture>
          </StyledLogo>
        </StyledNav>
        <Navigation isOpened={isOpened} />
        {/*<InstantSearch indexName="recipe_pogotujmy" searchClient={searchClient}>*/}
        {/*  <CustomSearch />*/}
        {/*  <CustomHits />*/}
        {/*</InstantSearch>*/}
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  )
}
