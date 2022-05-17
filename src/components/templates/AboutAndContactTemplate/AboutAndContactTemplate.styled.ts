import styled from 'styled-components'

export const AboutWrapper = styled.article`
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 0 16px;

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.media.maxWidth} {
    padding: 0;
  }
`
export const TextWrapper = styled.section`
  h1 {
    margin-bottom: 30px;
  }
`

export const ImageWrapper = styled.section`
  padding: 0 0 30px 0;

  picture {
    img {
      object-fit: cover;
      border-radius: 10px;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0 30px 0 0;
  }
`
