import styled from 'styled-components'

export const ErrorWrapper = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.palette.sandy};
  flex-direction: column;
  align-items: center;
  padding: 30px 16px;
  overflow: hidden;
  position: relative;
  }

  @media ${({ theme }) => theme.media.maxWidth} {
    padding: 30px 0;
  }
`

export const InlineImage = styled.img`
  display: inline;
  width: 55px;
  margin-left: 15px;
  transform: translateY(-5px);
`
export const ImageWrapper = styled.div`
  transform: translateX(55px);

  picture {
    max-width: 700px;
  }
`
export const TextWrapper = styled.div`
  text-align: center;

  a {
    color: #e57b07;
  }

  h1 {
    margin: 20px 0;
    font-size: 30px;

    @media ${({ theme }) => theme.media.maxWidth} {
      font-size: 60px;
    }
  }

  p {
    font: 16px/24px ${({ theme }) => theme.fonts.primary};
    margin: 10px 0;

    @media ${({ theme }) => theme.media.maxWidth} {
      font: 20px/32px ${({ theme }) => theme.fonts.primary};
    }
  }
`
