import { BurgerTypes } from '@atoms/Burger/Burger.types'
import styled, { css } from 'styled-components'

export const StyledBurgerWrapper = styled.div<BurgerTypes>`
  width: 24px;
  height: 20px;
  display: block;
  position: relative;
  cursor: pointer;
  margin: 20px;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 24px;
    height: 6px;
    display: block;
    background: black;
    transform: translate(0);
    transition: transform 0.5s;
  }

  &::after {
    transform: translateY(14px);
  }

  ${({ isOpened }) =>
    isOpened &&
    css`
      &::before {
        transform: translateY(7px) rotateZ(45deg);
      }

      &::after {
        transform: translateY(7px) rotate(-45deg);
      }
    `}

  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  } ;
`
