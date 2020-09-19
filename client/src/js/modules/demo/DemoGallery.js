import React from 'react';
import images from '../../util/Images.js';

const SLOGAN = "free and foolish, 2000'z";

class DemoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image : (
        <span className="wrapper animate-gallery"> 
          <img src={images[0].src} width="200" alt={images[0].src}/> 
        </span>
      )
    }

    this.index = 0;
    this.imgInterval = null;
  }

  componentDidMount() {
    this.imgInterval = setInterval(() => {
      this.index = this.index < images.length - 1 ? this.index + 1 : 0;
      this.setState({ 
        image : (
          <span className="wrapper animate-gallery" key={this.index}> 
            <img src={images[this.index].src} width="200" alt={images[this.index].src}/> 
          </span>
        )
      })
    }, 8000);
    this.props.onMount("gallery")
  }

  componentWillUnmount() {
    clearInterval(this.imgInterval);
    this.props.onMount();
  }

  render() {
    return (
      <div className="gallery">
        <label className="slogan large" ref={this.slogan}> {SLOGAN} </label>
        <div className="images">
          {this.state.image}
        </div>
      </div>
    )
  }
}

export default DemoGallery;