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
      date: 'May 21, 2020',
      authors: 'Raghav Madhukar and Weldon Chan',
      topic: {
        topic1: 'EV & MOBILITY',
        topic2: 'VERTICAL FARMING'
      },
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
        <h1 className="preview">
        In 10-20 years, how large do you think the electric car market will be with respect to the regular car market?
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
        <h1 className="titles"><a className="sectionLink" href={`#${this.state.topic.topic1}`}>{this.state.topic.topic1}</a></h1>
        <h1 className="titles"><a className="sectionLink" href={`#${this.state.topic.topic2}`}>{this.state.topic.topic2}</a></h1>
        <h1 className="titles"><a className="sectionLink" href="#PODCAST OTW">PODCAST OF THE WEEK</a></h1>
        <h1 className="titles"><a className="sectionLink" href="#TERM OF THE WEEK">TERM OF THE WEEK</a></h1>
      </Article>
      <Article title={this.state.topic.topic1} img={topic1}>
        <Row>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
            Electric Car Sales Doubled in the Midst of the Coronacrisis
            </h1>
            <p className="preview">
            Registrations of battery electric vehicles (BEV) in Europe doubled during the first months of 2020, while overall passenger cars fell by 25.6% compared to the same period last year. Data by the European Alternative Fuels Observatory (EAFO) shows that electric cars still only accounted for 4% of total.
            </p>
            <Button href="
            https://www.forbes.com/sites/emanuelabarbiroglio/2020/05/20/electric-cars-sales-doubled-in-the-midst-of-coronacrisis/#6e4489394c42
            " pos="center">Read More</Button>
          </Col>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
            Past its Peak? Battered Oil Demand Faces Threat from Electric Vehicles
            </h1>
            <p className="preview">
            With fuel for road transport accounting for about half of all oil demand, the possibility of a faster-than-expected switch to EVs in the wake of the pandemic is one of the main reasons some forecasts for a peak have been brought forward.
            </p>
            <Button href="
            https://auto.hindustantimes.com/auto/news/past-its-peak-battered-oil-demand-faces-threat-from-electric-vehicles-41589944248215.html
            " pos="center">Read More</Button>
          </Col>
          <Col lg={4}>
            <h1 className="headline">
            Liberty Global Forms Alliance to Create UK Car Charging Network
            </h1>
            <p className="preview">
            Liberty Global has struck a deal with a fund backed by the UK government and the Church of England to build a network of electric vehicle charging points in residential streets using the underground duct network of its Virgin Media business.
            </p>
            <Button href="
            https://www.ft.com/content/388012da-11eb-43da-b810-2c1ff7aabb7a
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
                    https://www.wallbox.com/
                    " target="_blank" rel="noopener noreferrer">
                      Wallbox
                    </a>
                  </td>
                  <td>2015</td>
                  <td>Series A</td>
                  <td>$29.6M</td>
                </tr>
                <tr>
                <td>
                  <img src={startup1b} alt="Startup"/>
                </td>
                  <td>
                    <a href="
                    https://freewiretech.com/
                    " target="_blank" rel="noopener noreferrer">
                      FreeWire Technologies
                    </a>
                  </td>
                  <td>2014</td>
                  <td>Series B</td>
                  <td>$55.2M</td>
                </tr>
                <tr>
                <td>
                  <img src={startup1c} alt="Startup"/>
                </td>
                  <td>
                    <a href="
                    https://www.electriphi.ai/
                    " target="_blank" rel="noopener noreferrer">
                      Electriphi
                    </a>
                  </td>
                  <td>2018</td>
                  <td>Seed</td>
                  <td>$3.5M</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
      <Article title={this.state.topic.topic2} img={topic2}>
        <Row>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
            Vertical Farms Boom as COVID-19 Bolsters Appetite for Locally Grown Food
            </h1>
            <p className="preview">
            Vertical farms — indoor spaces where climate and light are tightly controlled — were already expanding in urban areas before the pandemic struck. Since they control everything from seed to store, vertical farms can provide skittish consumers with information about where their food comes from and how it’s produced...
            </p>
            <Button href="
            https://karmaimpact.com/vertical-farms-boom-as-covid-19-bolsters-appetite-for-locally-grown-food/
            " pos="center">Read More</Button>
          </Col>
          <Col lg={4} className="borderRight">
            <h1 className="headline">
            Vertical Farms Provide Sustainability in a Post-Covid World
            </h1>
            <p className="preview">
            Vertical Fields offers a revolutionary way to eat the freshest greens and herbs, by producing soil based indoor vertical farms grown at the very location where food is consumed,” said Vertical Field’s Chief Executive Officer, Guy Elitzur of Ra’anana, Israel who is hoping to place his ‘vertical farms’ in retail chains and restaurants establishments in cities throughout the US.
            </p>
            <Button href="
            https://www.hortidaily.com/article/9214186/vertical-farms-provide-sustainability-in-a-post-covid-world/
            " pos="center">Read More</Button>
          </Col>
          <Col lg={4}>
            <h1 className="headline">
            Why the Indoor Farming Movement is Taking Off
            </h1>
            <p className="preview">
            As the world emerges from a pandemic that has kept about one in five people in their homes for weeks, it's little surprise that the idea of indoor farming is gaining traction. After all, we've had a lot of time to think about what we can do indoors — and maybe even ponder what we may have done outdoors that contributed to this mess.
            </p>
            <Button href="
            https://www.mnn.com/your-home/organic-farming-gardening/stories/indoor-farming-study-obstacles-growth-potential
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
                    https://urbancropsolutions.com/
                    " target="_blank" rel="noopener noreferrer">
                      Urban Crop Solutions
                    </a>
                  </td>
                  <td>
                    2014
                  </td>
                  <td>
                    Series A
                  </td>
                  <td>
                    $4.8M
                  </td>
                </tr>
                <tr>
                <td>
                  <img src={startup2b} alt="Startup"/>
                </td>
                  <td>
                    <a href="
                    https://www.infarm.com/
                    " target="_blank" rel="noopener noreferrer">
                      Infarm
                    </a>
                  </td>
                  <td>
                    2013
                  </td>
                  <td>
                    Series B
                  </td>
                  <td>
                    $134.5M
                  </td>
                </tr>
                <tr>
                <td>
                  <img src={startup2c} alt="Startup"/>
                </td>
                  <td>
                    <a href="
                    https://www.agricool.co/en/
                    " target="_blank" rel="noopener noreferrer">
                      Agricool
                    </a>
                  </td>
                  <td>
                    2015
                  </td>
                  <td>
                    Series B
                  </td>
                  <td>
                    $38.9M
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
      <Article title="PODCAST OTW" img={podcast}>
        <h1 className="headline">
        The David Rubenstein Show: Didi President Jean Liu
        </h1>
        <p className="preview">
        In this podcast interview, David Rubenstein speaks to one of the most powerful women business executives in China and the world, Ms. Jean Liu of Didi. They discuss the emergence of Didi as a ride-sharing powerhouse in China, its expansion to global markets, and her own personal back story. The interview gives viewers an excellent glimpse into the effort, leadership and strategy it takes to successfully run a game-changing technology enterprise.
        </p>
        <Button href="
        https://www.youtube.com/watch?v=0-iphU-n8RM
        " pos="center">Listen Here</Button>
      </Article>
      <Article title='TERM OF THE WEEK'>
      <h1 className="headline text-center">
      What are “Pro Rata Rights”? 
      </h1>
      <p className="preview text-center">
      Pro Rata Rights refers to the rights of an existing investor to participate in subsequent rounds of the company’s funding to maintain their initial ownership percentage. These rights are generally demanded by early-stage investors, who use Pro Rata Rights to hedge against the large risk associated with early-stage companies. They can be especially helpful for investors who intend to keep their board seats and are required to maintain a certain percentage of ownership. Pro Rata Rights are a crucial factor that founders must evaluate when choosing their early investors. Founders should look for investors that can double as strategic advisors, as they will have the ability to maintain influential equity stakes in their companies.
      </p>
      </Article>
      <Footer />
    </div>
    );
  }
}

export default App;