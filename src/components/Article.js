import React from 'react';
import { Container } from 'react-bootstrap';

import './Article.css';

export default function Article(props) {
    return (
        <Container className={`article ${(props.table) ? 'extra-padding' : ''} ${(props.center ? 'text-center' : '')}`}>
            <h1 className={`${(props.center ? 'header-title' : 'article-title')}`}>{ props.title.toUpperCase() }</h1>
            {/* Render image if exists */}
            { props.img ? <img className="article-img" src={ props.img } alt="article-img"/> : '' }
            <div className="article-content">
                { props.children }
            </div>
        </Container>
    )
}
