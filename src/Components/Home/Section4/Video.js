import React, { Component } from 'react';

const Video = () => {

	return (
		<div className="Video">
			<video controls class="background-video background desktop" src={Video[0].sdf} poster="/images/drask-slayer-faceoff-feature.jpg" loop="" muted="" preload="metadata" width="1920" height="700"></video>
		</div>
	)
};

export default Video;
