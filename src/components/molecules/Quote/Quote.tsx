import React, { ReactElement } from 'react'

import { StyledQuoteWrapper, StyledQuoteHeading } from './Quote.styled'
import { QuoteTypes } from './Quote.types'

export const Quote = ({ backgroundImage, title }: QuoteTypes): ReactElement => (
  <StyledQuoteWrapper backgroundImage={backgroundImage}>
    <StyledQuoteHeading>{title}</StyledQuoteHeading>
  </StyledQuoteWrapper>
)
