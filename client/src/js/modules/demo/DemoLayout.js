import React from 'react';
import { shirts } from '../../util/Images.js';
import Wrapper from '../helper/Wrapper.js';

class DemoLayout extends React.Component {
  render() {
    return (
      <div className="layout">
          <div className="content">
            <div> 
              <Wrapper src={shirts[0].src}/> 
              <p className="title"> Placeholder text </p> 
            </div> 
            <div> 
              <p className="title"> Placeholder text </p> 
              <Wrapper src={shirts[1].src}/> 
            </div>
            <div> 
              <Wrapper src={shirts[2].src}/>
              <p className="title"> Placeholder text </p> 
            </div>
            <div> 
              <p className="title"> Placeholder text </p> 
              <Wrapper src={shirts[3].src}/>
            </div>
          </div>
      </div>

    )
  }
}

export default DemoLayout;