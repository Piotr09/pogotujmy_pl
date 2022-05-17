import styled, { css } from 'styled-components'
import { Container } from '@atoms/Container'

export const SlideWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
`

export const RelatedArticlesHeader = styled.h2`
  margin: 80px 16px 30px;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;

  @media ${({ theme }) => theme.media.desktop} {
    margin: 100px auto 30px;
    padding: 0 8px;
  }
`

const SliderArrow = css`
  width: 50px;
  height: 50px;
  border-radius: 20%;
  top: 250px;
  background-color: white;
  border: 2px solid black;
  position: absolute;

  svg {
    margin-top: 12px;
    margin-left: 10px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    top: 50%;
  }
`

export const SliderLeftArrow = styled.div`
  ${SliderArrow};
  left: 2%;

  :hover {
    cursor: pointer;
  }
`

export const SliderRightArrow = styled.div`
  ${SliderArrow};
  right: 2%;

  svg {
    transform: rotate(180deg);
  }

  :hover {
    cursor: pointer;
  }
`

export const NewestRecipesContainer = styled(Container)`
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  padding: 0 16px;
  width: 100%;
  position: relative;
  grid-gap: 20px;
  margin-top: 20px;

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }

  @media ${({ theme }) => theme.media.maxWidth} {
    padding: 0;
  }
`

export const RelatedArticlesContainer = styled(Container)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  padding: 0 16px;

  ::before {
    content: '';
    width: 100vw;
    height: 430px;
    background-color: #f7eae1;
    z-index: -1;
    position: absolute;
    top: 150px;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.media.maxWidth} {
    padding: 0;
  }
`
