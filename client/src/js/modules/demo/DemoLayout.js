import React from 'react';
import { shirts } from '../../util/Images.js';
import Wrapper from '../helper/Wrapper.js';

class DemoLayout extends React.Component {
  render() {
    return (
      <div className="layout">
          <div>
            <Wrapper src={shirts[0].src} width="200"/>
            <div className="text">
              <label className="medium"> TEXT </label>
            </div>
          </div>
          <div>
            <div className="text">
              <label className="medium"> TEXT </label>
            </div>
            <Wrapper src={shirts[1].src} width="200"/> 
          </div>
          <div>
            <Wrapper src={shirts[2].src} width="200"/> 
            <div className="text">
              <label className="medium"> TEXT </label>
            </div>
          </div>
          <div>
            <div className="text">
              <label className="medium"> TEXT </label>
            </div>
            <Wrapper src={shirts[3].src} width="200"/> 
          </div>
      </div>

    )
  }
}

export default DemoLayout;