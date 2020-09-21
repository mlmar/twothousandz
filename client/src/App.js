import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import './css/main.css';
import './css/mobile.css';

import Nav from './js/modules/nav/Nav.js';
// import Footer from './js/modules/nav/Footer.js';
import HomePage from './js/modules/nav/HomePage.js';

import DemoGallery from './js/modules/demo/DemoGallery.js';
import DemoLayout from './js/modules/demo/DemoLayout.js';
import DemoCSS from './js/modules/demo/DemoCSS.js';
import DemoJS from './js/modules/demo/DemoJS.js';

const ROUTES = [
  { name : "Landing Page", path : "/" , class : "homepage" },
  { name : "Gallery Demo", path : "/demo/gallery" , class: "gallery"},
  { name : "Layout Demo", path : "/demo/layout" , class : "demolayout"},
  { name : "CSS Demo", path : "/demo/css" , class : "democss"},
  { name : "JS Demo", path : "/demo/js" , class : "demojs"},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay : "",
    }

    this.handleMount = this.handleMount.bind(this);
  }

  /*  Pass this as as onMount prop to use in a compnentDidMount
   */
  handleMount(overlayClass) {
    this.setState({ 
      overlay : overlayClass
    });
  }

  render() {
    return (
      <div className={`App overlay-${this.state.overlay}`}>
        <Router>
          <Nav routes={ROUTES}/>
          <div className="main">
            <Switch>
              <Route exact path="/" render={() => <HomePage title="2000'z" subtitle="give us money"/>}/>
              <Route exact path="/demo/gallery" render={() => <DemoGallery onMount={this.handleMount}/>}/>
              <Route exact path="/demo/layout" component={DemoLayout}/>
              <Route exact path="/demo/css" component={DemoCSS}/>
              <Route exact path="/demo/js" component={DemoJS}/>
              <Redirect to="/"/>
            </Switch>
          </div>
          {/* <Footer/> */}
        </Router>
      </div>
    )
  }
}

export default App;
