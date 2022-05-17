import RelatedCard from '@molecules/RelatedCard'
import { StyledRelatedGrid, StyledRelatedHeading } from './RelatedGrid.styled'
import { RelatedGridTypes } from './RelatedGrid.types'
import React, { ReactElement } from 'react'

export const RelatedGrid = ({
  relatedGridTypes,
}: RelatedGridTypes): ReactElement => (
  <>
    <StyledRelatedHeading>Polecane przepisy:</StyledRelatedHeading>
    <StyledRelatedGrid>
      {relatedGridTypes.map((item, idx) => (
        <RelatedCard key={`${item.title}-${idx}`} {...item} />
      ))}
    </StyledRelatedGrid>
  </>
)
