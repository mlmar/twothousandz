import React from 'react';
import TestService from '../../service/TestService.js';

const testService = new TestService();

class DemoJS extends React.Component {
  constructor(props) {
    super(props);
    
    this.ping = this.ping.bind(this);
  }

  ping() {
    testService.ping(response => {
      alert(JSON.stringify(response));
    })
  }

  render() {
    return (
      <div className="flex fill col center align justify">
        <button className="light medium" onClick={this.ping}> Ping </button>
      </div>
    )
  }
}

export default DemoJS;