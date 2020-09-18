import React from 'react';
import './App.css';
import './css/main.css';
import './css/mobile.css';

import Nav from './js/modules/nav/Nav.js';
import Footer from './js/modules/nav/Footer.js';
import HomePage from './js/modules/nav/HomePage.js';

import DemoCSS from './js/modules/demo/DemoCSS.js';
import DemoJS from './js/modules/demo/DemoJS.js';

const ROUTES = ["Landing Page", "CSS Demo", "JS Demo", "Page 4"];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index : 0
    }
    
    this.handleNavClick = this.handleNavClick.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
  }

  /*  onClick handler for Nav component
   *    {i} : nav button index based on ROUTES array order
   */
  handleNavClick(i) {
    this.setState({ index : i })
  }

  /*  Conditional rendering based on index state
   */
  renderSwitch() {
    switch(this.state.index) {
      case 0: // home page
        return <HomePage title="2000'z" subtitle="Give us money"/>
      case 1: // css demo page
        return <DemoCSS/>
      case 2:
        return <DemoJS/>
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="App">
        <Nav routes={ROUTES} onClick={this.handleNavClick}/>
        <div className="main">
          {this.renderSwitch()}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
