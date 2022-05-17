import Link from '@atoms/Link'
import React from 'react'

import { SecondaryNavigationListTypes } from './SecondaryNavigationList.types'

export const SecondaryNavigationList = ({
  links,
}: SecondaryNavigationListTypes): React.ReactElement => (
  <React.Fragment>
    {links.map(({ label, url }) => (
      <li key={url}>
        <Link label={label} url={url} />
      </li>
    ))}
  </React.Fragment>
)
