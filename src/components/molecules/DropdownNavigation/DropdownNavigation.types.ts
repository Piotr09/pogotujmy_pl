import { Dispatch, RefObject, SetStateAction } from 'react'

type Dispatcher<value> = Dispatch<SetStateAction<value>>

interface LinksTypes {
  title: string
  label: string
  url: string
  openInNewTab?: boolean
}

export interface DropdownNavigationTypes {
  title: string
  links: LinksTypes[]
  ariaLabel: string
}

export interface UseDropdownNavigationTypes {
  isOpened: boolean
  setIsOpened: Dispatcher<boolean>
  subNavRef: RefObject<HTMLUListElement>
}
