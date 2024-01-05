import React from 'react';
import { Button } from 'react-bootstrap'

const MyButton = (props) => {

    const {
        variant = 'primary',
        onClick = () => {}
    } = props

    return <Button variant={variant} onClick={onClick}>{props.children}</Button>
}

export default MyButton