import RelatedCard from '@molecules/RelatedCard'
import React, { ReactElement, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import RecipeHero from '@organisms/RecipeHero'
import {
  SliderLeftArrow,
  SliderRightArrow,
  SlideWrapper,
} from './HomepageTemplate.styled'
import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft'
import {
  NewestRecipesContainer,
  RelatedArticlesContainer,
  RelatedArticlesHeader,
} from '@templates/HomepageTemplate/HomepageTemplate.styled'
import LinkButton from '@atoms/LinkButton'
import { Quote } from '../../molecules/Quote/Quote'
import { HomepageTemplateProps } from '@templates/HomepageTemplate/HomepageTemplate.types'

export const HomepageTemplate = ({
  slider,
  relatedArticles,
  newestArticles,
}: HomepageTemplateProps): ReactElement => {
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        speed={1300}
        autoplay={{
          delay: 4000,
        }}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
      >
        {slider.map((slideItem, idx) => (
          <SwiperSlide key={slideItem.title}>
            <SlideWrapper>
              <RecipeHero
                key={`${slideItem.title}-${idx}`}
                {...slideItem}
                isHomepage={true}
              />
            </SlideWrapper>
          </SwiperSlide>
        ))}
        <SliderLeftArrow ref={prevRef} className="swiper-prev">
          <ArrowLeft size={24} />
        </SliderLeftArrow>
        <SliderRightArrow ref={nextRef} className="swiper-next">
          <ArrowLeft size={24} />
        </SliderRightArrow>
      </Swiper>
      <React.Fragment>
        <RelatedArticlesHeader>Popularne przepisy 🔥</RelatedArticlesHeader>
        <RelatedArticlesContainer>
          {relatedArticles.map((relatedArticle) => (
            <RelatedCard key={relatedArticle.title} {...relatedArticle} />
          ))}
        </RelatedArticlesContainer>
      </React.Fragment>
      <RelatedArticlesHeader>Najnowsze przepisy: </RelatedArticlesHeader>
      <NewestRecipesContainer>
        {newestArticles.slice(0, 12).map((newestArticles) => (
          <RelatedCard
            key={newestArticles.title}
            title={newestArticles.title}
            image={newestArticles.image}
            slug={newestArticles.slug}
          />
        ))}
      </NewestRecipesContainer>
      <LinkButton
        label={'Zobacz wszystkie przepisy'}
        aria={'Przejdź do strony ze wszystkimi przepisami'}
        url={'/przepisy'}
        isCentered={true}
      />
      <Quote
        backgroundImage={
          'https://images.unsplash.com/photo-1618450684024-55f2d7b7740a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2734&q=80'
        }
        title={
          'Jedną z najpiękniejszych rzeczy w życiu jest sposób, w jaki musimy regularnie przerywać to, co robimy i poświęcać naszą uwagę jedzeniu.'
        }
      ></Quote>
    </>
  )
}
