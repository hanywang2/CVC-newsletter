import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './Header.css'
import logo from '../assets/logo-long.png';

export default function Header(props) {
    return (
        <div className="header">
            <div className="header-content">
                <Row>
                    <Col>
                        <div>                            
                            <h2 className="subtitle">NEWSLETTER</h2>
                        </div>
                        <div>
                            <h2 className="subtitle">{ props.date.toUpperCase() }</h2>
                        </div>
                        <div className="d-flex">
                            <h1 className="title">
                                <strong>CORNELL VENTURE CAPITAL</strong>
                            </h1>
                            <img className="logo" src={logo} alt="CVC"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
