import React, { Component } from 'react';


const array = [
	{
		service: 'PERSONAL',
		price: '$2,500 - $3,500',
		features: [
			'Ceremony or Reception Coverage',
			'1 Videographer',
			'Up to 4 Hours of Coverage',
			'Basic Video Edit',
			'Personal Song Choice',
			'Additional Coverage is $125 per hour',
		],
		background: '#ec4418',
	},
	{
		service: 'BIRTHDAYS',
		price: '$2,800',
		features: [
		    'Ceremony & Reception',
		    '2 Videographers',
		    'Up to 4 hours of coverage',
		    'Personal Song Choice',
		    'Basic Video Edit',
		    'Additional Coverage is $125 per hour',
		],
		background: '#18b8ec',
	},
	{
		service: 'Business',
		price: 'Price Varies',
		features: [
		    'Consultation of overall goal',
		    'Unlimited coverage time',
		    '3 Videographers',
		   	'Up to 6 hours of coverage',
		    'Online Viewing',
		    'Personal Song Choice',
		    'Cinematic Edit',
		   ' Additional Coverage is $125 per hour',
		],
		background: '#ab83d7',
	},
	{
		service: 'WEDDINGS',
		price: '$5,200',
		features: [
		    'Bridal & Groom Preparation',
		    'Ceremony & Reception Coverage',
		    'Cinematic highlights with full edit',
		    'Up to 12 hours of coverage',
		    'Online Viewing',
		   	'Film on disk and drive',
		],
		background: '#ec4a4a',
	},

]
class Section5 extends Component {
	render() {
		const section5Width = {
			display: 'flex',
			margin: '0 auto',
			maxWidth: '1200px',
		}

		const priceBox = {
			float: 'left',
			width: '100%',
			position: 'relative',
			paddingBottom: '10%',
			boxShadow: '0px 0px 4px -1px rgba(0,0,0,0.75)',
		}

		var invest = array.map((item) => {
			const features = item.features;
			const background = {
				background: item.background,
				color: 'white',
				textAlign: 'center',
				fontSize: '1.3em',
				padding: '8% 1%',
			}
			return(
				<div style={Object.assign({}, priceBox)}>
					<div style={background}>
						<h1 >{item.service}</h1>
						<h1>{item.price}</h1>
					</div>
					<div style={{'padding': '8%'}}>
						{features.map((feature) => {
							return(<p style={{'line-height': '2', 'color': '#555'}} >{feature}</p>)
						})}
					</div>
					<div style={{'transform': 'translate(-50%, 0)', 'position': 'absolute', 'left': '50%', 'bottom': '8%', 'padding': '4% 9%', 'background': `${item.background}`, 'color': 'white', 'text-align': 'center'}}>
						Choose Plan
					</div>
				</div>
			)
		})

		return (
		  <div style={{'clear': 'both', 'padding': '4%'}}>
		  		<h1 style={{'font-size': '3em', 'text-align': 'center', 'font-weight': 'bold', 'margin-bottom': '60px'}}>Investment and Pricing</h1>
				<div style={section5Width} className="section5Width">
					{invest}
				</div>
		  </div>
		);
	}
}

export default Section5;
