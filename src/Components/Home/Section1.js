import React, { Component } from 'react';

import img1 from './images/image.png';
import img2 from './images/image2.png';
import img3 from './images/image3.jpg';
import img4 from './images/image4.png';



class Section1 extends Component {
	state = {
		count: 1
	}

	componentDidMount() {
		this.interval = setInterval(() => {
		  this.setState({count: this.state.count + 1});
		  if(this.state.count > 4) {
		  	this.setState({count: 1});
		  }
		}, 4000)
	}

	componentWillUnmount() {
	  clearInterval(this.interval);
	}

	imageClass = (value) => {
		return ((value == this.state.count) ? 'active': 'defaults');
	}

	render() {
	//Inline Style
	const image = {
	backgroundImage1: `url(${img1})`,
	backgroundImage2: `url(${img2})`,
	backgroundImage3: `url(${img3})`,
	backgroundImage4: `url(${img4})`,
	}

	const backgroundImage1 = {
		backgroundImage: image.backgroundImage1
	}

	const backgroundImage2 = {
		backgroundImage: image.backgroundImage2
	}

	const backgroundImage3 = {
		backgroundImage: image.backgroundImage3
	}

	const backgroundImage4 = {
		backgroundImage: image.backgroundImage4
	}

	const sectionStyle = {
		position: 'absolute',
		height: '100%',
		width: '100%',
		backgroundPosition: '50% 50%',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
	}

	const height = {
		height: '750px',
		position: 'relative',
	}
	
		return (
			<div style={height} className="backgroundContainer">
				<div className={[this.imageClass('1'), "main-class"].join(' ')} style={Object.assign({}, sectionStyle, backgroundImage1)}>{this.state.count}</div>
				<div className={this.imageClass('2')} style={Object.assign({}, sectionStyle, backgroundImage2)}>{this.state.count}</div>
				<div className={this.imageClass('3')} style={Object.assign({}, sectionStyle, backgroundImage3)}>{this.state.count}</div>
				<div className={this.imageClass('4')} style={Object.assign({}, sectionStyle, backgroundImage4)}>{this.state.count}</div>
			</div>
		)
	}
};

export default Section1;