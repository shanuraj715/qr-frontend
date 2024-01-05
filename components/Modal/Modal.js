import React from 'react'
import Button from '@/components/Buttons/Button'
import Modal from'react-bootstrap/Modal'
import styles from './style.module.scss'

const MyModal = (props) => {

    const {
        open = false,
        size = 'lg',
        centered = true,
        closeButton = true,
        onClose = () => {},
        heading = '',
        buttons = [],
    } = props

    return <Modal
            show={open}
            size={size}
            centered={centered}
            onHide={onClose}
        >
        <Modal.Header closeButton={closeButton} className={styles.header}>
            <Modal.Title>
                {heading}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.children}
        </Modal.Body>
        <Modal.Footer>
            {buttons.map(item => <Button variant={item.variant} key={item.text} onClick={item.onClick}>{item.text}</Button>)}
        </Modal.Footer>
    </Modal>
}

export default MyModal