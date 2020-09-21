import React from 'react';

class Wrapper extends React.Component {
  render() {
    return (
      <span className={`wrapper ${this.props.classes}`}> 
        <img src={this.props.src} width={this.props.width} alt={this.props.src}/>
      </span>
    )
  }
}

export default Wrapper;