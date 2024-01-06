import React from 'react';
import { Button } from 'react-bootstrap'

const MyButton = (props) => {

    const {
        variant = 'primary',
        onClick = () => {},
        className = '',
        disabled = false,
    } = props

    return <Button variant={variant} onClick={onClick} className={className} disabled={disabled}>{props.children}</Button>
}

export default MyButton