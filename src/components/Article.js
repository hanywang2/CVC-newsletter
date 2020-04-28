import React from 'react';
import { Container } from 'react-bootstrap';

import './Article.css';

export default function Article(props) {
    return (
        <Container className={`article ${(props.table) ? 'extra-padding' : ''}`}>
            <h1 className="article-title">{ props.title.toUpperCase() }</h1>
            {/* Render image if exists */}
            { props.img ? <img className="article-img" src={ props.img } alt="article-img"/> : '' }
            <div className="article-content">
                { props.children }
            </div>
        </Container>
    )
}
