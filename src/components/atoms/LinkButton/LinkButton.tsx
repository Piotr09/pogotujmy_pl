import React from 'react'

import { StyledLinkButton } from './LinkButton.styled'
import type { LinkButtonProps } from './LinkButton.types'
export const LinkButton = ({
  className,
  aria,
  label,
  openInNewTab,
  url,
  variant,
  onClick,
  isCentered,
}: LinkButtonProps): React.ReactElement => (
  <StyledLinkButton
    className={className}
    target={openInNewTab ? '_blank' : undefined}
    rel="noopener noreferrer"
    aria-label={aria}
    href={url}
    variant={variant}
    onClick={onClick}
    isCentered={isCentered}
  >
    <span>{label}</span>
  </StyledLinkButton>
)
