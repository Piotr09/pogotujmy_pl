import type { ReactElement } from 'react'

import {
  StyledArrow,
  StyledBreadcrumbLink,
  StyledBreadcrumbs,
  StyledWrapper,
} from './Breadcrumbs.styled'
import type { BreadcrumbsProps } from './Breadcrumbs.types'

export const Breadcrumbs = ({
  pages,
  lastItemValue,
}: BreadcrumbsProps): ReactElement => (
  <StyledWrapper>
    <StyledBreadcrumbs>
      {pages.map(({ label, url }) => (
        <li key={label}>
          <StyledBreadcrumbLink href={url} aria-label={label}>
            {label}
          </StyledBreadcrumbLink>
          <StyledArrow />
        </li>
      ))}
      {lastItemValue && (
        <li>
          <span>{lastItemValue}</span>
        </li>
      )}
    </StyledBreadcrumbs>
  </StyledWrapper>
)
