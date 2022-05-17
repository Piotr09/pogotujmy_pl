import styled from 'styled-components'

export const RecipeInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0 20px 0;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media ${({ theme }) => theme.media.desktop} {
    padding: 5px 0 0 0;
    flex-wrap: nowrap;
  }
`

export const RecipeInfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2px 8px;
  border-radius: 10px;
  margin-right: 15px;
  align-items: center;
  border: 2px solid black;
  margin-top: 20px;
  width: max-content;

  span {
    line-height: 0;
    text-align: center;
    display: block;
    padding: 0 5px 0 10px;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.palette.black};
  }
`

export const RecipeInfo = styled.div`
  padding: 7px;
  width: 35px;
  line-height: 16px;
  color: white;
  display: inline-block;

  svg {
    width: 27px;
    fill: black;
  }
`
