import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ICON = {
  MENU : <> &#8801; </>
}

/*  Nav component
 *    {onClick} : click handler for nav buttons (not necessary with react router)
 *    {routes}  : titles of reach of page to show as nav buttons
 */
function Nav({ routes, onClick }) {
  const [dropped, toggleDropped] = useState(false);
  const navDiv = useRef(null);
  
  /*  On click event handler for nav buttons
   *    passed overlay class to props callback
   */
  const handleNavClick = (e) => {
    var id = e.target.id;
    if(onClick) onClick(id);
    toggleDropped(false);
  }

  // close the nav when user focuses outside component
  useEffect(() => {
    document.addEventListener("click", handleOutOfFocus);
    return () => document.removeEventListener("click", handleOutOfFocus);
  }, [])

  const handleOutOfFocus = (e) => {
    if(!navDiv?.current.contains(e.target)) toggleDropped(false);
  };

  const NavButton = (props) => (
    <Link className="item" to={props.path} id={props.class} onClick={handleNavClick}> {props.name} </Link> 
  )

  return (
    <div className={`nav visible ${dropped}`} ref={navDiv}>
      <div className="routes">
        { routes?.map((route, i) => <NavButton {...route} key={i}/>) }
      </div>
      <button className="menu" onClick={() => toggleDropped(!dropped)}> {ICON.MENU} </button>
    </div>
  )
}

export default Nav;