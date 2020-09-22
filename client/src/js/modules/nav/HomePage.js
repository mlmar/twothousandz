import React from 'react';
import Wrapper from '../helper/Wrapper.js';
import { placeholders, circle, transparent } from '../../util/Images.js';

/*  HomePage component
 *    {title} : title text
 *    {subtitle} : subtitle text
 */
function HomePage({ title, subtitle }) {
  return (
    <div className="homepage fade in">
      <div className="content">
        <section className="banner">
          <Wrapper classes="background" fit="horizontal" src={placeholders[0].src}/>
          <Wrapper classes="circle" fit="vertical" src={circle}/>
        </section>
        <section className="double">
          <div>
            <Wrapper fit="horizontal" src={transparent[0].src}/>
            <Wrapper classes="shirt-hover" fit="horizontal" src={transparent[2].src}/>
          </div>
          <div>
            <Wrapper fit="horizontal" src={transparent[1].src}/>
            <Wrapper classes="shirt-hover" fit="horizontal" src={transparent[4].src}/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage;