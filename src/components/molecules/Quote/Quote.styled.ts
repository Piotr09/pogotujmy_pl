import styled from 'styled-components'

export const StyledQuoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  width: 100%;
  height: 500px;
  background: url(${(props) => props.backgroundImage}) fixed center no-repeat;
  background-size: cover;
`

export const StyledQuoteHeading = styled.h2`
  color: ${({ theme }) => theme.palette.white};
  text-align: center;
  font: 28px/28px ${({ theme }) => theme.fonts.primary};
  max-width: 65%;
  font-family: ${({ theme }) => theme.palette.primary};
  padding: 45px 20px 20px;
  text-shadow: 0 0 20px #292929;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 35px;
    line-height: 42px;
  }
`
