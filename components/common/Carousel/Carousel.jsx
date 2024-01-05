import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import { carouselData } from './data'
import Carousel from 'react-bootstrap/Carousel';

const generateTitle = (title) => {
    return <p className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
}

function HomeCarousel() {
    return (
        <Carousel slide indicators={false} controls={false}>
            {carouselData.map((item, i) => {
                return <Carousel.Item key={i}>
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
                </Carousel.Item>
            })}
        </Carousel>
    )
}

export default HomeCarousel