import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft'
import styled from 'styled-components'

export const StyledPagination = styled.div<{ pageCount: number }>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  width: 100%;

  .pagination {
    align-self: center;
    display: ${({ pageCount }) => (pageCount <= 1 ? 'none' : 'flex')};
    flex-direction: row;
    list-style: none;
    margin: 0 0 60px;

    li {
      a {
        text-decoration: none;
        align-items: center;
        background: none;
        cursor: pointer;
        display: flex;
        font-weight: 400;
        height: 40px;
        justify-content: center;
        margin: 5px;
        width: 40px;
      }
    }

    .selected {
      a {
        cursor: default;
        font-weight: 600;
      }
    }

    .disabled {
      opacity: 0.3;

      a {
        cursor: default;
      }
    }
  }
`

export const StyledArrowLeft = styled(ArrowLeft)`
  height: 25px;
  width: 40px;
`

export const StyledArrowRight = styled(ArrowLeft)`
  height: 25px;
  transform: rotate(180deg);
  width: 40px;
`
