import React, { useState } from 'react';
import TestService from '../../service/TestService.js';

const testService = new TestService();

function DemoJS() {
  const [text, setText] = useState("Press ping to get server response")

  const ping = () => {
    testService.ping(response => setText(JSON.stringify(response)));
  }

  return (
    <div className="flex fill col center align justify">
      <label className="subtitle"> {text} </label>
      <button className="light medium" onClick={ping}> Ping </button>
    </div>
  )
}

export default DemoJS;