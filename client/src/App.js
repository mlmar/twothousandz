import React, {useState} from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import './css/main.css';
import './css/mobile.css';

import Nav from './js/modules/nav/Nav.js';
import HomePage from './js/modules/nav/HomePage.js';

import DemoGallery from './js/modules/demo/DemoGallery.js';
import DemoLayout from './js/modules/demo/DemoLayout.js';
import DemoGrid from './js/modules/demo/DemoGrid.js';
import DemoCSS from './js/modules/demo/DemoCSS.js';
import DemoJS from './js/modules/demo/DemoJS.js';

const ROUTES = [
  { name : "Landing Page", path : "/" , class : "homepage" },
  { name : "Gallery Placeholer", path : "/demo/gallery" , class: "gallery"},
  { name : "Layout Placeholer", path : "/demo/layout" , class : "demolayout"},
  { name : "Grid Placeholer", path : "/demo/grid" , class : "demogrid"}
];

function App() {
  const [overlay, setOverlay] = useState("");

  return (
    <div className={`App overlay-${overlay}`}>
      <Router>
        <Nav routes={ROUTES}/>
        <div className="main">
          <Switch>
            <Route exact path="/" render={() => <HomePage title="2000'z" subtitle="give us money"/>}/>
            <Route exact path="/demo/gallery" render={() => <DemoGallery onMount={setOverlay}/>}/>
            <Route exact path="/demo/layout" component={DemoLayout}/>
            <Route exact path="/demo/grid" component={DemoGrid}/>
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