import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './style.module.scss'

const MySpinner = props => {

    const {
        variant = 'light'
    } = props

    return <div className={styles.backdrop}>
        <Spinner animation="border" variant={variant} />
    </div>

}

export default MySpinner