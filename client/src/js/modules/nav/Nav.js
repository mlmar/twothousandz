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
   *    passed overlay class to props callback
   */
  handleClick(e) {
    var id = e.target.id;
    if(this.props.onClick) this.props.onClick(id);
    this.toggle();
  }

  /*  Toggles "visible true" class for nav
   */
  toggle() {
    this.setState({ dropped : !this.state.dropped });
  }

  render() {
    return (
      <div className={`nav visible ${this.state.dropped}`}>
        <button className="menu" onClick={this.toggle}> {ICON.MENU} </button> 
        <div className={`routes`}>
          {
            this.props?.routes.map((route, i) => {
              return <Link to={route.path} id={route.class} key={i} onClick={this.handleClick}> {route.name} </Link>
            })
          }
        </div>
      </div>
    )
  }
}

export default Nav;