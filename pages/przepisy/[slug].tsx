import SeoHead from '@atoms/SeoHead'
import React, { ReactElement } from 'react'
import Head from 'next/head'
import Breadcrumbs from '@atoms/Breadcrumbs'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import { getCollection } from '@adapters/cockpit'
import { ArticleProps } from '@/types/article'
import { RecipeTemplate } from '@templates/RecipeTemplate/RecipeTemplate'
import { mapRelatedCard } from '@helpers/mappers/relatedCard'
import { mapRecipeHero } from '@helpers/mappers/recipeHero'
import { mapSeoHead } from '@helpers/mappers/seoHead'

interface SingleRecipeProps {
  recipeData: { entries: ArticleProps[] }
  newestRecipes: { entries: ArticleProps[] }
}

const singleRecipe = ({
  recipeData,
  newestRecipes,
}: SingleRecipeProps): ReactElement => {
  const recipe = recipeData.entries[0]

  const schemaIngredients = recipe.description
    .filter((item) => item.component === 'recipeSection')
    .map((test) =>
      test.settings.ingredients.map((secondTest) => secondTest.value),
    )

  const schemaPrep = recipe.description
    .filter((item) => item.component === 'recipeSection')
    .map((test) =>
      test.settings.prepInstructions.map(
        (prep) => `{"@type": "HowToStep", "name":"${prep.value}"},`,
      ),
    )

  const recipeHero = recipe.recipeHero[0].settings
  const recipeSchema = recipe.schema[0].settings
  const metaData = recipe.metaData[0].settings

  const articleStructuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Recipe',
    name: recipeHero.title,
    image: [
      `https://gc.pogotujmy.pl/cockpit/storage/uploads${recipeHero.image.path}`,
    ],
    author: {
      '@type': 'Organization',
      name: 'Pogotujmy.pl',
    },
    description: recipeHero.excerpt,
    prepTime: `PT${recipeSchema.schemaPrepTime}M`,
    cookTime: `PT${recipeSchema.schemaCookTime}M`,
    totalTime: `PT${recipeSchema.schemaTotalTime}M`,
    keywords: `${recipeSchema.schemaKeywords}`,
    recipeYield: `${recipeSchema.schemaRecipeYield}`,
    recipeIngredient: schemaIngredients,
    recipeInstructions: schemaPrep,
  }

  const relatedReciepies = newestRecipes.entries.slice(0, 4)

  const mappedRelatedCards = relatedReciepies.map((item) =>
    mapRelatedCard(item),
  )

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData).replace(/\\'`/g, '')}
        </script>
      </Head>
      <Breadcrumbs
        lastItemValue={recipeHero.title}
        pages={[
          { label: 'strona główna', url: '/' },
          { label: 'przepisy', url: '/przepisy' },
        ]}
      />
      <SeoHead {...mapSeoHead(metaData)} />
      <RecipeTemplate
        recipeHero={mapRecipeHero(recipe.recipeHero[0])}
        recipeTags={recipe.tags}
        recipeId={recipe._id}
        recipeDescription={recipe.description}
        newestArticles={mappedRelatedCards}
      />
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const recipeResponse = await getCollection('Recipe')
  const recipeData = await recipeResponse.json()

  const paths = recipeData.entries.map((recipe) => {
    return {
      params: {
        slug: recipe.slug,
      },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps(context: {
  params: { slug: string }
}): Promise<GetStaticPropsResult<SingleRecipeProps>> {
  const {
    params: { slug },
  } = context

  const recipesResponse = await getCollection('Recipe', slug)
  const recipeData = await recipesResponse.json()

  const newestRecipesResponse = await getCollection('Recipe')
  const newestRecipes = await newestRecipesResponse.json()

  return {
    props: { recipeData, newestRecipes },
  }
}

export default singleRecipe
