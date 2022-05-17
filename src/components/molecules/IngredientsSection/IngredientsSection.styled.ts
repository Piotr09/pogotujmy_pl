import styled from 'styled-components'

export const StyledIngredientSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.lightPink};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 40px 30px;

  @media ${({ theme }) => theme.media.desktop} {
    padding: 40px 50px;
  }

  li {
    padding: 10px 0;
    border-bottom: 1px solid rgba(121, 144, 161, 0.28);

    :last-child {
      border-bottom: none;
    }
  }
`

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.palette.brown};
  font: 32px/150% ${({ theme }) => theme.fonts.primary};
  margin-bottom: 10px;
`

export const StyledRichText = styled.span`
  p {
    display: block;
    font: bold 15px/24px ${({ theme }) => theme.fonts.primary};
    padding: 10px 0;
  }
`

export const StyledUl = styled.ul`
  list-style: none;
`
