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

export interface OgImage {
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

export interface MetaDataProps {
  id: string
  class: string
  style: string
  seoTitle: string
  seoDescription: string
  ogTitle: string
  ogDescription: string
  ogImage: OgImage
}

export interface MetaData {
  component: string
  settings: MetaDataProps
}

export interface Image2 {
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

export interface Settings2 {
  id: string
  class: string
  style: string
  difficultyLevel: string
  servingsNumber: string
  prepTime: string
  title: string
  excerpt: string
  image: Image2
  title_slug: string
}

export interface RecipeHero {
  component: string
  settings: Settings2
  children: any[]
}

export interface Ingredient {
  value: string
}

export interface PrepInstruction {
  value: string
}

export interface Settings3 {
  id: string
  class: string
  style: string
  text: string
  ingredients: Ingredient[]
  prepInstructions: PrepInstruction[]
  content?: any
}

export interface Description {
  component: string
  settings: Settings3
}

export interface Settings4 {
  id: string
  class: string
  style: string
  schemaPrepTime: string
  schemaCookTime: string
  schemaTotalTime: string
  schemaRecipeYield: string
  schemaKeywords: string
}

export interface Schema {
  component: string
  settings: Settings4
  children: any[]
}

export interface CuisinesCategory {
  _id: string
  link: string
  display: string
}

export interface DishesCategory {
  _id: string
  link: string
  display: string
}

export interface IngredientsCategory {
  _id: string
  link: string
  display: string
}

export interface ArticleProps {
  title: string
  slug: string
  image: Image
  excerpt: string
  metaData: MetaData[]
  recipeHero: RecipeHero[]
  description: Description[]
  schema: Schema[]
  cuisines_category: CuisinesCategory[]
  occasion_category?: any
  dishes_category: DishesCategory[]
  ingredients_category: IngredientsCategory[]
  desserts_category?: any
  tags: string[]
  rating?: any
  title_slug: string
  _mby: string
  _by: string
  _modified: number
  _created: number
  _id: string
}
