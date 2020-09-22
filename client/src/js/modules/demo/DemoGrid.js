import React, { useState, useEffect } from 'react';
import Wrapper from '../helper/Wrapper.js';
import { shirts } from '../../util/Images.js';

function DemoGrid() {
  const [items, setItems] = useState([]);
  
  const ItemGrid = () => {
    return items.map((item, i ) => {
      return (
        <div className="item" key={i}>
          <Wrapper src={item.src}/>
          <label className="small"> {item.src} </label>
        </div>
      )
    })
  }
  
  useEffect(() => {
    var temp = [];
    for(var i = 0; i < 20; i++) {
      temp.push(shirts[i % 4]);
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