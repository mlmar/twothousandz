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
        <div className="flex fill col">
          <label className="title"> {this.props.title} </label>
          <label className="subtitle"> {this.props.subtitle} </label>
        </div>
        <div className="flex col">
          <label className="large"> color palette? </label>
          <br/>
          <div className="flex row colors">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;