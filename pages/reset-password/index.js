import React from 'react'
import { NextSeo } from 'next-seo'
import seoData from '@/utils/seoData'

function index() {
    return (
        <>
            <NextSeo {...seoData['reset-password']} />
            <div>Reset Password Page</div>
        </>
    )
}

export default index