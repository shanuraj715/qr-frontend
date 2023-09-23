import React from 'react'
import seoData from '@/utils/seoData'
import { NextSeo } from 'next-seo'

function Home() {
  return (
    <>
      <NextSeo {...seoData.homepage} />
      <div className="">
        Homepage
      </div>
    </>
  )
}

Home.layout = 'full-width'

export default Home