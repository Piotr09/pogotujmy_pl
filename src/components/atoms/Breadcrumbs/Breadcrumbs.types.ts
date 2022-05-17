export interface BreadcrumbProps {
  label: string
  url: string
}

export interface BreadcrumbsProps {
  pages: BreadcrumbProps[]
  lastItemValue?: string
  lastItemUrl?: string
}
