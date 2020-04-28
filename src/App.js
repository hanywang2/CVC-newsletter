import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Special from './components/Special';
import Article from './components/Article';
import Button from './components/Button';

import { Row, Col, InputGroup, FormControl, Button as Click } from 'react-bootstrap';

import './App.css';

import pic1 from './assets/template/pic1.png';
import pic2 from './assets/template/pic2.png';


function App() {
  return (
    <div>
      <Header date="March 12, 2020"/>
      <Special>
        <h1 className="preview">Question of the week</h1>
        <h1 className="headline">How has COVID-19 affected your restaurant exprience?</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Your response"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Click variant="outline-danger">Submit</Click>
          </InputGroup.Append>
        </InputGroup>
      </Special>
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
            <Button href="https://www.cornellvc.com/" pos="center">Read More</Button>
          </Col>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
              Amid Coronavirus Concerns, Food Delivery Services Offer No-contact Drop-off
            </h1>
            <p className="preview">
              With more people being asked to work from home or self-quarantine as the number of confirmed coronavirus cases rise, the use of food delivery services may spike. Minimizing contact where possible is one way to potentially reduce the risk of spreading the virus among customers and delivery workers in all industries.
            </p>
            <Button href="https://www.cornellvc.com/" pos="center">Read More</Button>
          </Col>
          <Col lg={4}>
            <h1 className="headline">
              If the Coronavirus Spreads in America, Food Delivery Companies Could See a Surge in Demand — are they Ready?
            </h1>
            <p className="preview">
              More Americans are using the internet for their grocery shopping and meal plans, and that trend was going strong before coronavirus concerns, said David Portalatin, vice president, food industry advisor, for The NPD Group, a market research firm.
            </p>
            <Button href="https://www.cornellvc.com/" pos="center">Read More</Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Startups We're Looking At</h1>
            </div>
            <div className="startup">
              <a href="https://www.cornellvc.com/">Dahmakan</a>
              <p>
                Dahmakan is the first Malaysian startup to participate in Y Combinator’s startup accelerator program. It’s a full-stack food delivery startup using “cloud” kitchens and software from recipe development to last-mile delivery to reduce delivery costs.
              </p>
            </div>
            <div className="startup">
              <a href="https://www.cornellvc.com/">HungryPanda</a>
              <p>
              HungryPanda is a food delivery service that tailors its platform for Chinese-language users, including business owners. HungryPanda focuses on Chinese food and grocery deliveries with a goal to serve Chinese communities in cities around the world.
              </p>
            </div>
            <div className="startup">
              <a href="https://www.cornellvc.com/">Peach</a>
              <p>
              Peach differentiates itself by focusing on delivering multiple lunch orders to office buildings. Their delivery of group lunch orders to multiple customers in one office building is a fundamentally different economic model than the 1-to-1 nature of its competitors.
              </p>
            </div>
          </Col>
        </Row>
      </Article>
      <Article title="Podcast OTW" img={pic2}>
        <h1 className="headline">
          What’s the Hidden Business Behind Your Business? w/ Rent the Runway’s Jenn Hyman
        </h1>
        <p className="preview">
          Rent the Runway co-founder Jenn Hyman knows: Behind every successful business is another business backstage, one you might not expect. Rent the Runway is known for creating a glamorous "closet in the cloud,” but as Hyman explains, it achieved unicorn status by mastering a few less glamorous businesses — including the world’s largest dry-cleaning operation and a data insights practice that’s changing the fashion industry.
        </p>
        <Button href="https://www.cornellvc.com/" pos="left">Listen Here</Button>
      </Article>
      <Footer />
    </div>
  );
}

export default App;