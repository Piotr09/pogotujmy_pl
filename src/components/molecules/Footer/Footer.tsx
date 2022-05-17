import React, { ReactElement } from 'react'
import {
  StyledFooterWrapper,
  FooterContainer,
  CopyrightInfo,
  StyledFooterLinks,
} from './Footer.styled'
import Link from '@atoms/Link'

export const Footer = (): ReactElement => (
  <StyledFooterWrapper>
    <FooterContainer>
      <CopyrightInfo>
        <span>© {new Date().getFullYear()} | Pogotujmy.pl</span>
      </CopyrightInfo>
      <StyledFooterLinks>
        <li>
          <Link url={'/polityka-prywatnosci'} label={'Polityka prywatności'} />
        </li>
        <li>
          <Link url={'/wspolpraca'} label={'Współpraca'} />
        </li>
        <li>
          <Link url={'/kontakt'} label={'Kontakt'} />
        </li>
      </StyledFooterLinks>
    </FooterContainer>
  </StyledFooterWrapper>
)
