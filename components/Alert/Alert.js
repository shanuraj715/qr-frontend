import { Alert } from 'react-bootstrap'
import React from 'react'
import styles from './styles.module.scss'

const MyAlert = props => {

    const {
        variant = 'primary'
    } = props

    return <Alert variant={variant} className={styles.alert}>
        {props.children}
    </Alert>
}

export default MyAlert