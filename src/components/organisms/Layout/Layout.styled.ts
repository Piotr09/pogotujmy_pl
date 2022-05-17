import styled from 'styled-components'
import { StyledLinkButton } from '@atoms/LinkButton/LinkButton.styled'

export const SocialContainer = styled.div`
  padding: 35px 0;
  background-color: white;

  > div {
    display: block;
    text-align: center;
  }

  @media ${({ theme }) => theme.media.desktop} {
    > div {
      display: flex;
    }
  }
`

export const StyledMain = styled.main`
  min-height: calc(100vh - 295px);
  //margin-top: 80px;

  @media ${({ theme }) => theme.media.desktop} {
    margin-top: 0;
  }
`

export const StyledSkipToWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const StyledSkipToButton = styled(StyledLinkButton)`
  position: absolute;
  transform: translateY(-100%);
  z-index: 10;
  padding: 5px 10px;

  :nth-of-type(2) {
    left: 200px;
  }

  :focus {
    position: relative;
    transform: translateY(0%);
  }
`
