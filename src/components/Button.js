import React from 'react';

import './Button.css';

export default function Button(props) {
    return (
        <div className={`my-4 text-${props.pos}`}>
            <a className="clickable" href={props.href} style={{ backgroundColor: props.color ? props.color : 'black' }} 
            target="_blank" rel="noopener noreferrer">{props.children}</a>
        </div>
    )
}
