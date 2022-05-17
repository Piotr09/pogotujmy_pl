import styled, { css } from 'styled-components'

interface StyledNavTypes {
  isOpened?: boolean
}

export const StyledNav = styled.nav<StyledNavTypes>`
  width: 100%;
  position: fixed;
  top: 0;
  transform: translate(-150vw, 80px);
  background: white;
  z-index: 10;
  overflow: unset;
  text-align: center;

  @media ${({ theme }) => theme.media.desktop} {
    position: static;
    width: fit-content;
    min-height: auto;
    transform: none;
    //order: 1;
    transition: none;
  }

  ${({ isOpened }) =>
    isOpened &&
    css`
      transition: transform 0.5s ease-in-out;
      min-height: calc(100vh - 80px);
      transform: translate(0, 60px);
    `};
`

export const StyledNavigationWrapper = styled.ul`
  width: 100%;
  padding: 0 0 50px;
  margin: 0;
  list-style: none;
  display: block;
  overflow: scroll;
  max-height: 100vh;

  @media ${({ theme }) => theme.media.desktop} {
    display: inline-flex;
    height: 80px;
    align-items: center;
    padding: 0;
    overflow: unset;
  }

   li {
    white-space: nowrap;
  padding: 10px 20px;
  color: black;
  font-size: 18px;
  letter-spacing: 1px;
  display: block;
  text-align: center;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 16px;
    padding: 0;
    text-align: left;
  }
`

// export const StyledNavigationList = styled.li`
//
//   }
// `
