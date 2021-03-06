import React from 'react';
import '../App.css';
import { Button, Col, Row } from 'reactstrap';

function Work() {
  return (
    <div id="#Work" className="hide-overflow">
      <Col xs={{offset: 1}}>
        <h1 className="subtitle">My Work</h1>
        <div className="underline"></div>
      </Col>
      <Row>
        <Col md={{ size: 3, offset: 1 }} xs="12" className="column-padding">
          <div class="hovereffect">
            <img src="contacts.png" alt="" />
            <div class="overlay">
              <h2>Add Contacts Feature</h2>
              <h5></h5>
              <p>
                Created a "native" contacts feature on a non-native mobile app that allows users to invite and find friends using their phone contacts.
              </p>
              <Button size="sm" className="learn-btn" href="/#/contacts">Learn More</Button>
            </div>
          </div>
        </Col>
        <Col md="auto" xs="12" className="column-padding">
          <div class="hovereffect">
            <img src="welcome.png" alt="" />
            <div class="overlay">
              <h2>App Welcome Screen</h2>
              <h5></h5>
              <p>
                Created slides a new user can swipe through to get an idea of what they can expect from using Pearachute.
              </p>
              <Button size="sm" className="learn-btn" href="/#/app-welcome">Learn More</Button>
            </div>
          </div>
        </Col>
        <Col md="auto" xs="12" className="column-padding">
          <div class="hovereffect">
            <img src="saved.png" alt="" />
            <div class="overlay">
              <h2>Saved Feature</h2>
              <h5></h5>
              <p>
                Worked on a feature that allows users to save kid's activities they may want to book later or locations they like.
              </p>
              <Button size="sm" className="learn-btn" href="/#/saved">Learn More</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 3, offset: 1 }} xs="12">
          <div class="hovereffect">
            <img src="buroak-taproom.png" alt="" />
            <div class="overlay">
              <h2>Bur Oak Taproom Page</h2>
              <h5></h5>
              <p>
                Created a page that shows off Bur Oak's taproom. It displays what beers are on tap and additional information on what to expect.
              </p>
              <Button size="sm" className="learn-btn" href="/#/taproom-page">Learn More</Button>
            </div>
          </div>
        </Col>
        <Col md="3" xs="12">
          <div class="hovereffect">
            <img src="autism-aid.png" alt="" />
            <div class="overlay">
              <h2>Autism Aid</h2>
              <h5></h5>
              <p>
                Worked on an app that gives parents an easier way to track a child with autisms' behaviors that doctors request them to track.
              </p>
              <Button size="sm" className="learn-btn" href="/#/autism-aid">Learn More</Button>
            </div>
          </div>
        </Col>
        <Col md="4" xs="12">
          <div class="hovereffect">
            <img src="techbot.png" alt="" />
            <div class="overlay">
              <h2>MU Techbot</h2>
              <h5></h5>
              <p>
                Using Google's dialogflow API, I worked on a team to create a chatbot to solve students' tech issues.
              </p>
              <Button size="sm" className="learn-btn" href="/#/techbot">Learn More</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Work;