import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import { carouselData } from './data'

const generateTitle = (title) => {
    return <p className={styles.title} dangerouslySetInnerHTML={{__html: title}} />
}

function Carousel() {
  return (
    <div className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner">
            {carouselData.map((item, i) => {
                return <div className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval="2000">
                <div className={`${styles.dataContainer}`}>
                    <div className={`${styles.center} d-flex justify-content-center align-items-center `}>
                        <div>
                            {generateTitle(item.title)}
                            <p className={styles.description}>{item.description}</p>
                        </div>
                        <div className={styles.carouselImage}>
                            <Image src={item.image} width={450} height={450} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            })}
        </div>
    </div>
  )
}

export default Carousel