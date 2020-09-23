import React from 'react';

/*  Image wrapper
 *    {src}       : image source
 *    {width}     : default width in px if necessary
 *    {fit}       : fill vertically or horizontally, horizontal by default
 *    {className} : css styles
 */
export default function Wrapper({ src, width, fit, className }) {
  var orientation = fit ? fit : "vertical";
  return (
    <span className={`wrapper ${className} fit-${orientation}`}> 
      <img src={src} alt={src} width={width} />
    </span>
  )
}