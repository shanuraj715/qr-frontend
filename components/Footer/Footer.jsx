import React from 'react'
import styles from './style.module.scss'

function Footer() {
  return (
    <div className={`${styles.footerContainer} mt-3`}>
        <div className={`container d-flex gap-4 flex-column flex-md-row py-3`}>
            <div className={`flex-grow-1 `}>
                Column 1
            </div>
            <div className={`flex-grow-1`}>
                Column 2
            </div>
        </div>
        <div className={`${styles.footerBottom} text-center p-1`}>
            <p className='p-0 m-0'>© {new Date().getFullYear()} - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer