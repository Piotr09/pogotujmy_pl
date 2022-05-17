import React, { ReactElement } from 'react'

import {
  StyledRelatedCardDescription,
  StyledRelatedCardHeading,
  StyledRelatedCardWrapper,
} from './RelatedCard.styled'
import Picture from '@atoms/Picture'
import { RelatedCardTypes } from './RelatedCard.types'

const articleSlug = 'przepisy/'

export const RelatedCard = ({
  image,
  title,
  description,
  slug,
}: RelatedCardTypes): ReactElement => (
  <StyledRelatedCardWrapper
    onClick={() => (window.location.href = `/${articleSlug}${slug}`)}
  >
    <Picture {...image}></Picture>
    <a href={`/${articleSlug}${slug}`}>
      <StyledRelatedCardHeading>{title}</StyledRelatedCardHeading>
      {description && (
        <StyledRelatedCardDescription>
          {description}
        </StyledRelatedCardDescription>
      )}
    </a>
  </StyledRelatedCardWrapper>
)
