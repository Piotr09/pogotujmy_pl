import styled from 'styled-components'

export const ShareWrapper = styled.div`
  padding: 0 15px;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.large} {
    padding: 0 0 0 30px;
  }
`

export const StyledShareButtonsWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`

export const StyledShareButtons = styled.div`
  ${({ theme }) => theme.boxShadow};
  background-color: white;
  border-radius: 8px;
  flex-direction: row;
  justify-content: right;
  position: absolute;
  right: 0;
  top: 0;
  width: max-content;
  z-index: 20;
  display: grid;
  background: unset;
  transition: 0.2s ease-in-out;

  @media ${({ theme }) => theme.media.desktop} {
    right: 20px;
    top: 100px;
  }
`
