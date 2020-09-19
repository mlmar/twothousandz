import React from 'react';
import TestService from '../../service/TestService.js';

const testService = new TestService();

class DemoJS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text : "Press ping to get server response"
    }
    
    this.ping = this.ping.bind(this);
  }

  ping() {
    testService.ping(response => {
      this.setState({ text : JSON.stringify(response) });
    })
  }

  render() {
    return (
      <div className="flex fill col center align justify">
        <label className="subtitle"> {this.state.text} </label>
        <button className="light medium" onClick={this.ping}> Ping </button>
      </div>
    )
  }
}

export default DemoJS;