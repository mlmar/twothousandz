import React from 'react';
import { circle, matched } from '../../util/Images.js';
import Wrapper from '../ui/Wrapper.js';
import Item from '../ui/Item.js';

function Page() {
  return (
    <div className="page">
      <section className="banner">
        <Wrapper className="circle" src={circle}/>
      </section>
      <div className="content">
        <section className="item-grid">
          { matched.map((item, i) => <Item {...item} className="fade in slow" key={i}/>) }
          { matched.map((item, i) => <Item {...item} className="fade in slow" key={i}/>) }
          { matched.map((item, i) => <Item {...item} className="fade in slow" key={i}/>) }
        </section>
      </div>
      <div className="info">
        <label className="small"> these are definitely real shirts &trade; </label>
      </div>
    </div>
  );
}

export default Page;