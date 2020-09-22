import React from 'react';

export default function Wrapper({ classes, src, width }) {
  return (
    <span className={`wrapper ${classes}`}> 
      <img src={src} alt={src} width={width} />
    </span>
  )
}