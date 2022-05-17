import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'
import styled, { css } from 'styled-components'
import { NavigateNext } from '@styled-icons/material-rounded/NavigateNext'

interface ButtonTypes {
  isOpened?: boolean
  setIsOpened?: () => void
}

export const StyledArrow = styled(NavigateNext)<{ isOpened: boolean }>`
  display: none;

  @media ${({ theme }) => theme.media.desktop} {
    display: block;
    height: 22px;
    margin-top: 0;
    width: 22px;
    transition: 0.2s ease-in-out;
    transform: ${({ isOpened }) =>
      isOpened ? 'rotate(-90deg)' : 'rotate(90deg)'};
  }
`

export const StyledButtonNavigation = styled.button<ButtonTypes>`
  display: flex;
  width: 100%;
  padding: 5px 50px;
  align-items: center;
  box-sizing: border-box;
  background: white;
  color: black;
  cursor: pointer;
  font: 20px/40px ${({ theme }) => theme.fonts.primary};
  margin-left: 5px;
  justify-content: center;
  z-index: 20;

  @media ${({ theme }) => theme.media.desktop} {
    font: 15px/18px ${({ theme }) => theme.fonts.primary};
    letter-spacing: 1.5px;
    width: max-content;
    padding: 0 5px;
  }
`

export const StyledIconWrapper = styled.span<ButtonTypes>`
  font: 30px/30px ${({ theme }) => theme.fonts.primary};
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transform: translate(5px, -12px);

  svg {
    width: 30px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }

  ${({ isOpened }) =>
    isOpened &&
    css`
      z-index: 90;

      svg {
        color: black;
        transform: rotate(180deg) translateY(-5px);
      }
    `}
`

export const StyledArrowDown = styled(ChevronDown)`
  color: black;
  transform: translateY(5px);
  width: 20px;
`
