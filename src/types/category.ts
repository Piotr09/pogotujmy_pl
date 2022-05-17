export interface Image {
  path: string
  title: string
  mime: string
  description: string
  tags: any[]
  size: number
  image: boolean
  video: boolean
  audio: boolean
  archive: boolean
  document: boolean
  code: boolean
  colors: string[]
  width: number
  height: number
  created: number
  modified: number
  _by: string
  folder: string
  _id: string
}

export interface ParentSlug {
  _id: string
  link: string
  display: string
}

export interface SubCategory {
  _id: string
  link: string
  display: string
}

export interface CategoryProps {
  title: string
  slug: string
  title_slug: string
  parentSlug: ParentSlug
  subCategories: SubCategory[]
  _mby: string
  _by: string
  _modified: number
  _created: number
  _id: string
  image: Image
}
