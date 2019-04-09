import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from "../src/pages/Home/home";

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <Router>
        <div id='display' className='container-fluid'>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
