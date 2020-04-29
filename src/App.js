import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Special from './components/Special';
import Article from './components/Article';
import Button from './components/Button';

import { Row, Col, InputGroup, FormControl, Button as Click, ListGroup } from 'react-bootstrap';

import './App.css';

import construction from './assets/img/4-30/construction.jpg';
import insurance from './assets/img/4-30/insurance.jpg';
import podcast from './assets/img/4-30/podcast.jpg';


function App() {
  return (
    <div>
      <Header date="April 30, 2020"/>
      <Special>
        <h1 className="preview">Question of the week</h1>
        <h1 className="headline">Would you prefer to use a traditional agent or mobile technology for your insurance coverage?</h1>
        {/* <InputGroup className="mb-3">
          <FormControl
            placeholder="Your response"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Click variant="outline-danger">Submit</Click>
          </InputGroup.Append>
        </InputGroup> */}
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Special>
      <Article title="Inside this issue" table center>
        <h1 className="titles">CONSTRUCTION</h1>
        <h1 className="titles">INSURANCE</h1>
        <h1 className="titles">PODCAST OF THE WEEK</h1>
        <h1 className="titles">TERM OF THE WEEK</h1>
      </Article>
      <Article title="Construction" img={construction}>
        <Row>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
              Social Distancing Tech Hits Construction Sites and Factory Floors
            </h1>
            <p className="preview">
              Construction workers across the United States may soon be required to wear a device on their hard hats that emits an alarm if they come within six feet of another employee at a job site. As they get closer, the alarm gets louder. The tool, called Proximity Trace, doesn’t just function as a loud reminder for workers to practice the social distancing guidelines from the US Centers for Disease Control and Prevention...
            </p>
            <Button href="https://qz.com/1845581/social-distancing-tech-can-ensure-workers-stay-six-feet-apart/" pos="center">Read More</Button>
          </Col>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
              Robots, AI, and the road to a fully autonomous construction industry
            </h1>
            <p className="preview">
              Built Robotics executives are fond of saying that their autonomous system for construction equipment, like dozers and excavators, might be further along than many autonomous vehicles. In fact, CEO Noah Ready-Campbell insists you’ll see autonomous vehicles in controlled industrial environments — like construction sites — before you see level 5 driverless cars on public roads...
            </p>
            <Button href="https://venturebeat.com/2020/04/23/robots-ai-and-the-road-to-a-fully-autonomous-construction-industry/" pos="center">Read More</Button>
          </Col>
          <Col lg={4}>
            <h1 className="headline">
              Four Ways the Construction Industry Can Leverage Technology During COVID-19
            </h1>
            <p className="preview">
              To survive and thrive beyond COVID-19, contractors must find better ways today to collect and share field data and deploy agile cloud-based resource management solutions that allow contractors to rapidly respond to any project issues with real-time data. The sudden onset of COVID-19 hit the world like a ton of bricks, bringing industry after industry to a screeching halt...
            </p>
            <Button href="https://venturebeat.com/2020/04/23/robots-ai-and-the-road-to-a-fully-autonomous-construction-industry/" pos="center">Read More</Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Startups We're Looking At</h1>
            </div>
            <div className="startup">
              <a href="https://www.manufacton.com" target="_blank" rel="noopener noreferrer">
                Manufacton
              </a>
              <p>
                Manufacton empowers construction firms to set up fabrication facilities by shipping volumetric modular pieces of the building to the job-site. Complementing this innovative approach to construction, Manufacton enables its clients to plan, track, and optimize their prefabricated assemblies, kits and materials. 
              </p>
            </div>
            <div className="startup">
              <a href="https://www.buildstream.co.uk/" target="_blank" rel="noopener noreferrer">
                BuildStream
              </a>
              <p>
                BuildStream is a next-generation marketplace for construction equipment rentals and labor services. The app enables users to quickly source vetted and approved equipment and labor services from our pool of approved suppliers, with free analytics tools to monitor spend and performance in real-time. 
              </p>
            </div>
            <div className="startup">
              <a href="https://www.builtrobotics.com/" target="_blank" rel="noopener noreferrer">
                Build Robotics
              </a>
              <p>
                Built Robotics’ mission is to build the robots that build the world. By upgrading off-the-shelf heavy equipment with AI guidance systems, Built’s technology enables machines to operate fully autonomously. Built’s robots are deployed today across the $1 trillion earthmoving industry, and they’re being used to build critical infrastructures such as wind farms, gas pipelines, and new housing developments. 
              </p>
            </div>
          </Col>
        </Row>
      </Article>
      <Article title="Insurance" img={insurance}>
        <Row>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
              Insurtech Could Thrive in a COVID-19 Insurance Market
            </h1>
            <p className="preview">
              The word ‘unprecedented’ has been overused, but it’s also the only real way to describe the impact of the COVID-19 pandemic on our daily lives, work and the world of business...
            </p>
            <Button href="https://techhq.com/2020/04/insurtech-could-thrive-in-a-covid-19-insurance-market/" pos="center">Read More</Button>
          </Col>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
              Insurtech Advances Minimize Coronavirus Upheaval
            </h1>
            <p className="preview">
              The coronavirus, a once-in-a-lifetime black swan event for global societies and business, is presenting never before experienced challenges to the economy — including the insurance sector...
            </p>
            <Button href="https://www.propertycasualty360.com/2020/04/24/insurtech-advances-minimize-coronavirus-upheaval/?slreturn=20200325231143" pos="center">Read More</Button>
          </Col>
          <Col lg={4}>
            <h1 className="headline">
              COVID-19 is Threatening the Ability of Insurtech to Combat Business Interruption 
            </h1>
            <p className="preview">
              Coronavirus crept through the world methodically. First came warnings of international cases. Soon social media feeds were filled with images of desolate Chinese cities and videos of Italians singing in unison from their balconies...
            </p>
            <Button href="https://riskandinsurance.com/covid-19-is-threatening-the-ability-of-insurtech-to-combat-business-interruption/" pos="center">Read More</Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Startups We're Looking At</h1>
            </div>
            <div className="startup">
              <a href="https://www.iglooinsure.com/" target="_blank" rel="noopener noreferrer">
                Igloo
              </a>
              <p>
                Igloo is a Singapore-based insurtech startup that works with e-commerce and travel firms in Southeast Asia to provide their customers insurance products that cover accidents, travel, and electronics. In the last 45 days, the startup has seen an uptick in transactions and customer acquisitions as COVID-19 creates increased demand for insurance in the e-commerce industry. 
              </p>
            </div>
            <div className="startup">
              <a href="https://www.lemonade.com/" target="_blank" rel="noopener noreferrer">
                Lemonade
              </a>
              <p>
                Lemonade is an application that provides coverage and insurance policies to users via an A.I. chatbox rather than a traditional broker. Lemonade takes its profit directly out of each monthly payment to lemonade, and holds the rest for claims. Unlike traditional insurance companies, the remaining unpaid claims go to a charity of the users choice.
              </p>
            </div>
            <div className="startup">
              <a href="https://www.trov.com/" target="_blank" rel="noopener noreferrer">
                Trōv
              </a>
              <p>
                Trōv is a provider of on-demand insurance for individual items without the need for a traditional insurance agent. The service is conducted through an application that handles claims via a chatbox and users track their possessions via a photograph or receipt that is backed up to the cloud. Trōv has now expanded to provide business, auto, and renters insurance.
              </p>
            </div>
          </Col>
        </Row>
      </Article>
      <Article title="Podcast OTW" img={podcast}>
        <h1 className="headline">
          An Update on Consumer & Enterprise Venture Capital - Invest Like the Best
        </h1>
        <p className="preview">
          Patrick O'shaughnessy’s podcast includes interviews of the established investors and their outlook on investing. This episode features Bill Gurley and Chetan Puttagunta, partners at Benchmark Capital, and discusses early stage investing during the hectic period of COVID-19. They examine previous downturns, the early stage environment, and enterprise businesses
        </p>
        <Button href="https://podcasts.google.com/?feed=aHR0cHM6Ly9pbnZlc3RsaWtldGhlYmVzdC5saWJzeW4uY29tL3Jzcw&episode=NGVkNGQwODktNDI5OC00OGFmLTljN2QtMDk0MjEyMzAwZjY2&hl=en&ved=2ahUKEwjvyN64moXpAhWegXIEHYhaDNwQjrkEegQIChAG&ep=6" pos="left">Listen Here</Button>
      </Article>
      <Article title='Term of the Week'>
      <h1 className="headline">
        What is "Venture Capital"?
      </h1>
      <p className="preview">
        Venture capital is a form of private equity and a type of financing that investors provide to startup companies and small businesses that are believed to have long-term growth potential. Venture capital generally comes from well-off investors, investment banks and any other financial institutions. However, it does not always take a monetary form; it can also be provided in the form of technical or managerial expertise. Venture capital is typically allocated to small companies with exceptional growth potential, or to companies that have grown quickly and appear poised to continue to expand.
      </p>
      </Article>
      <Footer />
    </div>
  );
}

export default App;