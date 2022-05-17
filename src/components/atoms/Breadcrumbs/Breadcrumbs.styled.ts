import { NavigateNext } from '@styled-icons/material-rounded/NavigateNext'
import styled, { css } from 'styled-components'

const StyledBreadcrumbLabel = css`
  font: 400 14px/24px ${({ theme }) => theme.fonts.primary};

  @media ${({ theme }) => theme.media.tablet} {
    padding: 8px 0;
  }
`

export const StyledWrapper = styled.section`
  @media ${({ theme }) => theme.media.tablet} {
    background-color: ${({ theme }) => theme.palette.lightPink};
  }
`

export const StyledBreadcrumbs = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin: auto;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  padding: 0 15px 20px;

  @media ${({ theme }) => theme.media.desktop} {
    padding: 0;
  }

  span {
    ${StyledBreadcrumbLabel};
  }

  li {
    align-items: center;
    display: flex;
    margin: 0;

    :last-child {
      svg {
        display: none;
      }
    }
  }
`

export const StyledBreadcrumbLink = styled.a`
  ${StyledBreadcrumbLabel};
  text-decoration: none;

  :first-letter {
    text-transform: uppercase;
  }
`

export const StyledArrow = styled(NavigateNext)`
  height: 22px;
  margin: 2px 5px 0;
  width: 22px;
`
