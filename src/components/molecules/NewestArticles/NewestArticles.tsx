import React, { ReactElement } from 'react'

import {
  StyledRelatedCardDescription,
  StyledRelatedCardHeading,
  StyledRelatedCardWrapper,
  StyledTitleBackground,
} from './NewestArticles.styled'
import Picture from '@atoms/Picture'
import LinkButton from '@atoms/LinkButton'
import { NewestArticlesTypes } from './NewestArticles.types'
import { VARIANTS } from '@atoms/LinkButton/LinkButton.types'

export const NewestArticles = ({
  image,
  title,
  description,
  url,
}: NewestArticlesTypes): ReactElement => (
  <StyledRelatedCardWrapper>
    <a href={url}>
      <Picture {...image}></Picture>
      <StyledTitleBackground>
        <StyledRelatedCardHeading>{title}</StyledRelatedCardHeading>
        <StyledRelatedCardDescription>
          {description}
        </StyledRelatedCardDescription>
      </StyledTitleBackground>
    </a>
    <LinkButton
      url={url}
      label={'Zobacz przepis!'}
      variant={VARIANTS.SECONDARY}
    ></LinkButton>
  </StyledRelatedCardWrapper>
)
