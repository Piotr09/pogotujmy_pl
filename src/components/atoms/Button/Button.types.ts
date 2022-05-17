import { ReactNode } from 'react'

export interface ButtonTypes {
  label: string
  aria?: string
  children?: ReactNode
  width?: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
