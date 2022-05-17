import { Container } from '@atoms/Container'
import type { ReactElement } from 'react'
import HyvorTalk from 'hyvor-talk-react'
import ReactHtmlParser from 'react-html-parser'

import Tag from '@atoms/Tag'
import RecipeHero from '@organisms/RecipeHero'
import { StyledArticle } from '@atoms/Container/Container.styled'
import { ShareButtons } from '../../molecules/ShareButtons/ShareButtons'
import { StyledTagsContainer } from '@atoms/Tag/Tag.styled'
import { NewestRecipesContainer } from '@templates/HomepageTemplate/HomepageTemplate.styled'
import RelatedCard from '@molecules/RelatedCard'
import React from 'react'
import { RecipeTemplateProps } from '@templates/RecipeTemplate/RecipeTemplate.types'
import RecipeSection from '@organisms/RecipeSection'
import { StyledTextContainer } from '@templates/RecipeTemplate/RecipeTemplate.styled'

export const RecipeTemplate = ({
  recipeHero,
  recipeId,
  newestArticles,
  recipeTags,
  recipeDescription,
}: RecipeTemplateProps): ReactElement => {
  return (
    <>
      <ShareButtons />
      <RecipeHero {...recipeHero} />
      <StyledArticle>
        {recipeDescription.map((item) => {
          switch (item.component) {
            case 'text':
              return (
                <StyledTextContainer>
                  {ReactHtmlParser(`${item.settings.text}`)}
                </StyledTextContainer>
              )
            case 'recipeSection':
              return (
                <RecipeSection
                  ingredients={item.settings.ingredients}
                  instructions={item.settings.prepInstructions}
                />
              )
            default:
              return null
          }
        })}
        {recipeTags && (
          <StyledTagsContainer>
            {recipeTags.map((item) => (
              <Tag
                key={item}
                tag={item}
                // link={`/przepisy/tag/${latinize(
                //   item
                //     .trim()
                //     .toLowerCase()
                //     .replace(/\s+/g, '-')
                //     .replace(/\-\-+/g, '-')
                //     .replace(/^-+/, '')
                //     .replace(/-+$/, '')
                //     .replace(/,/g, ''),
                // )}`}
              />
            ))}
          </StyledTagsContainer>
        )}
      </StyledArticle>
      <Container>
        <h2>🔥 Najnowsze przepisy: </h2>
        <NewestRecipesContainer>
          {newestArticles.map((item) => (
            <RelatedCard
              key={item.title}
              image={item.image}
              title={item.title}
              slug={item.slug}
            />
          ))}
        </NewestRecipesContainer>
        <HyvorTalk.Embed websiteId={5604} id={recipeId} />
      </Container>
    </>
  )
}
