import React, {useState} from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import './css/main.css';
import './css/mobile.css';

import Nav from './js/modules/nav/Nav.js';
import Page from './js/modules/template/Page.js';
import DemoRoutes from './js/modules/demo/DemoRoutes.js';

const ROUTES = [
  { name : "Generic Page", path : "/shop" , class : "homepage" },
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
            <Route path="/shop" component={Page}/>
            <Route path="/demo" render={(props) => <DemoRoutes {...props} onMount={setOverlay}/>}/>
            <Redirect to="/shop"/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;