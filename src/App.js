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

import matt from './assets/seniors/matt.png';
import david from './assets/seniors/david.png';
import zach from './assets/seniors/zach.png';
import shen from './assets/seniors/shen.png';
import mason from './assets/seniors/mason.png';
import jeff from './assets/seniors/jeff.png';
import christophe from './assets/seniors/christophe.png';
import deal from './assets/seniors/deal.png';
import claire from './assets/seniors/claire.png';
import grace from './assets/seniors/grace.png';

import startup1a from './assets/startup1a.png';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: 'May 21, 2020',
      authors: 'The CVC Newsletter Team ❤️',
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
      <Article title='A BIG HOORA TO OUR SENIORS 🎉'>
      <h1 className="headline text-center">
      What are “Pro Rata Rights”? 
      </h1>
      <p className="preview text-center">
      Pro Rata Rights refers to the rights of an existing investor to participate in subsequent rounds of the company’s funding to maintain their initial ownership percentage. These rights are generally demanded by early-stage investors, who use Pro Rata Rights to hedge against the large risk associated with early-stage companies. They can be especially helpful for investors who intend to keep their board seats and are required to maintain a certain percentage of ownership. Pro Rata Rights are a crucial factor that founders must evaluate when choosing their early investors. Founders should look for investors that can double as strategic advisors, as they will have the ability to maintain influential equity stakes in their companies.
      </p>
      </Article>
      <Row>
        <Col lg={6} md={6}>
        <Article title="Matthew Salazar" img={matt}>
        <Row>
          <Col lg={12}>
            <h1 className="headline">
            What is an industry you're interested in?
            </h1>
            <p className="preview">
            Nanotechnology has potential to transform nearly all sectors including high cost industries such as healthcare, energy and water. The fragmented market for nanotech provides an incredible opportunity for standardization and innovation. I believe the financialization of this sector and others such as space tech and infrastructure tech will move from simple debt to equity or more complex debt structures.
            </p>
          </Col>
          <Col lg={12}>
            <h1 className="headline mt-3">
            Any words of wisdom?
            </h1>
            <p className="preview">
            Don’t stop learning! Taking the opportunity to learn a new skill or a new subject in depth pays dividends not only locally and ephemerally, but also by permanently expanding your problem-solving approaches and creativity across all subjects.
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Favorite Startup</h1>
            </div>
            <Table hover className="mt-4" responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
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
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
        </Col>
        <Col lg={6} md={6}>
        <Article title="David Larar" img={david}>
        <Row>
          <Col lg={12}>
            <h1 className="headline">
            What is an industry you're interested in?
            </h1>
            <p className="preview">
            Alternative Lending. Traditional credit scores are archaic and act as a barrier to prevent underserved populations from accessing modern FinTech tools.  Whether it be fields of crops, page views, or earnings potential, there are new ways to leverage data to underwrite the lending process in a manner that better serves traditionally neglected communities.
            </p>
          </Col>
          <Col lg={12}>
            <h1 className="headline mt-3">
            Any words of wisdom?
            </h1>
            <p className="preview">
            Don't complain about a problem, go and fix it. "If not me then who?" - Travis Manion 
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Favorite Startup</h1>
            </div>
            <Table hover className="mt-4" responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
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
                    https://neurodatalab.com/
                    " target="_blank" rel="noopener noreferrer">
                      Neurodata Lab
                    </a>
                  </td>
                  <td>2015</td>
                  <td>Series A</td>
                  <td>$29.6M</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
        </Col>
        <Col lg={6} md={6}>
        <Article title="Shen Lee" img={shen}>
        <Row>
          <Col lg={12}>
            <h1 className="headline">
            What is an industry you're interested in?
            </h1>
            <p className="preview">
            Agrifood Tech (no surprises there). The food industry is going to change more in the next 10 years than it has in the last 30.The future of food is fast, fresh, and hungry for disruption, requiring new solutions to today's most pressing food production problems. We need to embrace and invest in the scientific and technological advances in food to build a more sustainable, inclusive, and innovative food future.
            </p>
          </Col>
          <Col lg={12}>
            <h1 className="headline mt-3">
            Any words of wisdom?
            </h1>
            <p className="preview">
            1. Pursue impact over titles 
