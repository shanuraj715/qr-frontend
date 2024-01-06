import { Alert } from 'react-bootstrap'
import React from 'react'
import styles from './styles.module.scss'

const MyAlert = props => {

    const {
        variant = 'primary',
        className = ''
    } = props

    return <Alert variant={variant} className={`${styles.alert} ${className}`}>
        {props.children}
    </Alert>
}

export default MyAlert