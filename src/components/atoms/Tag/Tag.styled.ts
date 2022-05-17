import styled from 'styled-components'

export const StyledRecipeTag = styled.span`
  color: ${({ theme }) => theme.palette.black};
  padding: 10px 15px;
  border-radius: 15px;
  margin: 10px 0;
  border: 2px solid;

  :not(:last-child) {
    margin-right: 15px;
  }
`

export const StyledTagsContainer = styled.section`
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  margin: 25px auto 50px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`
