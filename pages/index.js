import React from 'react'
import seoData from '@/utils/seoData'
import { NextSeo } from 'next-seo'
import Wave from '@/components/common/Wave/Wave'
import Carousel from '@/components/common/Carousel/Carousel'

function Home() {
  return (
    <>
      <NextSeo {...seoData.homepage} />
      <Wave>
        <Carousel />
      </Wave>
      <div className="mt-4">
        Homepage

      </div>
    </>
  )
}

Home.layout = 'full-width'

export default Home