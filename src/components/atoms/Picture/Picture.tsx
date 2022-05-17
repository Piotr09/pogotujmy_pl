import React, { ReactElement } from 'react'

import { StyledPictureWrapper } from './Picture.styled'
import { PicutreTypes } from './Picture.types'

export const Picture = ({
  path,
  width,
  altText,
  children,
}: PicutreTypes): ReactElement => (
  <StyledPictureWrapper>
    {children}
    <source
      srcSet={`https://gc.pogotujmy.pl/cockpit/storage/uploads/${path}?fm=webp`}
      type="image/webp"
    />
    <img
      src={`https://gc.pogotujmy.pl/cockpit/storage/uploads/${path}?fm=webp${
        width ? `&w=${width}` : ''
      }`}
      alt={altText}
      loading="lazy"
    />
  </StyledPictureWrapper>
)
