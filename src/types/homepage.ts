export interface Field2 {
  type: string
  name: string
  label: string
}

export interface Options {
  fields: Field2[]
}

export interface Field {
  name: string
  label: string
  type: string
  options: Options
}

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

export interface Value {
  image: Image
  title: string
  description: string
  slug: string
}

export interface RelatedArticleProps {
  field: Field
  value: Value
}

export interface Slider {
  _id: string
  link: string
  display: string
}

export interface SingleHomepageProps {
  related_articles: RelatedArticleProps[]
  _mby: string
  _by: string
  slider: Slider[]
}