2. Pave your own path and define your own version of success 
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Favorite Startup</h1>
            </div>
            <Table hover className="mt-4" responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
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
                      Dropcopter
                    </a>
                  </td>
                  <td>2015</td>
                  <td>Series A</td>
                  <td>$29.6M</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
        </Col>
        <Col lg={6} md={6}>
        <Article title="Jeff Liu" img={jeff}>
        <Row>
          <Col lg={12}>
            <h1 className="headline">
            What is an industry you're interested in?
            </h1>
            <p className="preview">
            With utility-scale solar and onshore wind becoming increasingly cost-competitive with conventional energy sources, I'm really excited about the clean energy space. It's interesting to see how subsidies, demand response, and regulators will shape the industry, but I'm quite optimistic about the future of clean tech!
            </p>
          </Col>
          <Col lg={12}>
            <h1 className="headline mt-3">
            Any words of wisdom?
            </h1>
            <p className="preview">
            Take risks and bet on yourself. But don't neglect the friendships you make along the way!
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Favorite Startup</h1>
            </div>
            <Table hover className="mt-4" responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
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
                      Astranis
                    </a>
                  </td>
                  <td>2015</td>
                  <td>Series A</td>
                  <td>$29.6M</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
        </Col>
        <Col lg={6} md={6}>
        <Article title="Christophe Gerlach" img={christophe}>
        <Row>
          <Col lg={12}>
            <h1 className="headline">
            What is an industry you're interested in?
            </h1>
            <p className="preview">
            I'm interesting in learning more about the power of big data. There will be so many more data outputs in the comings years (IoT, mobile technology innovation, etc), and I am excited to see what tools entrepreneurs build with these new data sources.
            </p>
          </Col>
          <Col lg={12}>
            <h1 className="headline mt-3">
            Any words of wisdom?
            </h1>
            <p className="preview">
            Choose your closest friends wisely -  they have a huge influence on your worldview!
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Favorite Startup</h1>
            </div>
            <Table hover className="mt-4" responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
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
                      Stripe
                    </a>
                  </td>
                  <td>2015</td>
                  <td>Series A</td>
                  <td>$29.6M</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
        </Col>
        <Col lg={6} md={6}>
        <Article title="Daniel Solinsky" img={deal}>
        <Row>
          <Col lg={12}>
            <h1 className="headline">
            What is an industry you're interested in?
            </h1>
            <p className="preview">
            Supply Chain and Logistics is a puzzle humanity has been trying to solve since the beginning of its existence. Ongoing research into predictive analytics and transportation systems will forever improve the efficiency of this industry and I am excited to see this change on a global scale.
            </p>
          </Col>
          <Col lg={12}>
            <h1 className="headline mt-3">
            Any words of wisdom?
            </h1>
            <p className="preview">
            Searching for new perspectives and listening to learn are equally as important as original thought.
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Favorite Startup</h1>
            </div>
            <Table hover className="mt-4" responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
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
                      Robinhood
                    </a>
                  </td>
                  <td>2015</td>
                  <td>Series A</td>
                  <td>$29.6M</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
        </Col>
        <Col lg={6} md={6}>
        <Article title="Zachary Shine" img={zach}>
        <Row>
          <Col lg={12}>
            <h1 className="headline">
            What is an industry you're interested in?
            </h1>
            <p className="preview">
            Public transit. Because nothing brings me more joy than to see a demolish waterfront highway replaced with a park.
            </p>
          </Col>
          <Col lg={12}>
            <h1 className="headline mt-3">
            Any words of wisdom?
            </h1>
            <p className="preview">
            Be present. Take advantage of everything that Cornell and Ithaca have to offer. And never take school (your classes) too seriously.
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Favorite Startup</h1>
            </div>
            <Table hover className="mt-4" responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
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
                      Turo
                    </a>
                  </td>
                  <td>2015</td>
                  <td>Series A</td>
                  <td>$29.6M</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
        </Col>
        <Col lg={6} md={6}>
        <Article title="Mason Woods" img={mason}>
        <Row>
          <Col lg={12}>
            <h1 className="headline">
            What is an industry you're interested in?
            </h1>
            <p className="preview">
            Aerospace technology and space travel mostly because it's cool af, but also I think it's unironically the next frontier. Also, greentech is fascinating because it's literally essential.
            </p>
          </Col>
          <Col lg={12}>
            <h1 className="headline mt-3">
            Any words of wisdom?
            </h1>
            <p className="preview">
            Keep an open mind and search for disruptive technologies and models outside where others don't look. Also, follow your passions, and I mean this in the most genuine way possible. Dare to truly find what you love and make your life your own, otherwise it won't be yours. It will be someone else's.
            </p>
          </Col>
        </Row>
      </Article>
        </Col>
        <Col lg={6} md={6}>
        <Article title="Claire Pan" img={claire}>
        <Row>
          <Col lg={12}>
            <h1 className="headline">
            What is an industry you're interested in?
            </h1>
            <p className="preview">
            I’m really interested in the chronic health space. The American healthcare system is so broken and fragmented. It focuses on episodic care and doesn’t provide long-term sustainable care to the millions of people who live with chronic diseases. There’s so much opportunity to disrupt the space and create some truly meaningful and life-changing.
            </p>
          </Col>
          <Col lg={12}>
            <h1 className="headline mt-3">
            Any words of wisdom?
            </h1>
            <p className="preview">
            My best piece of advice is to always say yes to opportunities (that you have room to take on). I didn't know what venture capital was when I joined CVC, but I am so grateful that it led me to a career path that truly excites me and introduced me to some of the most inspiring people.
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Favorite Startup</h1>
            </div>
            <Table hover className="mt-4" responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
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
                      Milkbar
                    </a>
                  </td>
                  <td>2015</td>
                  <td>Series A</td>
                  <td>$29.6M</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
        </Col>
        <Col lg={6} md={6}>
        <Article title="Grace Shau" img={grace}>
        <Row>
          <Col lg={12}>
            <h1 className="headline">
            What is an industry you're interested in?
            </h1>
            <p className="preview">
            Edtech : I think the current education system is in need of reform especially given the increasing importance and expectation of tech literacy. Additionally the COVID crisis has highlighted the inadequacy of the infrastructure to accommodate for the shifting needs of the students.
            </p>
          </Col>
          <Col lg={12}>
            <h1 className="headline mt-3">
            Any words of wisdom?
            </h1>
            <p className="preview">
            Always remember to give back. No one got to where they are without the help of others, so be that other for someone else! 
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center">
              <h1 className="mid-title">Favorite Startup</h1>
            </div>
            <Table hover className="mt-4" responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
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
                      Neverware
                    </a>
                  </td>
                  <td>2015</td>
                  <td>Series A</td>
                  <td>$29.6M</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Article>
        </Col>
      </Row>
      <Footer />
    </div>
    );
  }
}

export default App;