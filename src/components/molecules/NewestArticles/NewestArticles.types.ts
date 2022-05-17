import { PicutreTypes } from '@atoms/Picture/Picture.types'
import { LinkButtonProps } from '@atoms/LinkButton/LinkButton.types'

export interface NewestArticlesTypes {
  image: PicutreTypes
  title: string
  description: string
  url: string
  button?: LinkButtonProps
}
