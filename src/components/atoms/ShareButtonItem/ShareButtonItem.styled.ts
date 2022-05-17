import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { Pinterest } from '@styled-icons/entypo-social/Pinterest'
import { Facebook } from '@styled-icons/remix-fill/Facebook'
import styled, { css } from 'styled-components'
import { ShareButtonTypes } from '@atoms/ShareButtonItem/ShareButtonItem.types'

export const StyledShareBtn = styled.button`
  align-items: center;
  background-color: unset;
  border: unset;
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: 10px 8.5px;
  font-size: 12px;

  span {
    display: none;

    @media ${({ theme }) => theme.media.desktop} {
      display: block;
    }
  }

  :hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.breakpoints.large} {
    margin: 0 12px;
  }
`

export const StyledShareButton = css<Partial<ShareButtonTypes>>`
  background-color: ${({ theme }) => theme.palette.footerGoldBackground};
  border-radius: 50%;
  color: ${({ theme }) => theme.palette.white};
  height: 40px;
  margin: 20px 0 0;
  padding: 10px;
  width: 40px;

  @media ${({ theme }) => theme.media.desktop} {
    margin: 30px 0 10px;
  }
`

export const FacebookIcon = styled(Facebook)`
  ${StyledShareButton};
  background-color: #3b5998;
`

export const TwitterIcon = styled(Twitter)`
  ${StyledShareButton};
  background-color: #00acee;
`

export const PinterestIcon = styled(Pinterest)`
  ${StyledShareButton};
  background-color: #c8232c;
`
