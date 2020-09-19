import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import './css/main.css';
import './css/mobile.css';

import Nav from './js/modules/nav/Nav.js';
import Footer from './js/modules/nav/Footer.js';
import HomePage from './js/modules/nav/HomePage.js';

import DemoCSS from './js/modules/demo/DemoCSS.js';
import DemoJS from './js/modules/demo/DemoJS.js';

const ROUTES = [
  { name : "Landing Page", path : "/" },
  { name : "CSS Demo", path : "/democss" },
  { name : "JS Demo", path : "/demojs" },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav routes={ROUTES}/>
          <div className="main">
            <Switch>
              <Route exact path="/" component={() => <HomePage title="2000'z" subtitle="Give us money"/>}/>
              <Route exact path="/democss" component={DemoCSS}/>
              <Route exact path="/demojs" component={DemoJS}/>
              <Redirect to="/"/>
            </Switch>
          </div>
        </Router>
        <Footer/>
      </div>
    )
  }
}

export default App;
