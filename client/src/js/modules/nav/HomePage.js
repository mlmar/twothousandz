import React from 'react';



/*  HomePage component
 *    required props:
 *      {title} : title text
 *      {subtitle} : subtitle text
 */
class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage fade in">
        <div className="flex col">
          <label className="title"> {this.props.title} </label>
          <label className="subtitle"> {this.props.subtitle} </label>
        </div>
      </div>
    )
  }
}

export default HomePage;