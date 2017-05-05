import React, { Component } from 'react';
import './App.css';
import {Container, Grid, Header, Menu, Segment} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="ui large top fixed hidden">
          <Container>
              <Menu pointing secondary={true}>
                  <Menu.Item>Bio</Menu.Item>
                  <Menu.Item>Experience</Menu.Item>
              </Menu>
              <div className="pusher">
                  <Segment vertical className="masthead center aligned">
                      <Container text textAlign="center">
                          <Header as="h1">Luigi Cardito</Header>
                          <Header as="h2">Software Engineer</Header>
                      </Container>
                  </Segment>
              </div>
          </Container>
          <Segment className="vertical stripe">
              <Grid container={true} stackable={true} verticalAlign="middle" textAlign="center">

              </Grid>
          </Segment>
      </div>
    );
  }
}

export default App;
