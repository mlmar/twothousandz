import React from 'react';



const sq1 = { background: "rgb(252, 186, 3)" }
const sq2 = { background: "rgb(209, 209, 209)" }
const sq3 = { background: "white" }

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
            <div style={sq1}></div>
            <div style={sq2}></div>
            <div style={sq3}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;