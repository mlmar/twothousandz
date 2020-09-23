import React from 'react';
import Wrapper from './Wrapper.js';

/*  Item container that shows a different item when hovered or clicked
 *    {props.images} : array of image items of at most length 2
 *    {props.fit}   : flex-direction (vertical | horizontal), will fit horizontally by default
 */
function Item(props) {
  return (
    <div className="item-container">
      <Wrapper 
        fit={props.fit ? props.fit.toLowerCase() : "horizontal"} 
        src={props?.images[0]}
        className={props.className}
      />
      { props?.images[1] && 
        <Wrapper 
          fit={props.fit ? props.fit.toLowerCase() : "horizontal"} 
          src={props.images[1]} 
          className={"secondary" }
        />
      }
    </div>
  )
}

export default Item;