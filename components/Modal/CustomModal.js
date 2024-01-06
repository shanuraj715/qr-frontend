import React from 'react'
import Modal from 'react-bootstrap/Modal'
import styles from './style.module.scss'

const CustomModal = props => {
    const {
        open = false,
        size = 'lg',
        centered = true,
        onClose = () => {},
    } = props

    return <>
    <Modal
    show={open}
    size={size}
    centered={centered}
    onHide={onClose}
    contentClassName={styles.customModalBox}
    >
        <Modal.Body>
            {props.children}
        </Modal.Body>

    </Modal>
    </>
}

export default CustomModal