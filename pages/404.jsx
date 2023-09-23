import React from 'react'
import _img from '@/assets/app/404.svg'
import Link from 'next/link'
import styles from '@/styles/page404.module.scss'

function Page404() {
  return (
    <>
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