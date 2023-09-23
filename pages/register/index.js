import React from 'react'
import { NextSeo } from 'next-seo'
import seoData from '@/utils/seoData'

function index() {
    return (
        <>
            <NextSeo {...seoData['register']} />
            <div>Create Account Page</div>
        </>
    )
}

export default index