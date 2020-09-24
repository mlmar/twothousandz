import React from 'react';

/*  Image wrapper
 *    {src}       : image source
 *    {width}     : default width in px if necessary
 *    {fit}       : fill vertically or horizontally, horizontal by default
 *    {className} : css styles
 */
export default function Wrapper(props) {
  var orientation = props.fit ? props.fit : "vertical";
  return (
    <span className={`wrapper ${props.className} fit-${orientation}`}> 
      <img src={props.src} alt={props.src} width={props.width ? props.width : "50"} id={props.id}/>
    </span>
  )
}