import React from 'react';
import { Link } from 'react-router-dom';

/*  alternative NavBar component
 *    required props:
 *      {onClick} : click handler for nav buttons (not necessary with react router)
 *      {routes}  : titles of reach of page to show as nav buttons
 */
class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled : ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

  /*  On click event handler for nav buttons
   *    passed overlay class to props callback
   */
  handleClick(e) {
    var id = e.target.id;
    if(this.props.onClick) this.props.onClick(id);
  }

  render() {
    return (
      <div className={`navbar ${this.state.scrolled}`}>
        {
          this.props?.routes.map((route, i) => {
            return <Link to={route.path} id={route.class} key={i} onClick={this.handleClick}> {route.name} </Link>
          })
        }
      </div>
    )
  }
}

export default NavBar;



/*

handleScroll(e) {
  if(e.target.scrollTop > 0) {
    this.setState({ scrolled : "scrolled"})
  } else {
    this.setState({ scrolled : "" });
  }
}

*/