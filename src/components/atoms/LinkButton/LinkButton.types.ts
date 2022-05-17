import type { ReactNode } from 'react'

export enum VARIANTS {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  HIDDEN = 'hidden',
}

export interface LinkButtonProps {
  className?: string
  variant?: VARIANTS
  label: string
  aria?: string
  url: string
  openInNewTab?: boolean
  children?: ReactNode
  width?: string
  isCentered?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
