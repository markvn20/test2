import React, { Component } from 'react';

import img from '../../images/section3-1.png';
import img2 from '../../images/section3-2.png'


const Section3 = () => {

	const section3Box = {
		position: 'relative',
		float: 'left',
		width: '50%',
		background: '#f7f9f1',
	}

	const imgLeft = {
		width: '50%',
		padding: '30% 0 0',
		backgroundImage: `url(${img})`,
		backgroundPosition: '50% 50%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 100%'
	}

	const imgRight = {
		width: '50%',
		padding: '30% 0 0',
		backgroundImage: `url(${img2})`,
		backgroundPosition: '50% 50%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 100%'
	}

	const boxText = {
		transform: 'translate(-50%, -50%)',
		position: 'absolute',
		top: '50%',
		left: '50%',
	}

	return (
		<div className="section3">
			<div className="section3Top" style={{'display': 'flex', 'position': 'relative'}}>
				<div style={imgLeft}></div>
				<div style={section3Box}>
					<div className="boxText" style={boxText}>
						<h1>WEDDINGS</h1>
					</div>
				</div>
			</div>
			<div className="section3Bottom" style={{'display': 'flex', 'position': 'relative'}}>
				<div style={section3Box}>
					<div className="boxText" style={boxText}>
						<h1>WEDDINGS</h1>
					</div>
				</div>
				<div style={imgRight}></div>
			</div>
		</div>
	)
};

export default Section3;
