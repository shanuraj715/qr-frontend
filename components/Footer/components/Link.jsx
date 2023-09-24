import React from 'react'
import styles from '../style.module.scss'
import Link from 'next/link'
import { Link45deg, BoxArrowUpRight } from 'react-bootstrap-icons'

function FooterLink(props) {

    const {
        icon = <Link45deg />,
        text = "----",
        to = "#",
        external = false,
        classes = '',
        divider = false
    } = props

  return divider ? <hr className={`${styles.divider}`} /> :
    <li className={`d-flex gap-3 align-items-center `}>
        {icon}
        {external ? 
            <a className={`${styles.footerLink} ${classes}`} href={to} target='_blank'>{text}</a> :
            <Link href={to} className={`${styles.footerLink} ${classes}`}>{text}</Link>
        }
        {external && <BoxArrowUpRight className={styles.externalSmallIcon} />}
    </li>
}

export default FooterLink