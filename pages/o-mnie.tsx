import { ReactElement } from 'react'
import { AboutAndContactTemplate } from '@templates/AboutAndContactTemplate/AboutAndContactTemplate'
import ReactHtmlParser from 'react-html-parser'
import SeoHead from '@atoms/SeoHead'
import Breadcrumbs from '@atoms/Breadcrumbs'
import { HOMEPAGE } from '@atoms/Breadcrumbs/Breadcrumbs.const'
import { getSingleton } from '@adapters/cockpit'

interface aboutProps {
  aboutData: {
    title: string
    excerpt: [
      {
        settings: {
          text: string
        }
      },
    ]
    image: {
      path: string
      altText: string
    }
    content: [
      {
        settings: {
          text: string
        }
      },
    ]
  }
}

interface AboutProps {
  props: {
    aboutData: string
  }
}

export const About = (props: aboutProps): ReactElement => {
  const { aboutData } = props

  return (
    <>
      <Breadcrumbs lastItemValue="O mnie" pages={[HOMEPAGE]} />
      <SeoHead
        seoTitle="Poznajmy się!"
        ogImage={aboutData.image.path}
        seoDescription={ReactHtmlParser(aboutData.excerpt[0].settings.text)}
        ogDescription={ReactHtmlParser(aboutData.excerpt[0].settings.text)}
        ogTitle="Poznajmy się!"
      />
      <AboutAndContactTemplate
        title={aboutData.title}
        excerpt={aboutData.excerpt[0].settings.text}
        description={aboutData.content[0].settings.text}
        picture={aboutData.image}
      />
    </>
  )
}

export async function getStaticProps(): Promise<AboutProps> {
  const aboutResponse = await getSingleton('About')
  const aboutData = await aboutResponse.json()

  return {
    props: {
      aboutData,
    },
  }
}

export default About
