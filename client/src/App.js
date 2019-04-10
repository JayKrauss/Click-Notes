import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Bootstrap components.
import { Container } from 'reactstrap';

// Custom components.
import Home from '../src/pages/Home/home';

class App extends Component {
  render() {
    return (
      <Router>
        <Container
          fluid
          id="display"
          className="p-0">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
