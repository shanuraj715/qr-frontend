import React from 'react'
import _img from '@/assets/app/404.svg'
import Link from 'next/link'
import styles from '@/styles/page404.module.scss'
import Head from 'next/head'

function Page404() {
  return (
    <>
    <Head>
      <title>Page 404 - Not Found</title>
      <meta name="robots" content="noindex,nofollow" />
      <meta name="googlebot" content="noindex,nofollow" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="google" content="notranslate" />
      
    </Head>
    <div className={`d-flex justify-content-center align-items-center text-center ${styles.forOFourContainer}`}>
        <div className={''}>
            <p className={`${styles.mainText} d-flex flex-row justify-content-center align-items-center`}>
                <span className={styles.letterOne}>4</span>
                <span className={styles.letterTwo}>0</span>
                <span className={styles.letterThree}>4</span>
            </p>
            <p className={`${styles.errorText} my-4`}>
                Oops! page not found
            </p>
            <Link className={styles.homeBtn} href="/">Homepage</Link>
        </div>
    </div>
    </>
  )
}

export default Page404