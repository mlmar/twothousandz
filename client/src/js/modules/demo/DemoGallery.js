import React, { useState, useEffect } from 'react';
import { placeholders } from '../../util/Images.js';
import Wrapper from '../helper/Wrapper.js';

const SLOGAN = "free and foolish";

function DemoGallery({ onMount }) {
  const [image, setImage] = useState(
    <Wrapper classes="animate-gallery" src={placeholders[0].src} width="200"/>
  );

  // equivalent to componentDidMOunt and componentWillUnmount
  useEffect(() => {
    var index = 0; // cycle through images index
    const imgInterval = setInterval(() => {
      index = index < placeholders.length - 1 ? index + 1 : 0;
      setImage(
        <Wrapper classes="animate-gallery" src={placeholders[index].src} width="200" key={index}/>
      );
    }, 8100); // update image every 8.1 seconds
    return () => clearInterval(imgInterval);
  }, []);

  useEffect(() => {
    if(onMount) onMount("gallery");
    return onMount;
  }, [onMount])

  // reflection subcomponent
  const Reflection = ({ text }) => {
    return (
      <label className="slogan large"> 
        {text} 
        <label className="reflection"> {text} </label>
      </label>
    )
  }

  return (
    <div className="gallery">
      <Reflection text={SLOGAN}/>
      <div className="images">
        {image}
      </div>
    </div>
  )
}

export default DemoGallery;