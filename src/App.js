import React from 'react';
import Header from './components/Header';
import Article from './components/Article';

import { Row, Col } from 'react-bootstrap';

import './App.css';

import pic1 from './assets/template/pic1.png'


function App() {
  return (
    <div>
      <Header date="March 12, 2020"/>
      <Article title="Inside this issue" table>
        <h1 className="titles">Legal Tech</h1>
        <h1 className="titles">Food Delivery</h1>
        <h1 className="titles">Ad Tech</h1>
        <h1 className="titles">Cannabis</h1>
        <h1 className="titles">Podcast Of The Week</h1>
        <h1 className="titles">Big Red Spotlight</h1>
      </Article>
      <Article title="Food Delivery" img={pic1}>
        <Row>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
              NYC Council Bills Aim to Slash Food Delivery Fees
            </h1>
            <p className="preview">
              Big Apple legislators are about to take a stab at regulating food delivery giants like Grubhub and UberEats. The New York City Council on Thursday will be presented with a package of six bills aimed at reducing the fees food delivery apps can charge city restaurants to 10 percent, down from as much as 30 percent.
            </p>
          </Col>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
              Amid Coronavirus Concerns, Food Delivery Services Offer No-contact Drop-off
            </h1>
            <p className="preview">
              With more people being asked to work from home or self-quarantine as the number of confirmed coronavirus cases rise, the use of food delivery services may spike. Minimizing contact where possible is one way to potentially reduce the risk of spreading the virus among customers and delivery workers in all industries.
            </p>
          </Col>
          <Col lg={4}>
            <h1 className="headline">
              If the Coronavirus Spreads in America, Food Delivery Companies Could See a Surge in Demand — are they Ready?
            </h1>
            <p className="preview">
              More Americans are using the internet for their grocery shopping and meal plans, and that trend was going strong before coronavirus concerns, said David Portalatin, vice president, food industry advisor, for The NPD Group, a market research firm.
            </p>
          </Col>
        </Row>
      </Article>
    </div>
  );
}

export default App;