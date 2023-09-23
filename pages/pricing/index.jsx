import React from 'react'
import styles from './style.module.scss'
import { NextSeo } from 'next-seo'
import seoData from '@/utils/seoData'

function index() {
  return (
    <>
      <NextSeo {...seoData.pricing} />
      <>Pricing Page</>
    </>
  )
}

export default index