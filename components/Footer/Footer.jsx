import React from 'react'
import styles from './style.module.scss'
import FooterLink from './components/Link'
import { footerData, footerData2 } from './data'
import SocialIcon from '../SocialIcons/SocialIcon'

function Footer() {
  return (
    <div className={`${styles.footerContainer} mt-3`}>
        <div className={`container d-flex gap-4 flex-column flex-md-row py-3`}>
            <div className={`${styles.footerColumn} flex-grow-1`}>
                <div className={styles.footerTitle}>
                    <span>
                        Important Links
                    </span>
                </div>
                <ul className={styles.footerUl}>
                    {footerData.map(item => <FooterLink {...item} />)}
                </ul>
            </div>
            <div className={`${styles.footerColumn} flex-grow-1`}>
                <div className={styles.footerTitle}>
                    <span>
                        &nbsp;
                    </span>
                </div>
                <p className={`px-4 py-2 ${styles.footerParagraph}`}>
                    Elevate your QR code experience with our premium service! Create customized QR codes with logos, colors, and padding effortlessly. Access our user-friendly dashboard or integrate our developer-friendly APIs. Based in New Delhi, India, we serve a global audience. Explore the possibilities today!
                </p>
                <ul className={styles.footerUl}>
                    {footerData2.map(item => <FooterLink {...item} />)}
                </ul>
                <div className={`${styles.socialIconsContainer} mt-1`}>
                    <SocialIcon iconFor="facebook" />
                    <SocialIcon iconFor="instagram" />
                    <SocialIcon iconFor="whatsapp" />
                    <SocialIcon iconFor="github" />
                </div>
            </div>
        </div>
        <div className={`${styles.footerBottom} text-center p-1`}>
            <p className='p-0 m-0'>© {new Date().getFullYear()} - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer