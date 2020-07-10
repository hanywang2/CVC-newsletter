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

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: 'July 9, 2020',
      authors: 'Ragini Balachandran and Aastha Shah',
      topic: {
        intro: 'Three Different Stories & Perspectives',
        topic1: 'Chrissa McFarlane, CEO of Patientory',
        topic2: 'Mike Asem, Partner at M25 & BLCK VC Board Member',
        topic3: 'Shelly Bell, Founder of Black Girl Ventures',
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
      <Article title={this.state.topic.intro} img="https://i.postimg.cc/rm8myrZp/stories.png">
        <Row>
          <Col lg={12} className="borderRight">
            <h1 className="headline">To be silent is to be complicit.</h1>
            <p className="preview">
            These last few months, we have been reflecting and having conversations about how we as an organization must do better in fostering a diverse and inclusive environment and taking meaningful action to create change. We are frustrated at the systematic inequalities that disproportionately impact Black people and ourselves for how we have contributed to the problem.
            </p>
            <br/>
            <p className="preview">
As our members continue to educate themselves on how they can be better allies to the Black community and other marginalized groups, we were grateful to hear and learn from the perspectives of Chrissa McFarlane, Mike Asem, and Shelly Bell. In this edition of our newsletter, they share firsthand accounts of their journeys as entrepreneurs, investors, and catalysts for change. 
</p>
<br/>
<p className="preview">
We know that these conversations are only the beginning and we have a lot more work to do. We are committed to holding each other accountable for our words and actions every day moving forward.
            </p>
            <br/>
            <p className="preview font-italic">
- The Cornell Venture Capital Team
            </p>
          </Col>
        </Row>
      </Article>
      <Article title={this.state.topic.topic1} img="https://miro.medium.com/focal/1200/675/53/35/1*ZLLOYoxSN0g5yw75ueSHoQ.png">
        <Row>
          <Col lg={12} className="borderRight">
            <p className="preview text-center" style={{fontStyle: 'italic', fontSize: 20}}>
            Chrissa McFarlane on disruption, diversity, and making a difference for the better in healthcare and beyond.
            </p>
            <Button href="
            https://medium.com/@rvb27/founder-spotlight-chrissa-mcfarlane-10a83f61bb4a?sk=37166ce04833bcd0d2dd0144ed4302e2
            " pos="center">Read Here</Button>
          </Col>
        </Row>
      </Article>
      <Article title={this.state.topic.topic2} img="https://i.postimg.cc/mkfmFTMh/Screen-Shot-2020-07-05-at-7-25-55-PM.png">
        <Row>
          <Col lg={12} className="borderRight">
          <p className="preview text-center" style={{fontStyle: 'italic', fontSize: 20}}>
          Mike Asem on disrupting the status quo with the powerful presences of underrepresented and overlooked voices in venture.
            </p>
            <Button href="
            https://medium.com/@rvb27/venture-spotlight-mike-asem-de156d48da7a?sk=7733d372bebd9ab7ec6495422c3ba4a7
            " pos="center">Read Here</Button>
          </Col>
        </Row>
      </Article>
      <Article title={this.state.topic.topic3} img="https://i.postimg.cc/nht3LVxW/3-990x660.jpg">
        <Row>
          <Col lg={12} className="borderRight">
          <p className="preview text-center" style={{fontStyle: 'italic', fontSize: 20}}>
          Shelly Bell on her journey to entrepreneurship, empowering Black and Brown womxn, and sparking a revolution in the current financial system to support minority founders.
            </p>
            <Button href="
            https://medium.com/@as3484/founder-spotlight-shelly-bell-4a461d2f4227?sk=0f76a7bff0c4098182c60ebce6b7df5d
            " pos="center">Read Here</Button>
          </Col>
        </Row>
      </Article>
      <Footer />
    </div>
    );
  }
}

export default App;