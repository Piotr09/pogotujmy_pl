import React, { FC } from 'react'

import { DropdownNavigation as DropdownNavigationComponent } from './DropdownNavigation'
import { dropdownNavigationMocks } from './DropdownNavigation.mocks'
export default { title: 'Design System/Molecules/Dropdown Navigation' }

export const DropdownNavigation: FC = () => (
  <DropdownNavigationComponent {...dropdownNavigationMocks} />
)
