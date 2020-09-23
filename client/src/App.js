import React, {useState} from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import './css/main.css';
import './css/mobile.css';

import Nav from './js/modules/nav/Nav.js';
import Page from './js/modules/template/Page.js';
import DemoGallery from './js/modules/demo/DemoGallery.js';
import DemoCSS from './js/modules/demo/DemoCSS.js';
import DemoJS from './js/modules/demo/DemoJS.js';

const ROUTES = [
  { name : "Generic Page", path : "/" , class : "homepage" },
  { name : "Gallery", path : "/demo/gallery" , class: "gallery"}
];

function App() {
  const [overlay, setOverlay] = useState("");

  return (
    <div className={`App overlay-${overlay}`}>
      <Router>
        <Nav routes={ROUTES}/>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Page}/>
            <Route exact path="/demo/gallery" render={() => <DemoGallery onMount={setOverlay}/>}/>
            <Route exact path="/demo/css" component={DemoCSS}/>
            <Route exact path="/demo/js" component={DemoJS}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;