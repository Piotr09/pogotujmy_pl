import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  width: 100%;
`

export const StyledArticle = styled.article`
  max-width: 1000px;
  padding: 0 16px;

  @media ${({ theme }) => theme.media.desktop} {
    margin: auto 80px auto auto;
  }

  @media ${({ theme }) => theme.media.maxWidth} {
    margin: 0 auto;
  }
`

export const StyledTextContainer = styled.section`
  padding: 30px 16px;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  margin: 0 auto;
  box-shadow: 5px 5px 33px 3px rgb(25 25 25 / 5%);
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.white};

  :not(:nth-child(0)) {
    padding: 30px;
    box-shadow: unset;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.palette.white};
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 30px 0;
    margin-bottom: 0;
  }
`
