import React, { useState } from 'react';
import Wrapper from '../ui/Wrapper.js';

function ItemPage({ match, getItem, onAdd}) {
  // states
  const [index, setIndex] = useState(1);
  const setImage = e => setIndex(e.target.tagName === "IMG" ? e.target.id : 1);
  
  const itemID = parseInt(match?.params?.itemID);
  const item = getItem(itemID);
  const handleAdd = () => alert("not implemented");
  
  return (
    <div className="item-page">
      <Wrapper className="display" src={item?.images[index]} fit="horizontal" width="50"/>
      <div className="description">
        <span className="flex col">
          <label className="medium"> {item?.name ? item.name : "name"} </label>
          <label className="small bold"> {item?.price ? `$ ${item.price}` : "$ price"} </label>
        </span>


        <div className="images flex wrap" onClick={setImage}>
          <Wrapper src={item?.images[1]} fit="horizontal" id={1} width="100"/>
          <Wrapper src={item?.images[0]} fit="horizontal" id={0} width="100"/>
        </div>

        <span className="flex col">
          <button className="add-to-cart light" onClick={handleAdd}> add to cart </button>
          <button className="dark" onClick={handleAdd}> take my wallet </button>
        </span>
        
      </div>
    </div>
  )
}

export default ItemPage;