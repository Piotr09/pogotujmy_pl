import styled from 'styled-components'

export const StyledListing = styled.div`
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-gap: 20px;
  padding: 0 16px;

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
  }
`

export const StyledListingItemWrapper = styled.div`
  border-radius: 8px;
  //margin: 0 16px;
  width: 100%;

  :hover {
    cursor: pointer;
    transition: box-shadow 0.3s;
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin-bottom: 72px;
  }

  @media ${({ theme }) => theme.media.maxWidth} {
    margin: 0;
  }
`
