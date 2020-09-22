import React from 'react';

export default function Wrapper({ classes, src, width, fit }) {
  var orientation = fit ? fit : "vertical";
  return (
    <span className={`wrapper ${classes} fit-${orientation}`}> 
      <img src={src} alt={src} width={width} />
    </span>
  )
}