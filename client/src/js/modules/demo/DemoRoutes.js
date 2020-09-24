import React from 'react';
import { Route } from 'react-router-dom';

import DemoGallery from './DemoGallery.js';
import DemoCSS from './DemoCSS.js';
import DemoJS from './DemoJS.js';

function DemoRoutes(props) {
  const path = props.match.path;

  return (
    <>
      <Route exact path={`${path}/gallery`} render={() => <DemoGallery onMount={props.onMount}/>}/>
      <Route exact path={`${path}/css`} component={DemoCSS}/>
      <Route exact path={`${path}/js`} component={DemoJS}/>
    </>
  )
}

export default DemoRoutes;