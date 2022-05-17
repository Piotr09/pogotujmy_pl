import styled, { css } from 'styled-components'

import { VARIANTS } from './LinkButton.types'

interface StyledLinkButtonTypes {
  variant: VARIANTS
  isCenterd: boolean
}

const getVariant = (variant: VARIANTS) => {
  switch (variant) {
    case VARIANTS.SECONDARY:
      return css`
        border: unset;
        background-color: unset;
      `
    case VARIANTS.HIDDEN:
      return css`
        display: none;
      `
    default:
      return css`
        color: ${({ theme }) => theme.palette.black};
        background-color: ${({ theme }) => theme.palette.lightbeige};

        &:hover,
        &:active {
          background-color: ${({ theme }) => theme.palette.ecru};
        }

        &::before {
          display: none;
        }
      `
  }
}

export const StyledLinkButton = styled.a<StyledLinkButtonTypes>`
  border-radius: 4px;
  display: block;
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: ${({ isCentered }) => (isCentered ? '20px auto' : 'unset')};
  font-size: 16px;
  line-height: 15px;
  opacity: 1;
  overflow: hidden;
  padding: 20px 30px;
  position: relative;
  text-align: center;
  transition: 0.5s;
  width: fit-content;

  ${({ variant }) => getVariant(variant)};
`
