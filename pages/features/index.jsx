import React from 'react'
import seoData from '@/utils/seoData'
import { NextSeo } from 'next-seo'

function Index() {
  return (
    <>
    <NextSeo {...seoData.features} />
    Features page
    </>
  )
}

export default Index