import React from 'react'
import { NextSeo } from 'next-seo'
import seoData from '@/utils/seoData'

function index() {
  return (
    <>
    <NextSeo {...seoData.demo} />
    <div>Demo Page</div>
    </>
  )
}

export default index