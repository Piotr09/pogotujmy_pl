import styled from 'styled-components'

export const RecipeSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.tablet} {
    flex-wrap: nowrap;
    flex-direction: row;
    padding: 30px;
  }
`

export const IngredientsSectionWrapper = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    width: 30%;
  }
`
export const InstructionsSectionWrapper = styled.div`
  //padding: 30px 60px;
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    width: 70%;
    padding: 0 60px;
  }
`
