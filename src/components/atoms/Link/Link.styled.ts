import styled from 'styled-components'

export const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font: 20px/1 ${({ theme }) => theme.fonts.primary};
  text-align: center;

  @media ${({ theme }) => theme.media.desktop} {
    font: 15px/18px ${({ theme }) => theme.fonts.primary};
    padding: 0 5px;
  }
`
