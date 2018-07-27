import React, { Component } from 'react';

import img from './images/cake.png';


const Section2 = () => {
	const style = {
		clear: 'both',
		padding: '4% 0 7% 4%',
	}

	const title = {
		textAlign: 'center', 
		marginBottom: '60px',
		fontSize: '3em',
		fontWeight: 'bold',
	}

	const title2 = {
		marginBottom: '20px',
		fontSize: '1.8em',
		fontWeight: 'bold',
		color: '#333',
	}	

	const section2Width = {
		display: 'flex',
		maxWidth: '1200px',
		margin: '0 auto',
	}

	const paragraph = {
		fontFamily: 'Raleway, sans-serif',
		lineHeight: '2',
	}

	const columnStyle = {
		position: 'relative',
		width: '100%',
	}

	const colmnMargin = {
		marginRight: '10%',
	}

	const imgStyle = {
		width: '100%',
		height: 'auto',
	}

	const button = {
		background: "#333",
		color: 'white',
		padding: '10px 15px',
		display: 'inline-block',
		marginTop: '15px',
	}

	return (
		<div className="section2" style={style}>
			<h1 style={title}>Let us tell Your Story</h1>
			<div className="section2-width" style={section2Width}>
				<div style={Object.assign({}, columnStyle, colmnMargin)}>
					<h1 style={title2}>Your Special Day</h1>
					<h2></h2>
					<p style={paragraph}>
						We are Take 220 Productions. Allow us to capture a living memory on your special day. We will do our best to cater to your wishes as we believe in a modern, cinematic touch to your wedding cinematography. We are from Phoenix serving all areas in Arizona, but are expanding to Southern California for the 2016-2017 wedding season.
					</p>
					<span style={button}>Button</span>
				</div>
				<div style={columnStyle}>
					<img src={img} style={imgStyle} />
				</div>
			</div>
		</div>
	)
};

export default Section2;
