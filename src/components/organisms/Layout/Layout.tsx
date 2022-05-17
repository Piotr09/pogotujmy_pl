import React, { ReactChildren, ReactElement } from 'react'
import { Footer } from '@/components/molecules/Footer/Footer'
import Header from '@/components/organisms/Header'
import { SocialMediaBlock } from '@molecules/SocialMedia/SocialMedia'
import {
  SocialContainer,
  StyledMain,
  StyledSkipToButton,
  StyledSkipToWrapper,
} from '@/components/organisms/Layout/Layout.styled'

const Layout = (props: {
  children: Partial<ReactChildren>[]
}): ReactElement => {
  return (
    <>
      <StyledSkipToWrapper>
        <StyledSkipToButton href="#mainContent">
          Przejdź do contentu
        </StyledSkipToButton>
        <StyledSkipToButton href="/wyszukiwarka">
          Przejdź do wyszukiwarki
        </StyledSkipToButton>
      </StyledSkipToWrapper>
      <Header />
      <StyledMain id="mainContent">{props.children}</StyledMain>
      <SocialContainer>
        <SocialMediaBlock
          size={45}
          label={'Bądź na bieżąco z nowymi przepisami!'}
        />
      </SocialContainer>
      <Footer />
    </>
  )
}
export default Layout
