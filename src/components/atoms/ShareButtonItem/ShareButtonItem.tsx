import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import React from 'react'

import { StyledShareBtn } from './ShareButtonItem.styled'
import type { ShareButtonTypes } from './ShareButtonItem.types'

export const ShareButtonItem = ({
  Icon,
  shareUrl,
  label,
}: ShareButtonTypes): ReactElement => {
  const { asPath } = useRouter()

  const urlAddress = `https://pogotujmy.pl/${asPath}`

  return (
    <StyledShareBtn
      aria-label={`Udostępnij na ${label}`}
      onClick={() => window.open(`${shareUrl}${urlAddress}`)}
    >
      <Icon />
      <span>{label}</span>
    </StyledShareBtn>
  )
}
