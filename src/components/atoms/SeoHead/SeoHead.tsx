import Head from 'next/head'
import React, { ReactElement } from 'react'

import { SeoHeadTypes } from './SeoHead.types'

export const SeoHead = ({
  seoTitle,
  seoDescription,
  ogImage,
  ogTitle,
  ogDescription,
}: SeoHeadTypes): ReactElement => (
  <Head>
    <title>{seoTitle} | Pogotujmy.pl</title>
    <meta name="description" content={seoDescription} />
    <meta
      name="robots"
      content={
        process.env.ENVIRONMENT !== 'production'
          ? 'noindex, nofollow'
          : 'index, follow'
      }
    />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    {ogTitle && <meta property="og:title" content={ogTitle} />}
    {ogDescription && (
      <meta property="og:description" content={ogDescription} />
    )}
    {ogImage && <meta property="og:image" content={ogImage} />}
  </Head>
)
