import React from 'react';

/*  HomePage component
 *    {title} : title text
 *    {subtitle} : subtitle text
 */
function HomePage({ title, subtitle }) {
  return (
    <div className="homepage fade in">
      <div className="flex col">
        <label className="title"> {title} </label>
        <label className="subtitle"> {subtitle} </label>
      </div>
      <div className="flex fill colors">
        <div className="fill"></div>
        <div className="fill"></div>
        <div className="fill"></div>
      </div>
    </div>
  )
}

export default HomePage;