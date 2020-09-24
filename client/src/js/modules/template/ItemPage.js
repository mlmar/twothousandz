import React, { useState } from 'react';
import Wrapper from '../ui/Wrapper.js';

function ItemPage({ match, getItem }) {
  // states
  const [index, setIndex] = useState(1);
  const setImage = e => setIndex(e.target.tagName === "IMG" ? e.target.id : 1);
  const item = getItem(match?.params?.itemID);
  
  return (
    <div className="item-page">
      <Wrapper className="display" src={item?.images[index]} fit="horizontal" width="50"/>
      <div className="description">
        <label className="medium"> {item?.name ? item.name : "name"} </label>
        <br/>

        <label className="small bold"> {item?.price ? `$ ${item.price}` : "$ price"} </label>
        <br/>

        <div className="images flex wrap" onClick={setImage}>
          <Wrapper src={item?.images[1]} fit="horizontal" id={1} width="100"/>
          <Wrapper src={item?.images[0]} fit="horizontal" id={0} width="100"/>
        </div>
      </div>
    </div>
  )
}

export default ItemPage;