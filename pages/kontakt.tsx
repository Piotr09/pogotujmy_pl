import { ReactElement } from 'react'
import { AboutAndContactTemplate } from '@templates/AboutAndContactTemplate/AboutAndContactTemplate'
import ReactHtmlParser from 'react-html-parser'
import SeoHead from '@atoms/SeoHead'
import { HOMEPAGE } from '@atoms/Breadcrumbs/Breadcrumbs.const'
import Breadcrumbs from '@atoms/Breadcrumbs'
import { getSingleton } from '@adapters/cockpit'

interface contactProps {
  contactData: {
    title: string
    content: [
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
  }
}

interface ContactProps {
  props: {
    contactData: string
  }
}

export const Contact = (props: contactProps): ReactElement => {
  const { contactData } = props

  return (
    <>
      <Breadcrumbs lastItemValue={contactData.title} pages={[HOMEPAGE]} />
      <SeoHead
        seoTitle={contactData.title}
        ogImage={contactData.image.path}
        seoDescription={ReactHtmlParser(contactData.content[0].settings.text)}
        ogDescription={ReactHtmlParser(contactData.content[0].settings.text)}
        ogTitle={contactData.title}
      />
      <AboutAndContactTemplate
        title={contactData.title}
        description={contactData.content[0].settings.text}
        picture={contactData.image}
      />
    </>
  )
}

export async function getStaticProps(): Promise<ContactProps> {
  const contactResponse = await getSingleton('Kontakt')
  const contactData = await contactResponse.json()

  return {
    props: {
      contactData,
    },
  }
}

export default Contact
