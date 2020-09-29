import React from 'react';
import { Switch, Link, Route, Redirect } from 'react-router-dom';
import { circle, matchedImages } from '../../util/Images.js';

import Wrapper from '../ui/Wrapper.js';
import Item from '../ui/Item.js';
import ItemPage from './ItemPage.js';
import Cart, { CartButton } from '../cart/Cart.js';

function Page({ match, addToCart }) {
  const path = match?.path;
  const getItem = (index) => matchedImages[index];


  // demo content mapping front/back images to a css item-grid
  const PageContent = () => (
    <div className="content">
      <section className="item-grid">
        { matchedImages.map((item, i) => <Link to={`${path}/${item.name}/${i}`} key={i}> <Item {...item}/> </Link>) }
        { matchedImages.reverse().map((item, i) => <Link to={`${path}/${item.name}/${i}`} key={i}> <Item {...item}/> </Link>) }
        { matchedImages.reverse().map((item, i) => <Link to={`${path}/${item.name}/${i}`} key={i}> <Item {...item}/> </Link>) }
      </section>
    </div>
  )

  return (
    <div className="page">

      <section className="banner">
        <Link to={path}> <Wrapper className="circle" src={circle}/> </Link>
      </section>

      <Switch>
        <Route exact path={path} component={PageContent}/>
        <Route exact path={`${path}/cart`} component={Cart}/>
        <Route exact path={`${path}/:itemName/:itemID`} render={(props) => <ItemPage {...props} getItem={getItem} onAdd={addToCart}/>}/>
        <Redirect to={path}/>
      </Switch>

      <section className="info">
        <label className="small"> these are definitely real shirts &trade; </label>
      </section>

      <CartButton/>

    </div>
  )
}

export default Page;