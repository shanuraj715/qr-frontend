import React from 'react'
import seoData from '@/utils/seoData'
import { NextSeo } from 'next-seo'
import Wave from '@/components/common/Wave/Wave'

function Home() {
  return (
    <>
      <NextSeo {...seoData.homepage} />
      <div className="">
        <Wave />
      </div>
    </>
  )
}

Home.layout = 'full-width'

export default Home