import React, { useState, useEffect } from 'react';
import Wrapper from '../helper/Wrapper.js';
import { transparent } from '../../util/Images.js';

function DemoGrid() {
  const [items, setItems] = useState([]);
  
  const ItemGrid = () => {
    return items.map((item, i ) => {
      return (
        <div className="item" key={i}>
          <Wrapper fit="horizontal" src={item.src}/>
          <label className="small flex row center justify"> shirt </label>
        </div>
      )
    })
  }
  
  useEffect(() => {
    var temp = [];
    for(var i = 0; i < 20; i++) {
      temp.push(transparent[i % 7]);
    }
    setItems(temp);
  }, []);
  
  return (
    <div className="grid">
      <div className="top"> 
        <label className="medium"> grid layout placeholders </label> 
      </div>
      <div className="content">
        <ItemGrid/>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default DemoGrid;