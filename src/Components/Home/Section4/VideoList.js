import React, { Component } from 'react';
import Video from './Video';

import Video1 from '../../../Videos/sample1.mp4';
import Video2 from '../../../Videos/sample2.mp4';
import Video3 from '../../../Videos/sample3.mp4';

import Image1 from '../../../images/image1.png';
import Image2 from '../../../images/image2.png';
import Image3 from '../../../images/image3.jpg';
import Image4 from '../../../images/image4.png';
import Image5 from '../../../images/image5.jpg';


class VideoList extends Component {
	state = {
		array : [
			{
				'video': Video1,
				'poster': Image1,
			},
			{
				'video': Video2,
				'poster': Image2
			},
			{
				'video': Video3,
				'poster': Image3
			},
			{
				'video': Video1,
				'poster': Image4,
			},
			{
				'video': Video2,
				'poster': Image5
			},
		],
		changeVideo: Video1,
		videoHeight: '',
		addClassList: false,
	}

	changeVideo = (e) => {
		this.setState({
			array : [
				{
					'video': Video1,
					'poster': Image1,
				},
				{
					'video': Video2,
					'poster': Image2
				},
				{
					'video': Video3,
					'poster': Image3
				},
				{
					'video': Video1,
					'poster': Image4,
				},
				{
					'video': Video2,
					'poster': Image5
				},
			],
			changeVideo: e,
			videoHeight: this.myElement.clientHeight,
		})
	}
	
	componentDidMount() {
        this.windowResize();
        window.addEventListener('resize',  this.windowResize.bind(this));
	}

	windowResize() {
	   console.log(this.myElement.clientHeight)
	   this.setState({
			array : [
				{
					'video': Video1,
					'poster': Image1,
				},
				{
					'video': Video2,
					'poster': Image2
				},
				{
					'video': Video3,
					'poster': Image3
				},
				{
					'video': Video1,
					'poster': Image4,
				},
				{
					'video': Video2,
					'poster': Image5
				},
			],
			videoHeight: this.myElement.clientHeight,
		})
      	
	}

	toggleClass(i) {
		i.preventDefault();
		this.setState({
			array : [
				{
					'video': Video1,
					'poster': Image1,
				},
				{
					'video': Video2,
					'poster': Image2
				},
				{
					'video': Video3,
					'poster': Image3
				},
				{
					'video': Video1,
					'poster': Image4,
				},
				{
					'video': Video2,
					'poster': Image5
				},
			],
			videoHeight: this.myElement.clientHeight,
			addClassList: !this.state.addClassList, 
		})
	}

	scrollTo = () => {
	 	const elementTop = this.gate.offsetTop;
		window.scrollTo(0, elementTop);

	}

  	render() {
	  	const listContainerLeft = {
			float: 'left',
			width: '24%',
			height: this.state.videoHeight,
			overflowY: 'scroll',
		}

		const video = {
			float: 'left',
			width: '76%',
			height: 'auto',
		}

		const poster = {
			height: 'auto',
			width: '100%',
			display: 'block',
		}

		const videoList = this.state.array.map(video => {
			const video2 = video.video;
			const addClassList = this.state.addClassList;
			return (
				<div className={`test ${addClassList ? 'addClassList' : ''}`} onClick={(i) => this.toggleClass(i)} onClick={this.changeVideo.bind(this, video2)}><img style={poster} src={video.poster} /></div>
			)
		})

		return (
			<div onClick={this.handleToggle} className="VideoList">
				<div className="listContainer">
					<div className="listContainer-left" >
						<div style={listContainerLeft}>{videoList}</div>
					</div>
				</div>
				<div ><video controls ref={(input) => { this.myElement = input; }} style={video} autoPlay className="video" src={this.state.changeVideo}  poster="/images/drask-slayer-faceoff-feature.jpg" loop="true" muted="" preload="metadata" width="1920" height="700"></video>
				</div>
			</div>
		)
	}
};

export default VideoList;
