import React from 'react';
import { placeholders } from '../../util/Images.js';
import Wrapper from '../helper/Wrapper.js';

const SLOGAN = "free and foolish";

class DemoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image : <Wrapper classes="animate-gallery" src={placeholders[0].src} width="200"/> 
    }

    this.index = 0;
    this.imgInterval = null;
    this.reflect = this.reflect.bind(this);
  }

  componentDidMount() {
    this.imgInterval = setInterval(() => {
      this.index = this.index < placeholders.length - 1 ? this.index + 1 : 0;
      this.setState({
        image : <Wrapper classs="animate-gallery" src={placeholders[this.index].src} width="200" key={this.index}/>
      })
    }, 8000);
    this.props.onMount("gallery")
  }

  reflect(text) {
    return (
      <label className="slogan large" ref={this.slogan}> 
        {text} 
        <label className="reflection" ref={this.slogan}> {text} </label>
      </label>
    )
  }

  componentWillUnmount() {
    clearInterval(this.imgInterval);
    this.props.onMount();
  }

  render() {
    return (
      <div className="gallery">
        {this.reflect(SLOGAN)}
        <div className="images">
          {this.state.image}
        </div>
      </div>
    )
  }
}

export default DemoGallery;