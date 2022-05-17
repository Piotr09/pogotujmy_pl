import type { FC } from 'react'
import { v4 as uuid } from 'uuid'

import { ShareButtonItem as ShareButtonItemComponent } from './ShareButtonItem'
import { shareButtonItemList } from './ShareButtonItem.const'

export const ShareButtonItem: FC = () => (
  <ShareButtonItemComponent key={uuid()} {...shareButtonItemList[1]} />
)

export default {
  title: 'Components/Atoms/Share Button Item',
}
