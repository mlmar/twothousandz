import React from 'react';

class Demo extends React.Component {
  render() {
    return (
      <div className="flex fill   center align justify    col    fade in">
        <div>
          <label className="title"> .title </label>
          <label className="subtitle"> .subtitle </label>
          <label className="medium"> .medium </label>
          <label className="small"> .small </label>
        </div>
        <div className="flex row">
          <button className="dark small"> .dark </button>
          <button className="light small"> .light </button>
        </div>
      </div>
    )
  }
}

export default Demo;