import React, { Component } from 'react';

import firebase from './firebase/index';
import Filter from 'bad-words';

import Header from './components/Header';
import Footer from './components/Footer';
import Special from './components/Special';
import Article from './components/Article';
import Button from './components/Button';

import { Row, Col, InputGroup, FormControl, Button as Click, Table } from 'react-bootstrap';

import './App.css';

import meme from './assets/meme.jpg';

import topic1 from './assets/topic1.jpg';
import startup1a from './assets/startup1a.png';
import startup1b from './assets/startup1b.png';
import startup1c from './assets/startup1c.png';

import topic2 from './assets/topic2.jpg';
import startup2a from './assets/startup2a.png';
import startup2b from './assets/startup2b.png';
import startup2c from './assets/startup2c.png';

import podcast from './assets/img/4-30/podcast.jpg';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: 'May 7, 2020',
      authors: 'Timothy Shi and Matthew Tan',
      response: '',
      // responses : [],
      displayResponses: false
    }
  }

  submit = () => {
    if (this.state.response.length > 0) {
      const { response } = this.state;
      const filter = new Filter();
      const filteredResponse = filter.clean(response);
      const time = new Date().getTime();
      firebase.db.collection('posts').doc(this.state.date).set({[time]: filteredResponse}, {merge: true})
        .then(() => {
          // this.state.responses.unshift(filteredResponse);
          this.setState({displayResponses: true});
        }).catch((err) => {
          console.log(err);
        })
    }
  }

  // Built for loading responses after submission
  // componentDidMount() {
  //   const responsesRef = firebase.db.collection('posts').doc(this.state.date);
  //   responsesRef.get()
  //     .then(doc => {
  //       const responsesData = doc.data();
  //       const responsesEntires = Object.entries(responsesData);
  //       responsesEntires.sort((a, b) => (a[0] === b[0]) ? 0 : (a[0] < b[0]) ? -1 : 1);
  //       responsesEntires.reverse();
  //       const responses = responsesEntires.map(([key, value]) => value)
  //       this.setState({responses});
  //     }).catch(err => {
  //       console.log(err);
  //     })
  // }
  
  render() {
    return (
      <div>
      <Header date={this.state.date} authors={this.state.authors}/>
      <Special center>
        <h1 className="header-title">MEME OF THE WEEK</h1>
        <img style={{height: '240px'}} src={meme} alt="Meme of the week"/>
      </Special>
      <Special>
        <h1 className="headline">QUESTION OF THE WEEK</h1>
        <h1 className="preview">For personal investments and finances, do you prefer to use fintech backed trading platforms (Robinhood, Acorns) or traditional brokerage applications (Fidelity, Schwab)?</h1>
        <InputGroup className="mb-3">
            <FormControl
              disabled={this.state.displayResponses}
              placeholder="Your response"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => this.setState({response: e.target.value})}
            />
            <InputGroup.Append>
            { (this.state.displayResponses) ? <Click variant="danger">Submitted</Click>
            : <Click variant="outline-danger" onClick={() => this.submit()}>Submit</Click> }
            </InputGroup.Append>
          </InputGroup>
      </Special>
      <Article title="Inside this issue" table center>
        <h1 className="titles"><a className="sectionLink" href="#FINTECH">FINTECH</a></h1>
        <h1 className="titles"><a className="sectionLink" href="#TELEHEALTH">TELEHEALTH</a></h1>
        <h1 className="titles"><a className="sectionLink" href="#PODCAST OTW">PODCAST OF THE WEEK</a></h1>
        <h1 className="titles"><a className="sectionLink" href="#TERM OF THE WEEK">TERM OF THE WEEK</a></h1>
      </Article>
      <Article id="p1" title="FINTECH" img={topic1}>
        <Row>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
              Four Clues to the Future of Financial Services Firms and Fintech
            </h1>
            <p className="preview">
              As I write this, I can’t help thinking about what my ‘new normal’ looks like. The less than perfect moments involve me turning around and yelling at the dog to stop barking at the rare person who goes past our front door...
            </p>
            <Button href="
            https://www.forbes.com/sites/martinboyd/2020/05/06/four-clues-to-the-future-of-financial-services-firms-and-fintech/#a850fab3222e
            " pos="center">Read More</Button>
          </Col>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
              Despite Current Environment, Fintech Startups Continue to Hire and Raise Funds
            </h1>
            <p className="preview">
            COVID-19 is pushing companies to accelerate their innovations in a matter of weeks rather than years, such as accepting mobile payments or giving their brick-and-mortar store an online presence...
            </p>
            <Button href="
            https://news.crunchbase.com/news/despite-current-environment-financial-services-hire-and-raise-funds/
            " pos="center">Read More</Button>
          </Col>
          <Col lg={4}>
            <h1 className="headline">
            How Fintech Can Save Us From Covid-19
            </h1>
            <p className="preview">
            Financial technology is not being employed to its best effect, while the coronavirus financial relief effort is struggling. Banks need to innovate and work with fintechs if they are to ensure that the most vulnerable do not get left behind...
            </p>
            <Button href="
            https://www.euromoney.com/article/b1lhggklb7jbkw/how-fintech-can-save-us-from-covid-19
            " pos="center">Read More</Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Startups We're Looking At</h1>
            </div>
            <Table hover className="mt-4" responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Startup</th>
                  <th>Founded</th>
                  <th>Last Round</th>
                  <th>Total Funded</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={startup1a} alt="Startup"/>
                  </td>
                  <td>
                    <a href="
                    https://www.nium.com/
                    " target="_blank" rel="noopener noreferrer">
                      Nium
                    </a>
                  </td>
                  <td>2014</td>
                  <td>Series C</td>
                  <td>$59M</td>
                </tr>
                <tr>
                <td>
                  <img src={startup1b} alt="Startup"/>
                </td>
                  <td>
                    <a href="
                    https://silamoney.com/
                    " target="_blank" rel="noopener noreferrer">
                      Sila
                    </a>
                  </td>
                  <td>2018</td>
                  <td>Seed</td>
                  <td>$7.7M</td>
                </tr>
                <tr>
                <td>
                  <img src={startup1c} alt="Startup"/>
                </td>
                  <td>
                    <a href="
                    https://www.neatcommerce.com/
                    " target="_blank" rel="noopener noreferrer">
                      Neat
                    </a>
                  </td>
                  <td>2015</td>
                  <td>Series A</td>
                  <td>$16M</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
      <Article title="TELEHEALTH" img={topic2}>
        <Row>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
              COVID-19 Shocks the Digital Health Market, but the Jolt may be Positive News
            </h1>
            <p className="preview">
            Early predictions for 2020 showed the digital health market was predicted to decline. Yet, as tech companies across the globe deal with fallout from the COVID-19 pandemic, some areas of digital health seem to be benefiting from the demand for digitally assisted healthcare...
            </p>
            <Button href="
            https://siliconangle.com/2020/05/06/virtual-solutions-take-center-stage-as-covid-19-shakes-the-digital-health-market-thecube/
            " pos="center">Read More</Button>
          </Col>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
              The Make-or-break Opportunity for Telehealth Startups
            </h1>
            <p className="preview">
            In late March, Klara cofounders Simon Bolz and Simon Lorenz had a make-or-break talk with their engineering team. The healthcare communication platform had just received dozens of calls from healthcare facilities urgently asking for ways to treat patients remotely via videolink...
            </p>
            <Button href="
            https://sifted.eu/articles/telehealth-startups-coronavirus/
            " pos="center">Read More</Button>
          </Col>
          <Col lg={4}>
            <h1 className="headline">
              5 Reasons Why Telehealth Is Here to Stay (COVID-19 and Beyond)
            </h1>
            <p className="preview">
            Telehealth. It’s no longer just a nice-to-have, but instead a must-have for patients and healthcare professionals alike during these uncertain times the COVID-19 pandemic has brought about. While we all wish that it hadn’t taken a pandemic to propel telehealth forward, for better or for worse, it has. The spotlight is now on telehealth in a big way, and for good reason...
            </p>
            <Button href="
            https://www.forbes.com/sites/joeharpaz/2020/05/04/5-reasons-why-telehealth-here-to-stay-covid19/#5ca1dc453fb0
            " pos="center">Read More</Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Startups We're Looking At</h1>
            </div>
            <Table hover className="mt-4" responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Startup</th>
                  <th>Founded</th>
                  <th>Last Round</th>
                  <th>Total Funded</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={startup2a} alt="Startup"/>
                  </td>
                  <td>
                    <a href="
                    https://www.medici.md/
                    " target="_blank" rel="noopener noreferrer">
                      Medici
                    </a>
                  </td>
                  <td>2016</td>
                  <td>Series B</td>
                  <td>$70.6M</td>
                </tr>
                <tr>
                <td>
                  <img src={startup2b} alt="Startup"/>
                </td>
                  <td>
                    <a href="
                    http://www.98point6.com/
                    " target="_blank" rel="noopener noreferrer">
                      98point6
                    </a>
                  </td>
                  <td>2015</td>
                  <td>Venture Round</td>
                  <td>$129.3M</td>
                </tr>
                <tr>
                <td>
                  <img src={startup2c} alt="Startup"/>
                </td>
                  <td>
                    <a href="
                    http://www.tytocare.com/
                    " target="_blank" rel="noopener noreferrer">
                      TytoCare
                    </a>
                  </td>
                  <td>2012</td>
                  <td>Venture Round</td>
                  <td>$106.7M</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
      <Article title="PODCAST OTW" img={podcast}>
        <h1 className="headline">
          An Update on Consumer & Enterprise Venture Capital - Invest Like the Best
        </h1>
        <p className="preview">
          Patrick O'shaughnessy’s podcast includes interviews of the established investors and their outlook on investing. This episode features Bill Gurley and Chetan Puttagunta, partners at Benchmark Capital, and discusses early stage investing during the hectic period of COVID-19. They examine previous downturns, the early stage environment, and enterprise businesses
        </p>
        <Button href="https://podcasts.google.com/?feed=aHR0cHM6Ly9pbnZlc3RsaWtldGhlYmVzdC5saWJzeW4uY29tL3Jzcw&episode=NGVkNGQwODktNDI5OC00OGFmLTljN2QtMDk0MjEyMzAwZjY2&hl=en&ved=2ahUKEwjvyN64moXpAhWegXIEHYhaDNwQjrkEegQIChAG&ep=6" pos="center">Listen Here</Button>
      </Article>
      <Article title='TERM OF THE WEEK'>
      <h1 className="headline text-center">
        What is "Venture Capital"?
      </h1>
      <p className="preview text-center">
        Venture capital is a form of private equity and a type of financing that investors provide to startup companies and small businesses that are believed to have long-term growth potential. Venture capital generally comes from well-off investors, investment banks and any other financial institutions. However, it does not always take a monetary form; it can also be provided in the form of technical or managerial expertise. Venture capital is typically allocated to small companies with exceptional growth potential, or to companies that have grown quickly and appear poised to continue to expand.
      </p>
      </Article>
      <Footer />
    </div>
    );
  }
}

export default App;