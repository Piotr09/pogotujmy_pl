import styled from 'styled-components'

export const StyledInstructionListOl = styled.ol`
  align-content: center;
  counter-reset: orderedlist;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 0;
  list-style-type: none;

  li {
    display: flex;
    margin-bottom: 20px;
    line-height: 150%;

    div > * {
      :not(last-child) {
        margin-bottom: 20px;
      }
    }

    > * {
      display: flex;
      flex-direction: column;
    }

    :before {
      content: counter(orderedlist);
      counter-increment: orderedlist;
      display: flex;
      font-size: 45px;
      margin: 10px 20px 0 0;
      width: 25px;
    }
  }
`

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.palette.brown};
  font: 32px/150% ${({ theme }) => theme.fonts.primary};
  margin: 40px 0 20px;
`
