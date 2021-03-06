/**
 * This file is auto generated by cockpit-type
 */

export type myprefixCPAssetBaseType = {
  path: string
  title: string
  mime: string
  description?: string
  size: number
  image: boolean
  video: boolean
  audio: boolean
  archive: boolean
  document: boolean
  code: boolean
  created: number
  modified: number
  width: number
  height: number
  colors: string[]
  folder: string
}

export type myprefixCPImageBaseType = {
  path: string
}

export type myprefixCPGalleryBaseType = myprefixCPImageBaseType & {
  meta: {
    title: string
    asset: string
  }
}
