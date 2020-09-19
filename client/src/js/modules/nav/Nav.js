import React from 'react';
import { Link } from 'react-router-dom';

const ICON = {
  MENU : <> &#8801; </>
}

/*  Nav component
 *    required props:
 *      {onClick} : click handler for nav buttons (not necessary with react router)
 *      {routes}  : titles of reach of page to show as nav buttons
 */
class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropped : false
    }

    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  /*  On click event handler for nav buttons
   *    passed id number to props callback
   *    (if we stick react router, remove this);
   */
  handleClick(e) {
    var index = parseInt(e.target.id);
    if(this.props.onClick) this.props.onClick(index);
    this.toggle();
  }

  /*  Toggles "visible true" class for nav
   */
  toggle() {
    this.setState({ dropped : !this.state.dropped });
  }

  render() {
    return (
      <div className="nav">
        <button className="menu" onClick={this.toggle}> {ICON.MENU} </button> 
        <div className={"routes visible " + this.state.dropped}>
          {
            this.props?.routes.map((route, i) => {
              return <Link to={route.path} id={i} key={i} onClick={this.handleClick}> {route.name} </Link>
            })
          }
        </div>
      </div>
    )
  }
}

export default Nav;