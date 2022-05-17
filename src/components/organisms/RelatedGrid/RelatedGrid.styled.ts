import styled from 'styled-components'

export const StyledRelatedGrid = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  z-index: 2;

  &::before {
    height: 600px;
    background-color: red;
    z-index: 1;
    width: 100vw;
    bottom: 0;
    position: relative;
    margin-left: -50vw;
    margin-top: 100px;
    left: 50%;
  }
`

export const StyledRelatedHeading = styled.h3`
  text-align: left;
  font-weight: 700;
  letter-spacing: -1.5px;
`
