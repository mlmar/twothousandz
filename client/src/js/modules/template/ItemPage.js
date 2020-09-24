import React, { useState } from 'react';
import Wrapper from '../ui/Wrapper.js';

function ItemPage(props) {
  const [index, setIndex] = useState(1);

  const id = props.match.params.itemID;
  const item = props.items[id]
  const images = item.images;

  function setImage(e) {
    setIndex(e.target.tagName === "IMG" ? e.target.id : 1);
  }

  return (
    <div className="item-page">
      <Wrapper className="display" src={images[index]} fit="horizontal" width="50"/>
      <div className="description">
        <label className="medium"> {item.name ? item.name : "name"} </label>
        <br/>

        <label className="small bold"> {item.price ? `$ ${item.price}` : "$ price"} </label>
        <br/>

        <div className="images flex wrap" onClick={setImage}>
          <Wrapper src={item.images[1]} fit="horizontal" id={1} width="100"/>
          <Wrapper src={item.images[0]} fit="horizontal" id={0} width="100"/>
        </div>
        <br/>
        
        <label className="small italic"> TODO: fix slow image loading </label>
      </div>
    </div>
  )
}

export default ItemPage;