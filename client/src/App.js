import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Store from './js/global/Store.js';

import './App.css';
import './css/main.css';
import './css/mobile.css';


import Nav from './js/modules/nav/Nav.js';
import Page from './js/modules/template/Page.js';
import DemoGallery from './js/modules/demo/DemoGallery.js';
import DemoCSS from './js/modules/demo/DemoCSS.js';
import DemoJS from './js/modules/demo/DemoJS.js';

const ROUTES = [
  { name : "Generic Page", path : "/shop" , class : "homepage" },
  { name : "Gallery", path : "/demo/gallery" , class: "gallery"}
];

function App() {
  const [overlay, setOverlay] = useState("");
  const [cart, setCart] = useState([]); // may transition to redux at some point to reduce callbacks
  const handleAddToCart = (itemID) => setCart(cart.concat(itemID));

  const demoRoutes = ({ match }) => {
    const path = match.path;
    return (
      <>
        <Route exact path={`${path}/gallery`} render={() => <DemoGallery onMount={setOverlay}/>}/>
        <Route exact path={`${path}/css`} component={DemoCSS}/>
        <Route exact path={`${path}/js`} component={DemoJS}/>
      </>
    )
  }

  return (
    <div className={`App overlay-${overlay}`}>
      <Store>
        <Router>
          <Nav routes={ROUTES}/>
          <div className="main">
            <Switch>
              <Route path="/shop" render={(props) => <Page {...props} addToCart={handleAddToCart}/>}/>
              <Route path="/demo" component={demoRoutes}/>
              <Redirect to="/shop"/>
            </Switch>
          </div>
        </Router>
      </Store>
    </div>
  )
}

export default App;