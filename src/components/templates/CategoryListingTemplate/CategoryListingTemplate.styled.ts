import styled from 'styled-components'

// export const RecipesCounter = styled.div`
//   margin: 32px 0 24px;
//   padding: 0 10px;
//
//   span {
//     color: ${({ theme }) => theme.palette.grayPalette[400]};
//     font: 400 18px/27px ${({ theme }) => theme.fonts.primary};
//     letter-spacing: 2px;
//
//     :nth-child(2) {
//       :before {
//         content: '\\00a0';
//         display: inline-block;
//       }
//     }
//
//     @media ${({ theme }) => theme.breakpoints.large} {
//       padding: unset;
//     }
//   }
// `

export const SubCategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 16px;

  a {
    margin: 0 15px 40px 0;
  }

  @media ${({ theme }) => theme.media.maxWidth} {
    margin: 0;
  }
`

export const StyledHeader = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 16px;

  h1 {
    margin: 30px 0 20px;
    font-size: 32px;
  }

  span {
    color: ${({ theme }) => theme.palette.beige};
    font-size: 16px;
    margin-bottom: 30px;
  }

  @media ${({ theme }) => theme.media.maxWidth} {
    margin: 0;
  }
`
