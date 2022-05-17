import { ReactElement } from 'react'

import { AboutTemplateProps } from './AboutAndContactTemplate.types'
import Picture from '@atoms/Picture'
import ReactHtmlParser from 'react-html-parser'
import {
  AboutWrapper,
  ImageWrapper,
  TextWrapper,
} from './AboutAndContactTemplate.styled'

export const AboutAndContactTemplate = ({
  title,
  description,
  excerpt,
  picture,
}: AboutTemplateProps): ReactElement => {
  return (
    <AboutWrapper>
      <ImageWrapper>
        <Picture {...picture} />
      </ImageWrapper>
      <TextWrapper>
        <h1>{title}</h1>
        {excerpt && ReactHtmlParser(`${excerpt}`)}
        {ReactHtmlParser(`${description}`)}
      </TextWrapper>
    </AboutWrapper>
  )
}
