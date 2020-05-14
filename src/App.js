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

import podcast from './assets/podcast.png';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: 'May 14, 2020',
      authors: 'Rushi Patel and Ishan Bhatt',
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
      <Article title="Meme of the week" center>
        {/* <h1 className="header-title">MEME OF THE WEEK</h1> */}
        <img style={{width: '460px', maxWidth: '100%'}} src={meme} alt="Meme of the week"/>
      </Article>
      <Article title="Question of the week" center>
        {/* <h1 className="headline">QUESTION OF THE WEEK</h1> */}
        <h1 className="preview">
        Where do you see the alternative proteins market in five years? Are there any specific products that you enjoy or dislike?
        </h1>
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
      </Article>
      <Article title="Inside this issue" table center>
        <h1 className="titles"><a className="sectionLink" href="#B2B MARKETPLACES">B2B MARKETPLACES</a></h1>
        <h1 className="titles"><a className="sectionLink" href="#ALTERNATIVE PROTEIN">ALTERNATIVE PROTEIN</a></h1>
        <h1 className="titles"><a className="sectionLink" href="#PODCAST OTW">PODCAST OF THE WEEK</a></h1>
        <h1 className="titles"><a className="sectionLink" href="#TERM OF THE WEEK">TERM OF THE WEEK</a></h1>
      </Article>
      <Article title="B2B MARKETPLACES" img={topic1}>
        <Row>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
            Why B2B Ecommerce Needs to Replicate the B2C Experience
            </h1>
            <p className="preview">
            The more ways in which you can infuse the B2C experience into your B2B buying cycle, the more customers you’ll close and the more likely you’ll retain them for the long haul...
            </p>
            <Button href="
            https://thepaypers.com/interviews/why-b2b-ecommerce-needs-to-replicate-the-b2c-experience-enterpay--1242159
            " pos="center">Read More</Button>
          </Col>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
            How COVID-19 Could Accelerate AI Adoption in the B2B Marketing Industry 
            </h1>
            <p className="preview">
            The COVID-19 pandemic is forcing marketers to think of new, innovative ways to generate revenue, pushing them to evaluate what technologies can best be utilized to enhance their strategies and fulfill their KPIs...
            </p>
            <Button href="
            https://www.aithority.com/guest-authors/how-covid-19-could-accelerate-ai-adoption-in-the-b2b-marketing-industry/
            " pos="center">Read More</Button>
          </Col>
          <Col lg={4}>
            <h1 className="headline">
            Technology Adoption Can Help SMEs Reach New Customers
            </h1>
            <p className="preview">
            As consumer behaviours change and new practices take precedence, the business ecosystem will also have to adjust to ensure that the companies that are around today will remain here tomorrow...
            </p>
            <Button href="
            https://www.thestar.com.my/business/smebiz/2020/05/09/technology-adoption-can-help-smes-reach-new-customers
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
                    https://www.materialbank.com/
                    " target="_blank" rel="noopener noreferrer">
                      Material Bank
                    </a>
                  </td>
                  <td>2018</td>
                  <td>Series B</td>
                  <td>$28M</td>
                </tr>
                <tr>
                <td>
                  <img src={startup1b} alt="Startup"/>
                </td>
                  <td>
                    <a href="
                    https://backlotcars.com
                    " target="_blank" rel="noopener noreferrer">
                      Backlot Cars
                    </a>
                  </td>
                  <td>2014</td>
                  <td>Series B</td>
                  <td>$37.8M</td>
                </tr>
                <tr>
                <td>
                  <img src={startup1c} alt="Startup"/>
                </td>
                  <td>
                    <a href="
                    https://equipmentshare.com
                    " target="_blank" rel="noopener noreferrer">
                      EquipmentShare
                    </a>
                  </td>
                  <td>2014</td>
                  <td>Series C</td>
                  <td>$68.9M</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
      <Article title="ALTERNATIVE PROTEIN" img={topic2}>
        <Row>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
            Plant-based Protein Industry Raises $741 Million in Investments During COVID-19
            </h1>
            <p className="preview">
            Plant-based protein companies in the United States have raised a total of $741 million in investment capital within the first quarter of 2020—nearly matching a record $747 million raised in all of 2019...
            </p>
            <Button href="
            https://vegnews.com/2020/5/plant-based-protein-industry-raises-741-million-in-investments-during-covid-19
            " pos="center">Read More</Button>
          </Col>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
            Alternative Animal Protein Investments on the Rise
            </h1>
            <p className="preview">
            “Investors have seen the market opportunity and are moving to capitalize on a global shift in the way meat is produced,” said Caroline Bushnell, associate director of corporate engagement for the GFI...
            </p>
            <Button href="
            https://www.bakingbusiness.com/articles/50979-alternative-animal-protein-investments-on-the-rise
            " pos="center">Read More</Button>
          </Col>
          <Col lg={4}>
            <h1 className="headline">
            Coronavirus Meat Shortages Have Plant-Based Food Makers’ Mouths Watering
            </h1>
            <p className="preview">
            Companies like Beyond Meat Inc., Impossible Foods Inc. and Tofurky Co. say they are ramping up production, discounting their plant-based meat alternatives to appeal to more consumers and expanding into more stores...
            </p>
            <Button href="
            https://www.wsj.com/articles/coronavirus-meat-shortages-have-plant-based-food-makers-mouths-watering-11589371206
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
                    https://www.memphismeats.com/
                    " target="_blank" rel="noopener noreferrer">
                      Memphis Meat
                    </a>
                  </td>
                  <td>
                    2015
                  </td>
                  <td>
                    Series B
                  </td>
                  <td>
                    $211M
                  </td>
                </tr>
                <tr>
                <td>
                  <img src={startup2b} alt="Startup"/>
                </td>
                  <td>
                    <a href="
                    https://solarfoods.fi/
                    " target="_blank" rel="noopener noreferrer">
                      Solar Foods
                    </a>
                  </td>
                  <td>
                    2017
                  </td>
                  <td>
                  Convertible Note
                  </td>
                  <td>
                  $5.98M
                  </td>
                </tr>
                <tr>
                <td>
                  <img src={startup2c} alt="Startup"/>
                </td>
                  <td>
                    <a href="
                    https://oceanhuggerfoods.com/
                    " target="_blank" rel="noopener noreferrer">
                      Ocean Hugger Food
                    </a>
                  </td>
                  <td>
                    2015
                  </td>
                  <td>
                    Debt
                  </td>
                  <td>
                    $3.3M
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
      <Article title="PODCAST OTW" img={podcast}>
        <h1 className="headline">
        Hustle Fund's Elizabeth Yin on unique portfolio strategy, post-COVID fundraising optimism
        </h1>
        <p className="preview">
        Jason Calacanis’s podcast includes an interview with Elizabeth Yin, Hustle Fund’s Co-Founder, about post-COVID investments as a “Micro-VC fund”. The podcast delves into Hustle Fund’s investment strategy, the role of prior angel investments, and its long-term outlooks. Hustle Fund is a unique VC firm that prioritizes a startup’s speed of execution and has raised over $60 million in two rounds.
        </p>
        <Button href="
        https://www.youtube.com/watch?v=rp49sTTDFx0
        " pos="center">Listen Here</Button>
      </Article>
      <Article title='TERM OF THE WEEK'>
      <h1 className="headline text-center">
        What is an "Angel Investor"?
      </h1>
      <p className="preview text-center">
      Angel investors are generally high net worth individuals who provide financing for startups in exchange for convertible debt or ownership equity in the company. Angel investments typically precede a Seed Round and usually occur when the startup is in its infancy or getting off the ground. Angel investors can be family / friends, wealthy individuals, part of a syndicated group, or originate from crowdfunding. In 2010, the website AngelList was founded to connect startups, angel investors, and job seekers. 
      </p>
      </Article>
      <Footer />
    </div>
    );
  }
}

export default App;