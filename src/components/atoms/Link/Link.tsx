import { LinkTypes } from '@atoms/Link/Link.types'
import React from 'react'

import { StyledLink } from './Link.styled'
export const Link = ({
  ariaLabel,
  label,
  openInNewTab,
  url,
}: LinkTypes): React.ReactElement => (
  <StyledLink
    target={openInNewTab ? '_blank' : undefined}
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    href={url}
  >
    {label}
  </StyledLink>
)
