import styled, { css } from 'styled-components'

interface StyledLogoTypes {
  isOpened: boolean
}

export const StyledHeaderWrapper = styled.header`
  @media ${({ theme }) => theme.media.desktop} {
    position: relative;

    box-shadow: rgb(100 100 111 / 12%) 0px 7px 29px 0px;
  } ;
`

export const StyledNav = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: fixed;
  background: white;
  width: 100%;
  z-index: 10;

  @media ${({ theme }) => theme.media.desktop} {
    position: relative;
    width: unset;
  }
`

export const StyledHeaderContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  position: relative;
  background-color: white;

  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
  }
`

export const StyledLogo = styled.a<StyledLogoTypes>`
  position: relative;
  left: 16px;

  img {
    width: 160px;
    display: block;
    transition: opacity 0.5s;
    opacity: 1;
  }

  ${({ isOpened }) =>
    isOpened &&
    css`
      img {
        opacity: 0;
      }
    `}

  @media ${({ theme }) => theme.media.desktop} {
    position: relative;
    left: 0;
    transform: none;
    order: 0;
    padding: 0 0 0 16px;
    margin: 0 15px 0 0;

    img {
      width: 160px;
      opacity: 1;
    }
  }

  @media ${({ theme }) => theme.media.maxWidth} {
    left: 0;
    padding: 0;
  }
`
