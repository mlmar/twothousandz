import React from 'react';
import Wrapper from '../helper/Wrapper.js';
import { shirts } from '../../util/Images.js';

class DemoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items : []
    }

    this.renderGrid = this.renderGrid.bind(this);
  }

  renderGrid() {
    return (
      this.state.items.map((item, i ) => {
        return (
          <div className="item" key={i}>
            <Wrapper src={item.src}/>
            <label className="small"> {item.src} </label>
          </div>
        )
      })
    )
  }

  componentDidMount() {
    var temp = [];
    for(var i = 0; i < 20; i++) {
      temp.push(shirts[i % 4]);
    }
    this.setState({ items : temp });
  }

  render() {
    return (
      <div className="grid">
        <div className="top"> 
          <label className="medium"> grid layout placeholders </label> 
        </div>
        <div className="content">
          {this.renderGrid()}
        </div>
        <div className="bottom"></div>
      </div>
    )
  }
}

export default DemoGrid;