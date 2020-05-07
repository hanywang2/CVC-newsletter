import React from 'react';
import { Container } from 'react-bootstrap';

import './Special.css';

export default function Special(props) {
    return (
        <Container className={`${props.center ? 'text-center' : ''} special`}>
            { props.children }
        </Container>
    )
}
