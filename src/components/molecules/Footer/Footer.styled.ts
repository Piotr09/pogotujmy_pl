import styled from 'styled-components'

export const StyledFooterWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.12) 0 7px 29px 0;

  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
    padding: 0;
    height: 80px;
    justify-content: space-between;
  }
`

export const FooterContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto 16px;

  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.media.maxWidth} {
    margin: 0 auto;
  }
`

export const CopyrightInfo = styled.div`
  width: 100%;
  text-align: center;

  @media ${({ theme }) => theme.media.desktop} {
    width: 30%;
    text-align: left;
  }
`

export const StyledFooterLinks = styled.ul`
  width: 100%;
  justify-content: center;
  transition: ease-in-out 0.2s;
  color: black;
  list-style: none;
  display: flex;
  margin-top: 20px;

  li:not(:last-of-type) {
    margin-right: 20px;
  }

  a {
    font-size: 15px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 70%;
    margin-top: unset;
    justify-content: right;
  }
`
