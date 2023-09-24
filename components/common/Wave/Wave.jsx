import React from 'react'
import styles from './styles.module.scss'
import MySvg from './Svg'

function Wave({children}) {

  return <>
  <div className={styles.svgContainer}>
    <div className="pt-4">
        {children}
    </div>
    <MySvg />
  </div>
  </>
}

export default Wave