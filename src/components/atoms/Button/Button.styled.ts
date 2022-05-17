import styled from 'styled-components'

export const StyledButtonWrapper = styled.button`
  width: 100%;
  margin: 20px 0;
`

export const StyledButton = styled.button`
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0 auto;
  text-align: center;
  padding: 20px 35px;
  color: white;
  font: 20px/1 ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme }) => theme.palette.blue};
  outline: 1px solid white;
  outline-offset: -7px;
  border-radius: 10px;
  transition: 0.15s ease-in-out;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.palette.graybeige};
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: fit-content;
  }
`
